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
];
let listCards = card;

function display() {
    let html = ``;
    for (let i = 0; i < listCards.length; i++) {
        html += `
      <tr>
          <td><img id="img" alt="img" src="${listCards[i].img}"></td>
          <td>${listCards[i].number}</td>
          <td>${listCards[i].date}</td>
          <td>${listCards[i].cvv}</td>
          <td><button >View</button></td>
          <td><button onclick="pressEdit(${i})">Edit</button></td>
          <td><button onclick="pressDelete(${i})">Delete</button></td>
      </tr>
      `;
    }
    document.getElementById("content").innerHTML = html;
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
    event.preventDefault();
    let img = document.querySelector('input[name="brand"]:checked + img').src;
    let number = getInputValue("number");
    let date = getInputValue("date");
    let cvv = getInputValue("cvv");
    listCards.push({
        img,
        number,
        date,
        cvv,
    });
    display();
}

function pressDelete(index) {
    listCards.splice(index, 1);
    display();
}

function pressEdit(index) {
    let card = listCards[index];
    setInputValue("img", card.img);
    setInputValue("number", card.number);
    setInputValue("date", card.date);
    setInputValue("cvv", card.cvv);
    document.getElementById("save").setAttribute("onclick", `pressSave(${index})`);
}

function pressSave(index) {
    event.preventDefault();
    let newCard = {
        img: getInputValue("img"),
        number: getInputValue("number"),
        date: getInputValue("date"),
        cvv: getInputValue("cvv"),
    };
    listCards[index] = newCard;
    display();
}