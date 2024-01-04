const content = document.querySelector("#content");

function loadHeader() {

    const header = document.createElement("div");
    const title = document.createElement("div");
    const navbar = document.createElement("div");
    const navlist = document.createElement("ul");
    const navElementHome = document.createElement("li");
    const navElementMenu = document.createElement("li");
    const navElementContact = document.createElement("li");

    header.classList.toggle("header");
    title.classList.toggle("title");
    navbar.classList.toggle("navbar");
    navlist.classList.toggle("navlist");
    navElementHome.classList.toggle("navElement");
    navElementMenu.classList.toggle("navElement");
    navElementContact.classList.toggle("navElement");

    title.textContent = "My Restaurant";

    navElementHome.textContent = "Home";
    navElementMenu.textContent = "Menu";
    navElementContact.textContent = "Contact"


    header.appendChild(title);
    header.appendChild(navbar);

    navbar.appendChild(navlist);

    navlist.appendChild(navElementHome);
    navlist.appendChild(navElementMenu);
    navlist.appendChild(navElementContact);

    content.appendChild(header)
}

function loadMidSection() {
    const container = document.createElement("div");
    const square = document.createElement("div");
    const squareTitle = document.createElement("div");
    const squareImg = document.createElement("img");
    const squareDesc = document.createElement("div");


    container.classList.toggle("midContainer");
    square.classList.toggle("square");
    squareTitle.classList.toggle("squareTitle");
    squareImg.classList.toggle("squareImg");
    squareDesc.classList.toggle("squareDesc");

    squareTitle.textContent="best restaurant in town";
    squareDesc.textContent="some description, somme information , check out our menu !"

    square.appendChild(squareTitle);
    square.appendChild(squareImg);
    square.appendChild(squareDesc);

    container.appendChild(square);

    content.appendChild(container);
}

function loadFooter() {
    const container = document.createElement("div");
    const footerText = document.createElement("div");

    footerText.textContent = "some description...";

    container.appendChild(footerText);

    content.appendChild(container);
}

export default function loadWelcome() {
    loadHeader();
    loadMidSection();
    loadFooter();
}