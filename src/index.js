const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let str="";
    let dec="";
    let count=0;
    for(let i=0; i<expr.length; i++){
        if(i%10==0 && i!=0 && str!=''){
            dec+=MORSE_TABLE[str];
            str="";
        }
        if(expr[i]=='1' && expr[i+1]=='1'){
            str+="-";
            i++;
        }
        else if(expr[i]=='1' && expr[i+1]=='0'){
            str+=".";
            i++;
        }
        else if(expr[i]=='*' && count==9){
            dec+=" ";
            count=0;
        }
        else if(expr[i]=='*'){count++;}
    }
    dec+=MORSE_TABLE[str];//decode last element
    return dec;
}

module.exports = {
    decode
}