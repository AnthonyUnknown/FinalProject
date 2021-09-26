let sit = document.querySelector(".sit");

let selectedTicket = [];
function onSelectTicket (event) {
    let target = event.target;
    if (selectedTicket.includes(target.value)) {
        selectedTicket = selectedTicket.filter(item => {
            return item !== target.value
        }) 
    } else {
        selectedTicket.push(target.value)
    }
} 

for (var i = 1; i <= 24; i++) {
    let row = document.createElement('div');
    row.classList.add('first_row_1');
    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", `${i}`);
    checkbox.setAttribute("value", `${i}`);
    if (i % 2 === 0 ) {
        checkbox.setAttribute("disabled", "true") 
    }
    checkbox.addEventListener("change", onSelectTicket)
    label.setAttribute("for", `${i}`);
    checkbox.classList.add('sit_check');
    label.classList.add('label_check');
    row.appendChild(checkbox);
    row.appendChild(label);
    label.innerHTML = `<span class="number_label">${i}</span>`
    sit.appendChild(row);
}
let filmName = "Форсаж 10"
let dialogErrorZero = document.querySelector(".dialog_error0")
let dialogErrorFive = document.querySelector(".dialog_error5")
let openDialog = document.querySelector("#openDialog");
let dialog = document.querySelector(".dialog_ticket");

openDialog.onclick = function () {
    if (selectedTicket.length === 0) {
        dialogErrorZero.show()
    }
    else if (selectedTicket.length <= 5 && selectedTicket.length > 0)  {
    console.log(selectedTicket)
    for (elem of selectedTicket) {
    let div = document.createElement('div');
    let r;
    let firstRow = [1,2,3,4,5,6]
    let secondRow = [7,8,9,10,11,12]
    let thirdRow = [13,14,15,16,17,18]
    let fourthRow = [19,20,21,22,23,24]
        if (firstRow.includes(Number(elem))) {
            r = 1
        } else if (secondRow.includes(Number(elem))) {
            r = 2
        } else if (thirdRow.includes(Number(elem))) {
            r = 3
        } else if (fourthRow.includes(Number(elem))) {
            r = 4
        };
    div.innerHTML = `<span>Билет на фильм "${filmName}"<br>Место: ${elem}, ряд: ${r}<br><br>Зал № 1, начало сеанса: 22:00<br>Цена: 12 BYN</span>`;
    div.classList.add('div_dialog');
    dialog.appendChild(div)
    let price = document.querySelector(".price");
    let priceNum = selectedTicket.length * 12;
    price.innerHTML = `Общая стоимость: ${priceNum} BYN`;
    }
    dialog.show()
    openDialog.setAttribute("disabled", "true")
} else {
    dialogErrorFive.show()
}
}

let buttonClosePrice = document.querySelector('#button_close_ticket')
let buttonZeroBack = document.querySelector('#button_error0')
let buttonFiveBack = document.querySelector('#button_error5')
let body = document.body  

buttonClosePrice.onclick = function () {
    dialog.close()
}

buttonZeroBack.onclick = function () {
    dialogErrorZero.close()
}

buttonFiveBack.onclick = function () {
    dialogErrorFive.close()
}

let poster = document.querySelector('.poster')
let filmSelectName = document.querySelector('.top_list_film')
let selectFilm = document.querySelector('#select_film');

let checkDisable = document.querySelectorAll("checkbox"); /* Тут чекбоксы */

selectFilm.onchange = function(event) {
    if (event.target.value === "fast_and_furios") {
        filmSelectName.innerHTML = "Форсаж 10"
        body.style.background = "url(https://sun9-17.userapi.com/impg/c855720/v855720672/1eeb6c/ruQid69Qj7E.jpg?size=604x604&quality=96&sign=63c47d55aee389aeb98d92e90b04c145&type=album) no-repeat";
        body.style.backgroundSize = "cover";
        body.style.height = "100%"
        poster.setAttribute("src", "poster.jpg")
        filmName = "Форсаж 10";
        body.style.backgroundPosition = "center top";
        openDialog.removeAttribute("disabled")
        checkDisable.removeAttribute("checked") /* тут убираю, пробовал так же через setAttribute и false, но почему-то не работает */
        selectedTicket = []
    } else if (event.target.value === "taxi") {
        filmSelectName.innerHTML = "Такси 2"
        body.style.background = "url(https://www.film.ru/sites/default/files/images/Taxi-1998.jpg) no-repeat";
        body.style.backgroundSize = "cover";
        body.style.height = "100%"
        poster.setAttribute("src", "tax.jpg")
        filmName = "Такси 2";
        body.style.backgroundPosition = "center top";
        openDialog.removeAttribute("disabled")
        checkDisable.removeAttribute("checked")
        selectedTicket = []
    } else if (event.target.value === "fly_marshal") {
        filmSelectName.innerHTML = "Воздушный маршал"
        body.style.background = "url(https://newrutor.info/uploads/posts/2014-07/1405165349_1.jpg) no-repeat";
        body.style.backgroundSize = "cover";
        body.style.height = "100%"
        body.style.backgroundPosition = "center top";
        poster.setAttribute("src", "marsh.jpg")
        filmName = "Воздушный маршал";
        openDialog.removeAttribute("disabled")
        checkDisable.removeAttribute("checked")
        selectedTicket = []
    }
}

let searchDiv = document.querySelector(".film_search");
let arrSearch = ["Форсаж", "Такси", "Воздушный маршал"];

document.querySelector("#text_content").onchange = function () {
    let val = this.value.toLowerCase().trim();
    const filteredArr = arrSearch.filter(film =>
        {
            return film.toLowerCase().indexOf(val) !== -1
        })
            if (document.querySelector("#text_content").value === "") {
                searchDiv.innerHTML = ""
                searchDiv.style.display = "none";
            }
             else if (filteredArr.length) {
            filteredArr.forEach(film =>
                {
                    let spanFind = document.createElement("span");
                    spanFind.innerHTML = film;
                    searchDiv.appendChild(spanFind);
                    searchDiv.style.display = "block";
                }) 
        }
    }
