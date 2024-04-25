let nextElement = document.getElementById('next');
let prevElement = document.getElementById('prev');
let carouselElement = document.querySelector('.carousel');
let listElement = document.querySelector('.carousel .list');
let thumbnailElement = document.querySelector('.carousel .thumbnail');

let timeRunning = 0;
let timeAutoNext = 12000;
let runTimeOut;
let runAutoRun = setTimeout(function() {
    nextElement.click();
}, timeAutoNext);

nextElement.onclick = function() {
    showSlider('next');
}
prevElement.onclick = function() {
    showSlider('prev');
}

function showSlider(type) {
    let championsSlider = document.querySelectorAll('.carousel .list .champions');
    let championsThumbnail = document.querySelectorAll('.carousel .thumbnail .champions');

    if (type === 'next') {
        listElement.appendChild(championsSlider[0]);
        thumbnailElement.appendChild(championsThumbnail[0]);
        carouselElement.classList.add('next');
    } else {
        let positionLastChampions = championsSlider.length - 1;
        listElement.prepend(championsSlider[positionLastChampions]);
        thumbnailElement.prepend(championsThumbnail[positionLastChampions]);
        carouselElement.classList.add('prev');
    }
    
    clearTimeout(runTimeOut);

    runTimeOut = setTimeout(function() {
        carouselElement.classList.remove('next');
        carouselElement.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun);

    runAutoRun = setTimeout(function() {
        nextElement.click();
    }, timeAutoNext);

}