const counterEl = document.getElementById("counter-el");
const entries = document.getElementById("entries-el");
let counter = 0;

//increasing function
function increament() {
    counter = counter + 1;
    counterEl.textContent = counter; 
}

//saving how many passangers
function save() {
    let entry = `${counter} - `
    entries.textContent += entry;
    counterEl.innerText = 0;
    counter = 0;
}