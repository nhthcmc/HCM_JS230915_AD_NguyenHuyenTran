let card = [
    {
        img: "./img/mastercard.jpg",
        number: "3039 572* **** **95",
        date: "03/09",
        cvv: "***",
    },
    {
        img: "./img/mastercard.jpg",
        number: "3039 322* **** **90",
        date: "03/09",
        cvv: "***",
    },
    {
        img: "./img/mastercard.jpg",
        number: "3039 2278 5690 5673",
        date: "03/09",
        cvv: "245",
    },
]
let listCards = [card];

function display() {
    // let newListCards = JSON.parse(localStorage.getItem("listCards"))
    let html = ``;
    for (let i = 0; i < listCards.length; i++) {
        html += `
        <tr>
        <td><img id="img" alt="img" src="${listCards[i].image}"></td>
        <td>${listCards[i].number}</td>
        <td>${listCards[i].date}</td>
        <td>${listCards[i].cvv}</td>
        <td><button >View</button></td>
        <td><button onclick="pressEdit(${i})">Edit</button></td>
        <td><button onclick="pressDelete(${i})">Delete</button></td>
</tr>
        `;
        document.getElementById("content").innerHTML = html;
    }
    resetValue();
}

display();


function resetValue() {
    setInputValue("img", "");
    setInputValue("number", "");
    setInputValue("date", "");
    setInputValue("cvv", "");
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function setInputValue(id, value) {
    document.getElementById(id).value = value;
}

function add() {
    let img = getInputValue("img");
    let number = getInputValue("number");
    let date = getInputValue("date");
    let cvv = getInputValue("cvv");
    listCards.push([{
        img,
        number,
        date,
        cvv,
    }]);
    // localStorage.setItem("listCards", JSON.stringify(listCards))
    display();

}

function pressDelete(index) {
    listCards.splice(index, 1);
    // localStorage.setItem("listCards", JSON.stringify(listCards))
    display();
}

function pressEdit(index) {
    // let newListCards = JSON.parse(localStorage.getItem("listCards"))
    // let card = newListCards[index];
    setInputValue("img", card.img);
    setInputValue("number", card.number);
    setInputValue("date", card.date);
    setInputValue("cvv", card.cvv);
    document.getElementById("save").value = index;
}

function pressSave() {
    // let newListCards = JSON.parse(localStorage.getItem("listCards"))
    let index = document.getElementById("save").value
    let newCard = newListCards[index];
    newCard.id = getInputValue("img")
    newCard.name = getInputValue("number")
    newCard.date = getInputValue("date")
    newCard.gender = getInputValue("cvv")
    newListCards[index] = newCard;
    // localStorage.setItem("listStudent", JSON.stringify(newListCards))
    display()
}

