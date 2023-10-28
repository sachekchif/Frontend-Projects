data = [
    {
        player: "jane",
        score: 70
    },
    {
        player: "owen",
        score: 70
    }
]

const janeScore = document.getElementById("jscore-el");
const owenScore = document.getElementById("oscore-el");
const btnJ = document.getElementById("btn-j");
const btnO = document.getElementById("btn-o");

btnJ.addEventListener('click', function() {
    for (let i = 0; i < data.length; i++) {
        janeScore.innerHTML = `${data[0].score}%`;
    }
})

btnO.addEventListener('click', function() {
    for (let i = 0; i < data.length; i++) {
        owenScore.innerHTML = `${data[1].score}%`;
    }
})


