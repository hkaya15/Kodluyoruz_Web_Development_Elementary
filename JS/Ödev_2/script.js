function newElement() {
    //GET
    let input = document.getElementById("task");
    let list = document.getElementById("list");
    let li = document.createElement("li");
    let i = document.createElement("i");
    let div = document.createElement("div");

    i.classList.add("fa", "fa-close");
    div.classList.add("delete", "close");
    div.setAttribute("onClick", "closed()");
    div.append(i);
    li.innerHTML = `${input.value}`;
    li.append(div);

    if (input.value.trim() != "") {
        storage(input.value)
        list.append(li);
        input.value = "";

        $("#liveToast").toast('show');
    } else {
        $("#liveToast1").toast('show');;

    }


}

let allLi = document.getElementById("list");
allLi.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "LI") {
        if (e.target.classList.contains("checked")) {
            e.target.classList.remove("checked")
        } else {

            e.target.classList.add("checked");
        }

    }
});


function closed() {
    event.target.parentElement.parentElement.remove();
    localStorage.removeItem(event.target.parentElement.parentElement.textContent)
}



function storage(value) {
    localStorage.setItem(value, value);
}

//ALL LOCALSTORAGE
var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

while (i--) {
    values.push(localStorage.getItem(keys[i]));
}


for (let index = 0; index < values.length; index++) {
    let list = document.getElementById("list");
    let li = document.createElement("li");
    let i = document.createElement("i");
    li.innerHTML = values[index];
    let div = document.createElement("div");
    div.classList.add("delete", "close");
    div.setAttribute("onClick", "closed()");
    i.classList.add("fa", "fa-close")
    div.append(i)
    li.append(div)
    list.append(li);
}


