const iconplus = document.querySelector(".icon-plus");
const inputnote = document.querySelector("#inputnote");
const form = document.querySelector("#form");
const container = document.querySelector(".container");

// nave bare
// when hover change color bottun
const changecolor = document.querySelector("#changecolor");
changecolor.addEventListener("mouseover", (eo) => {
    hidenul.style.display = "block";
})
changecolor.addEventListener("mouseout", (eo) => {
    hidenul.style.display = "none";
})
const bavebg = document.querySelector("#bavebg");
const myheader = document.querySelector(".myheader");

bavebg.addEventListener("click", (eo) => {
        const random = Math.round(Math.random() * 100)
        myheader.style.backgroundColor = `hsl(${random},44%,55%)`;
    })
    // console.log(myheader);



// add tasks
form.addEventListener("submit", (eo) => { //or using inputnote and click event
    eo.preventDefault();
    // check if imput not is empty then add task
    if (inputnote.value != ("")) {
        const task = `<div class="task ">
        <span class="icon-star icon"> </span>
        <p >${inputnote.value}</p>
        <div>
        <span id="ss" class="icon-trash icon"> </span>
        <span id="c" class="icon-angry icon-heart icon"> </span>
        </div>
        </div>`;
        container.innerHTML += task;
        inputnote.value = "";
        inputnote.placeholder = "WHAT NEXT!!";
    }
})


container.addEventListener('click', (eo) => {
    // remove the task
    if (eo.target.className == ("icon-trash icon")) {
        eo.target.parentNode.parentNode.remove();

    } else if (eo.target.id == ("c")) {
        eo.target.classList.toggle("icon-angry")
        if (eo.target.className == ("icon-heart icon")) {
            // add border green
            eo.target.parentNode.parentNode.classList.remove("removedonedorder");
            eo.target.parentNode.parentNode.classList.add("donedorder");
            // barr text after click emojy
            const ccc = eo.target.parentNode.previousElementSibling.innerText;
            eo.target.parentNode.previousElementSibling.innerHTML = `<del>${ccc}</del>`;

        }
        if (eo.target.className == ("icon-heart icon icon-angry")) {
            // add border red
            eo.target.parentNode.parentNode.classList.remove("donedorder");
            eo.target.parentNode.parentNode.classList.add("removedonedorder");
            // remove barr text after click emojy
            const ccc = eo.target.parentNode.previousElementSibling.innerText;
            eo.target.parentNode.previousElementSibling.innerHTML = ccc;
        }

    }
    if (eo.target.className == ("icon-star icon")) {
        eo.target.classList.add("iconorange");
        container.prepend(eo.target.parentNode);

    }
})

// time
const houre = document.querySelector("#houre");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const TTT = () => {
    let date = new Date();

    // houre.innerHTML = date.getHours();
    // min.innerHTML = date.getMinutes();
    // sec.innerHTML = date.getSeconds();

    if (date.getHours() < 10) {
        houre.innerHTML = `0${date.getHours()}`;
    } else {
        houre.innerHTML = `${date.getHours()}`;
    }
    if (date.getMinutes() < 10) {
        min.innerHTML = `0${date.getMinutes()}`;
    } else {
        min.innerHTML = `${date.getMinutes()}`;
    }
    if (date.getSeconds() < 10) {
        sec.innerHTML = `0${date.getSeconds()}`;
    } else {
        sec.innerHTML = `${date.getSeconds()}`;
    }
}

setInterval(TTT, 1000)