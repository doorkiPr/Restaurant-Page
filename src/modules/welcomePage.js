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

    container.classList.toggle("midContainer");
    square.classList.toggle("square");

    container.appendChild(square);

    content.appendChild(container);
}