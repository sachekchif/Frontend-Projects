const input1 = document.getElementById("input-el");
const input2 = document.getElementById("inputy-el");
const disText = document.getElementById("display-text");

function addel() {
    const inputValue1 = input1.value.trim();
    const inputValue2 = input2.value.trim();
    if (inputValue1 !== "" && inputValue2 !== "") {
        const addedText = inputValue1 + inputValue2;

        const li = document.createElement("li");
        li.innerHTML = `
            <p>${addedText}</p>
        `;
        disText.appendChild(li);

        input1.value = "";
        input2.value = "";
    }
}