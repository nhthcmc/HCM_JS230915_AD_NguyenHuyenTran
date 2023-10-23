let student = {
    id: "011",
    name: "Lee Sang-hyeok",
    date: "07/05/1996",
    gender: "Male",
    class: "12A",
    image: "#",
}
let listStudent = [student];

function display() {
    let newListStudent = JSON.parse(localStorage.getItem("listStudents"))
    let html = ``;
    for (let i = 0; i < newListStudent.length; i++) {
        html += `
        <tr>
        <td>${newListStudent[i].id}</td>
        <td>${newListStudent[i].name}</td>
        <td>${newListStudent[i].date}</td>
        <td>${newListStudent[i].gender}</td>
        <td>${newListStudent[i].class}</td>
        <td><img id="img" src="${newListStudent[i].image}"></td>
        <td><button onclick="pressEdit(${i})">EDIT</button></td>
        <td><button onclick="pressDelete(${i})">DELETE</button></td>
</tr>
        `;
        document.getElementById("content").innerHTML = html;
    }
    resetValue();
}

display();

function resetValue() {
    setInputValue("id", "");
    setInputValue("name", "");
    setInputValue("date", "");
    setInputValue("gender", "");
    setInputValue("class", "");
    setInputValue("image", "");
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function setInputValue(id, value) {
    document.getElementById(id).value = value;
}

function add() {
    let id = getInputValue("id");
    let name = getInputValue("name");
    let date = getInputValue("date");
    let gender = getInputValue("gender");
    let _class = getInputValue("class");
    let image = getInputValue("image");
    listStudent.push({
        id,
        name,
        date,
        gender,
        class: _class,
        image,
    });
    localStorage.setItem("listStudent", JSON.stringify(listStudent))
    display();

}

function pressDelete(index) {
    listStudent.splice(index, 1);
    localStorage.setItem("listStudent", JSON.stringify(listStudent))
    display();
}

function pressEdit(index) {
    let newListStudent = JSON.parse(localStorage.getItem("listStudent"))
    let student = newListStudent[index];
    setInputValue("id", student.id);
    setInputValue("name", student.name);
    setInputValue("date", student.date);
    setInputValue("gender", student.gender);
    setInputValue("class", student.class);
    setInputValue("image", student.image);
    document.getElementById("save").value = index;
}

function pressSave() {
    let newListStudent = JSON.parse(localStorage.getItem("listStudent"))
    let index = document.getElementById("save").value
    let newStudent = newListStudent[index];
    newStudent.id = getInputValue("id")
    newStudent.name = getInputValue("name")
    newStudent.date = getInputValue("date")
    newStudent.gender = getInputValue("gender")
    newStudent.class = getInputValue("class")
    newStudent.image = getInputValue("image")
    newListStudent[index] = newStudent;
    localStorage.setItem("listStudent", JSON.stringify(newListStudent))
    display()
}





