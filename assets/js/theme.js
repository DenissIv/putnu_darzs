function changeLang(language, el) {
    var container = document.querySelector('.chooseLang').classList;
    el = el.classList;

    if (container.contains('open')) {
        container.remove('open');
        if (!el.contains('chosen')) {

            document.querySelector('.chooseLang .chosen').classList.remove('chosen');
            el.add('chosen');

            console.log(language + ' chosen')
                // your code

        }
        return;
    }

    container.add('open');

}

function changeLangMobile(language, el) {
    var container = document.querySelector('.chooseLang-mob').classList;
    el = el.classList;

    if (container.contains('open')) {
        container.remove('open');
        if (!el.contains('chosen')) {

            document.querySelector('.chooseLang .chosen').classList.remove('chosen');
            el.add('chosen');

            console.log(language + ' chosen')
                // your code

        }
        return;
    }

    container.add('open');

}

let link = document.URL.split('/');
const currentLink = document.querySelectorAll('.item a')
console.log(link);
console.log(link[3]);
console.log(currentLink[0].getAttribute('href'));
for (let i = 0; i < currentLink.length; i++) {
    if (currentLink[i].getAttribute('href') === link[3]) {
        currentLink[i].classList.add("item", "active");
    }
}

/*function openInfo(){

}*/

const questions = document.getElementsByClassName('question-container');
let isOpen = false;

function openQuestion(id) {

    for (let i = 0; i < 3; i++) {
        if (questions[i].getAttribute("id") == id) {
            if (questions[i].lastElementChild.style.display == "block" || isOpen) {
                if (questions[i].lastElementChild.style.display == "block") isOpen = false; //ja bus nepieciesams
                if (id == 2) {
                    questions[i].style.height = "55px";
                } else if (window.innerWidth <= 500) {
                    questions[i].style.height = "39px";
                } else {
                    questions[i].style.height = "68px";
                }
                questions[i].lastElementChild.style.display = "none";
                let arrow = questions[i].children;
                arrow[1].style.transform = "rotate(0deg)"

            } else {
                if (window.innerWidth <= 500) {
                    questions[i].style.height = "180px";
                } else {
                    questions[i].style.height = "204px";
                }
                questions[i].lastElementChild.style.display = "block";
                let arrow = questions[i].children;
                arrow[1].style.transform = "rotate(180deg)"
                isOpen = true;
            }
        }

    }
    console.log(isOpen);
}

const box = document.getElementsByClassName("box");
const boxOpen = document.getElementsByClassName("box-open");

function openInfo(id) {
    for (let i = 0; i < box.length; i++) {
        if (box[i].getAttribute("id") == id) {
            console.log(1);
            if (box[i].style.display == "none") {
                box[i].style.display = "flex";
                boxOpen[i].style.display = "none";

            } else {
                box[i].style.display = "none";
                boxOpen[i].style.display = "flex";
                console.log(boxOpen[i]);
            }

        }
    }
}
const boxes = document.getElementsByClassName("box-tablet");
const boxesOpen = document.getElementsByClassName("box-open-tablet");

function openInfoTablet(id) {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].getAttribute("id") == id) {
            console.log(2);
            if (boxes[i].style.display == "none") {
                boxes[i].style.display = "flex";
                boxesOpen[i].style.display = "none";

            } else {
                boxes[i].style.display = "none";
                boxesOpen[i].style.display = "flex";
            }

        }
    }

}

//const questions = document.getElementsByClassName('question-container');

function openQuestionFull(id) {

    for (let i = 0; i < 3; i++) {
        if (questions[i].getAttribute("id") == id) {
            if (questions[i].lastElementChild.style.display == "block") {
                if (id == 2) {
                    //questions[i].style.height = "55px";
                } else if (window.innerWidth <= 500) {
                    //questions[i].style.height = "44px";
                } else {
                    //questions[i].style.height = "68px";
                }
                questions[i].lastElementChild.style.display = "none";
                let arrow = questions[i].children;
                arrow[1].style.transform = "rotate(0deg)"
            } else {
                if (window.innerWidth <= 500) {
                    //questions[i].style.height = "270px";
                } else {
                    // questions[i].style.height = "204px";
                }
                questions[i].lastElementChild.style.display = "block";
                let arrow = questions[i].children;
                arrow[1].style.transform = "rotate(180deg)"
                isOpen = true;
            }
        }

    }
}

const button = document.getElementById("myBtn");
const button_ = document.getElementById("myBtn_");
const menuBefore = document.querySelectorAll(".index-top-menu-container");
const menuBefore_ = document.querySelectorAll(".top-menu-container");
const mobile = document.getElementById("mobile-version");
const close = document.getElementById("close-version");
const header = document.getElementsByClassName("header-paragraph");
const uznemsana = document.getElementsByClassName("uznemsana-btn");
const reggio = document.getElementsByClassName("reggio-emilia")
const icons = document.getElementsByClassName("header-icons");
const menu = document.getElementsByClassName("menu");
const buttonMobile = document.querySelector(".responsive-menu-icon img");
const facebook = document.getElementById("facebook-img")

function openMenu() {
    mobile.src = "assets/img/logo-white-mob.png";
    close.src = "assets/img/cross.png";
    button.setAttribute('onclick', 'closeMenu()');
    header[0].style.display = "none";
    uznemsana[0].style.display = "none";
    reggio[0].style.display = "none";
    icons[0].style.display = "flex";
    menu[0].style.display = "flex";
    menuBefore[0].style.setProperty('--display', 'block');
    if (window.innerWidth <= 500) {
        buttonMobile.style.width = "15px";
        buttonMobile.style.height = "15px";
    }
}

function closeMenu() {
    mobile.src = "assets/img/logo@2x.png";
    close.src = "assets/img/menu.png";
    button.setAttribute('onclick', 'openMenu()');
    header[0].style.display = "block";
    uznemsana[0].style.display = "block";
    reggio[0].style.display = "block";
    icons[0].style.display = "none";
    menu[0].style.display = "none";
    menuBefore[0].style.setProperty('--display', 'none');
    if (window.innerWidth <= 500) {
        buttonMobile.style.width = "23px";
        buttonMobile.style.height = "15px";
    }
}

function openMenu_() {
    facebook.src = "assets/img/Icon-ionic-logo-facebook.png";
    mobile.src = "assets/img/logo-white-mob.png";
    close.src = "assets/img/cross.png";
    button_.setAttribute('onclick', 'closeMenu_()');
    icons[0].style.display = "flex";
    menu[0].style.display = "flex";
    menuBefore_[0].style.setProperty('--display', 'block');
    if (window.innerWidth <= 500) {
        buttonMobile.style.width = "15px";
        buttonMobile.style.height = "15px";
    }
}

function closeMenu_() {
    mobile.src = "assets/img/krasains.png";
    close.src = "assets/img/menu-green.png";
    button_.setAttribute('onclick', 'openMenu_()');
    icons[0].style.display = "none";
    menu[0].style.display = "none";
    menuBefore_[0].style.setProperty('--display', 'none');
    if (window.innerWidth <= 500) {
        buttonMobile.style.width = "23px";
        buttonMobile.style.height = "15px";
    }
}