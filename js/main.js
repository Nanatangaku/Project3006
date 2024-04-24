let openBtn = document.querySelector('.bi-list');
let closeBtn = document.querySelector('.bi-x-lg');
let menu = document.querySelector('.navbar__menu');



openBtn.addEventListener("click", () => {
    openBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    menu.classList.toggle('hidden');
});

closeBtn.addEventListener("click", () => {
    openBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    menu.classList.toggle('hidden');
});


function AboutLeagueofLegends() {
    window.open("https://euw.leagueoflegends.com/en/game-info/get-started/what-is-lol/?_gl=1*5us1hx*_ga*MjA0NTIyNDM3OS4xNzEzNzc0NDcy*_ga_FXBJE5DEDD*MTcxMzkzNDI5OS40LjEuMTcxMzk2MjYyNi4wLjAuMA..");
}

function Helpusimprove() {
    window.open("http://leagueoflegends.eu-surveyen2.sgizmo.com/s3/");
}

function ServerStatus() {
    window.open("https://status.riotgames.com/?locale=en_GB&region=euw");
}

function Support() {
    window.open("https://support.riotgames.com/hc/en-us");
}

function EsportsProSite() {
    window.open("https://eu.lolesports.com/en");
}

function youtube() {
    window.open("https://youtube.com");
}


function twitter() {
    window.open("https://twitter.com");
}

function facebook() {
    window.open("https://facebook.com");
}

function instagram() {
    window.open("https://instagram.com");
}

function tiktok() {
    window.open("https://tiktok.com");
}