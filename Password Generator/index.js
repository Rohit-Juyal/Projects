const passEl = document.getElementById("pass");
const copyEl = document.getElementById("copy");
const lengthEl = document.getElementById("length");
const symbolEl = document.getElementById("symbol");
const numbersEl = document.getElementById("number");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const getpassEl = document.getElementById("getpass");
const sliderValue = document.getElementById("slidervalue");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "#@&!()^%+=_$*/";


lengthEl.oninput = function() {
    sliderValue.innerText = this.value
}

function getUppercase() {
    return upper[Math.floor(Math.random() * upper.length)]
}

function getLowercase() {
    return lower[Math.floor(Math.random() * lower.length)]
}

function getnumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
    length = lengthEl.value;
    
    let pass = [];

    if(symbolEl.checked) {
        pass.push(getSymbol())
    }

    if(numbersEl.checked) {
        pass.push(getnumber())
    }

    if(lowercaseEl.checked) {
        pass.push(getLowercase())
    }

    if(uppercaseEl.checked) {
        pass.push(getUppercase())
    }

    let password = ""
    password = pass[Math.floor(Math.random() * pass.length)];

    for(let i = password.length; i < length; i++) {
        const x = generateX()
        password += x;
    }
    
    passEl.innerText = password;
    
    if(!password) {
        window.alert("Checkbox not checked!")
    }
}

function generateX() {
    const xs = [];

    if(symbolEl.checked) {
        xs.push(getSymbol());
    }

    if(numbersEl.checked) {
        xs.push(getnumber());
    }

    if(lowercaseEl.checked) {
        xs.push(getLowercase());
    }

    if(uppercaseEl.checked) {
        xs.push(getUppercase())
    }

    if(xs.length === 0) {
        return "";
    }

    return xs[Math.floor(Math.random() * xs.length)];
}

getpassEl.addEventListener("click", generatePassword);


copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pass.innerText;

    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Copied to clipboard!");
})