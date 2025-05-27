function write(message) {
    process.stdout.write(message);
}

const ESC = '\x1b';
write(ESC + '[31m'); 
write(ESC + '[42m');
write('Hellow ta');
write(ESC + '[0m');
write('\n');

write(ESC + '[4m'); write('Jou'); write(ESC + '[0m'); write('\n');
write(ESC + '[5m'); write('Jou'); write(ESC + '[0m'); write('\n');
write(ESC + '[6m'); write('Jou'); write(ESC + '[0m'); write('\n');
write(ESC + '[7m'); write('Jou'); write(ESC + '[0m'); write('\n');
write(ESC + '[8m'); write('Jou'); write(ESC + '[0m'); write('\n');
write(ESC + '[9m'); write('Jou'); write(ESC + '[0m'); write('\n');

write(ESC + '[41m'); write('Jou'); write(ESC + '[0m'); write('\n');

for(let i = 0; i < 250; i++) {
    write(ESC + `[38;5;${i}m`); write(''); write(ESC + '[0m'); write(ESC + '[49m');
}

for(let i = 0; i < 250; i++) {
    write(ESC + `[42;2;${i};0;0m`); write(''); write(ESC + '[0m'); write(ESC + '[49m');
}