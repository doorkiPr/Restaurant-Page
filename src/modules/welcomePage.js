const content = document.querySelector("#content");

function loadHeader() {

    const header = document.createElement("div");
    const title = document.createElement("div");
    const navbar = document.createElement("div");
    const navlist = document.createElement("ul");
    const navElementHome = document.createElement("li");
    const navElementMenu = document.createElement("li");
    const navElementContact = document.createElement("li");

    title.textContent="My Restaurant";

    navElementHome.textContent ="Home";
    navElementMenu.textContent="Menu";
    navElementContact.textContent="Contact"


    header.appendChild(title);
    header.appendChild(navbar);

    navbar.appendChild(navlist);

    navlist.appendChild(navElementHome);
    navlist.appendChild(navElementMenu);
    navlist.appendChild(navElementContact);
}