import axios from "axios";
import * as cheerio from 'cheerio';
import fs from 'fs';

function cacheGet(name) {
    return fs.existsSync(`./cache/${name}.html`) ? fs.readFileSync(`./cache/${name}.html`) : false;
}

function cacheSet(name, value) {
    if(!fs.existsSync('./cache')) fs.mkdirSync('./cache');
    fs.writeFileSync(`./cache/${name}.html`, value);
}

const sleep = x => new Promise(resolve => setTimeout(resolve, x));
const formatDate = date => date.toISOString().split('T')[0];

let baseUrl = 'https://comicskingdom.com';
let currentDate = new Date();

for(let i = 0; i < 10; i++) {
    if(i > 0) currentDate.setDate(currentDate.getDate() - 1);
    
    let dateStr = formatDate(currentDate);
    let url = `${baseUrl}/bizarro/${dateStr}`;
    let name = url.replace(/[/:-]/g, '');
    let data = cacheGet(name);
    
    if(!data) {
        console.log('LIVE REQUEST!!!!!!');
        await sleep(2000);
        try {
            data = (await axios.get(url)).data;
            cacheSet(name, data);
        } catch {
            console.log('Error fetching:', url);
            continue;
        }
    }
    
    const $ = cheerio.load(data);
    const imgSelectors = [
        '.comic-reader-container img',
        '.comic-image img',
        'img[alt*="Bizarro"]',
        '.daily-comic img',
        'main img',
        'img[src*="bizarro"]'
    ];
    
    let src, title;
    imgSelectors.some(selector => {
        const el = $(selector).first();
        if(el.length) {
            src = el.attr('src');
            title = el.attr('alt') || `Bizarro ${dateStr}`;
            return true;
        }
    });
    
    src = src && !src.startsWith('http') 
        ? (src.startsWith('/') ? baseUrl + src : baseUrl + '/' + src) 
        : src;
    
    console.log(src ? title : `No comic found for ${dateStr}`);
    console.log(url);
}