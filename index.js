const burgerMenuButton = document.querySelector('#burger_input');
const asideMenuContent = document.querySelector('#aside-menu');
burgerMenuButton.onclick = (e) => {
    if(burgerMenuButton.checked) {
        asideMenuContent.style.display = "flex";
        asideMenuContent.style.left = "-20vw";
        $(asideMenuContent).animate({left: '0'});
    }
    else {
        $(asideMenuContent).hide("slow", () => {
            asideMenuContent.style.display = "none";
        });
    }
}

$('article.card:has(div.progression)').mouseenter((e) => {
    if(e.target !== e.currentTarget) return;
    let article = e.target;
    let progressBar = article.querySelector('div.progression');
    let counter = article.querySelector('div.progression > span.count');
    let maxValue = counter.getAttribute('percent-limit');
    progressBar.style.width = maxValue+'%';
    counter.innerText = 0;
    counter.setAttribute('counter-index', setInterval(updateCounter, 20, counter, parseInt(maxValue)));
});

function updateCounter(counter, maxValue) {
    currentValue = parseInt(counter.innerText);
    if(currentValue === maxValue) {
        clearInterval(counter.getAttribute('counter-index'));
    }
    else {
        counter.innerText = currentValue + 1;
    }
}