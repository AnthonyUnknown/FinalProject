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

for (let i = 1; i <= 24; i++) {
    let row = document.createElement('div');
    row.classList.add('first_row_1');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
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
    sit.appendChild(row)
    
}
let film_name = "Форсаж 10"
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
    if (Number(elem) === 1 || Number(elem) === 3 || Number(elem) === 5) {
        r = 1
    } else if (Number(elem) === 7 || Number(elem) === 9 || Number(elem) === 11) {
        r = 2
    } else if (Number(elem) === 13 || Number(elem) === 15 || Number(elem) === 17) {
        r= 3 
    }  else if (Number(elem) === 19 || Number(elem) === 21 || Number(elem) === 23) {
        r = 4
        };
    div.innerHTML = `<span>Билет на фильм "${film_name}"<br>Место: ${elem}, ряд: ${r}<br><br>Зал № 1, начало сеанса: 22:00<br>Цена: 12 BYN</span>`;
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

let buttonZeroBack = document.querySelector('#button_error0')
let buttonFiveBack = document.querySelector('#button_error5')
let body = document.body  

buttonZeroBack.onclick = function () {
    dialogErrorZero.close()
}

buttonFiveBack.onclick = function () {
    dialogErrorFive.close()
}

let poster = document.querySelector('.poster')
let filmSelectName = document.querySelector('.top_list_film')
let selectFilm = document.querySelector('#select_film');
selectFilm.onchange = function(event) {
    if (event.target.value === "fast_and_furios") {
        filmSelectName.innerHTML = "Форсаж 10"
        body.style.background = "url(https://sun9-17.userapi.com/impg/c855720/v855720672/1eeb6c/ruQid69Qj7E.jpg?size=604x604&quality=96&sign=63c47d55aee389aeb98d92e90b04c145&type=album) no-repeat";
        body.style.backgroundSize = "cover";
        body.style.height = "100%"
        poster.setAttribute("src", "poster.jpg")
        film_name = "Форсаж 10";
        body.style.backgroundPosition = "center top";
    } else if (event.target.value === "taxi") {
        filmSelectName.innerHTML = "Такси 2"
        body.style.background = "url(https://www.film.ru/sites/default/files/images/Taxi-1998.jpg) no-repeat";
        body.style.backgroundSize = "cover";
        body.style.height = "100%"
        poster.setAttribute("src", "tax.jpg")
        film_name = "Такси 2";
        body.style.backgroundPosition = "center top";
    } else if (event.target.value === "fly_marshal") {
        filmSelectName.innerHTML = "Воздушный маршал"
        body.style.background = "url(https://newrutor.info/uploads/posts/2014-07/1405165349_1.jpg) no-repeat";
        body.style.backgroundSize = "cover";
        body.style.height = "100%"
        body.style.backgroundPosition = "center top";
        poster.setAttribute("src", "marsh.jpg")
        film_name = "Воздушный маршал";
    }
}



document.querySelector("#text_content").oninput = function () {
    let val = this.value.trim();
    let valItems = document.querySelectorAll(".film_search div");
    if (val != "") {
        valItems.forEach(function(elem) {
            if (elem.innerText.search(val) == -1) {               /* Вот тут у меня почему-то не получается сразу скрыть элементы(добавлял прямо в html класс hide, а потом тут пробовал убирать, но ничего не получилось. Хотел, чтобы элементы сразу были скрыты, а появлялись потом. Оставил как есть пока что.) */
                elem.classList.add('hide')                        
                elem.classList.remove('color_search');
            } else {
                elem.classList.remove('hide');
                elem.classList.add('color_search');
            }
        });
    } else {
        valItems.forEach(function(elem) {
        elem.classList.remove('hide');
        });
    }
}