let myLinks = [];
const linkys = document.getElementById("links");
const linkUl = document.getElementById('linkUl');
const deleteBtn = document.getElementById('delete-el');
const tabBtn = document.getElementById('tab-el')

// Load saved links from local storage
if (localStorage.getItem("myLinks")) {
    myLinks = JSON.parse(localStorage.getItem("myLinks"));
    displayLinks(myLinks);
}


tabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLinks.push(tabs[0].url)
        localStorage.setItem("myLinks", JSON.stringify(myLinks));
        displayLinks(myLinks)
    })
})

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLinks = [];
    displayLinks(myLinks);
})

function save() {
    const linkValue = linkys.value.trim();
    if (linkValue !== "") {
        myLinks.push(linkValue); 
        linkys.value = "";
        saveToLocalStorage();
        displayLinks(myLinks);
    }
}

function removeLink(button) {
    const li = button.parentElement;
    const linkText = li.querySelector("a").textContent;
    myLinks = myLinks.filter(link => link !== linkText);
    saveToLocalStorage();
    linkUl.removeChild(li);
}

function displayLinks(array) {
    linkUl.innerHTML = "";
    array.forEach(link => {
        const li = document.createElement("li");
        li.innerHTML = `
            <a href="${link}" target="_blank">${link}</a>
            <button onclick="removeLink(this)" class="remove">x</button>
        `;
        linkUl.appendChild(li);
    });
}

function saveToLocalStorage() {
    localStorage.setItem("myLinks", JSON.stringify(myLinks));
}
