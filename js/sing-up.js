(function () {
    const slides = [
        '<div class="order__photo"><img class="order__photo" src="img/gym_phone2.jfif"></div>',
        '<div class="order__photo"><img class="order__photo" src="img/gym_phone2.jfif"></div>',
        '<div class="order__photo"><img class="order__photo" src="img/gym_phone2.jfif"></div>',
        '<div class="order__photo"><img class="order__photo" src="img/gym_phone2.jfif"></div>'
    ]

    let currentSlideIndex = 0;
    let indx=0
    function renderslide() {
        const slidescontainer = document.querySelector('.containern__order__photo')
        slidescontainer.innerHTML = slides[currentSlideIndex]
    }

    function nextslide() {
        currentSlideIndex++
        indx++
        if (currentSlideIndex >= slides.length||indx>=slidestittle.length) {
            currentSlideIndex = 0;
            indx=0
        }
        renderslide()
        renderslide1()
    }

    setInterval(nextslide, 3000);

    renderslide();
    const slidestittle = [
        '<div class="order__tittle"><p class="text__box">DRUNK IN NEW YORK</p></div>',
        '<div class="order__tittle"><p class="text__box">OLD TRADITIONS</p></div>',
        '<div class="order__tittle"><p class="text__box">GET DRUNK AND FRAME CHICKS</p></div>',
        '<div class="order__tittle"><p class="text__box">MODERN EQUIPMENT</p></div>',
        '<div class="order__tittle"><p class="text__box">ATTENTION TO DETAIL</p></div>'
    ]
    function renderslide1() {
        const tittlerandom = document.querySelector('.containern__order__text')
        tittlerandom.innerHTML = slidestittle[indx]
    }
    // setInterval(renderslide1, 1000)
})()
   