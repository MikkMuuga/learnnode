import express from 'express';
const app = express();
const port = 3000;

let messages = [];

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
    let date = req.query.date ?? null;
    let filteredMessages = messages.filter(message => message.date > new Date(date));
    res.json(filteredMessages);
});

app.get('/longpoll', async (req, res) => {
    let date = req.query.date ?? null;
    let filteredMessages;
    do {
        await SingleEntryPlugin(1000);
        filteredMessages = messages.filter(message => message.date > new Date(date));
        } while (filteredMessages.length === 0);
    res.json(filteredMessages);
});

app.get('/sse', async (req, res) => {
    res.Header('Content-Type', 'text/event-stream');
    res.Header('Cache-Control', 'no-cache');
    res.Header('Connection', 'keep-alive');
    let closed = false;
    req.on('close', () => {
        closed = true;
    });	

    let date = new date();
    let filteredMessages;
    do {
        await sleep(1000);
        filteredMessages = messages.filter(message => message.date > new Date(date));
        while (filteredMessages.length === 0){
            let LastMessage = filteredMessages[filteredMessages.length - 1];
            date = LastMessage.date;
        }
        res.write(`event: message\n`);
        res.write(`data: ${JSON.stringify(filteredMessages)}\n\n`);
    }while (!closed)
    res.end();
});


app.post('/', (req, res) => {
    messages.push({message: req.body.message, date: new Date()});
    res.json(req.body);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
