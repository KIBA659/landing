(function () {
    const priseboxs = [
        {
            id: "Ранкові",
            time: "до 12:00",
            timeforweek: "3",
            period: "1",
            prisewithcoach: "1370",
            prisewithoutcoach: "370",
        },
        {
            id: "Обідні",
            time: "від 12:00 до 16:00",
            timeforweek: "3",
            period: "1",
            prisewithcoach: "1340",
            prisewithoutcoach: "340",
        },
        {
            id: "Денні",
            time: "від 16:00 до 18:00",
            timeforweek: "3",
            period: "1",
            prisewithcoach: "1410",
            prisewithoutcoach: "410",
        },
        {
            id: "Вечірні",
            time: "від 18:00 до 22:00",
            timeforweek: "3",
            period: "1",
            prisewithcoach: "1450",
            prisewithoutcoach: "450",
        },
        {
            id: "Безлімітні",
            time: "від 8:00 до 22:00",
            timeforweek: "∞",
            period: "1",
            prisewithcoach: "1520",
            prisewithoutcoach: "520",
        },
    ]

    const slidesArray = [];
    function arrayslides(priseboxs) {
        for (const prisebox of priseboxs) {
            slidesArray.push(
                `<div class="main__caroysel__box">
               <div class="caroysel__box__item">
            <h2 class="carousel__item carousel__tittle">${prisebox.id}</h2>
            <p class="carousel__item carousel__time">Час: ${prisebox.time}</p>
            <p class="carousel__item carousel__timeforweek">Кількість зазів на тиждень: ${prisebox.timeforweek}</p>
            <p class="carousel__item carousel__period">Період: ${prisebox.period} місяць</p>
            <p class="carousel__item carousel__prisewithcoach">З тренером: ${prisebox.prisewithcoach} грн</p>
            <p class="carousel__item carousel__prisewithoutcoach">Без тренера: ${prisebox.prisewithoutcoach} грн</p>
            </div>
            <div class="caroysel__box__button">
            <a class=" carousel__href" href="#Singup">Купити</a>
            </div>
            </div>`
            )
        }
        return slidesArray;
    }

    arrayslides(priseboxs);

    let currentSlideIdx = 0;

    function rendercarousel() {
        if (window.innerWidth >= 280) {
            const carouselContainer = document.querySelector('.carousel__price')
            carouselContainer.innerHTML = slidesArray[currentSlideIdx]
            if (window.innerWidth >= 768) {
                const secondslidIdx = currentSlideIdx + 1 >= slidesArray.length ? 0 : currentSlideIdx + 1
                carouselContainer.innerHTML += slidesArray[secondslidIdx];
                if (window.innerWidth >= 1000) {
                    const thirddslidIdx = secondslidIdx + 1 >= slidesArray.length ? 0 : secondslidIdx + 1;
                    carouselContainer.innerHTML += slidesArray[thirddslidIdx];
                }
            }
        }
    }

    window.addEventListener('resize', rendercarousel);

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slidesArray.length) {
            currentSlideIdx = 0;
        }
        rendercarousel();
    }
    // setInterval(nextSlide, 4000);

    rendercarousel();

    const nextbtn = document.querySelector('.button__gallery__next');
    nextbtn.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.button__gallery__prev');
    btnPrev.addEventListener('click', () => {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slidesArray.length - 1 : currentSlideIdx - 1;
        rendercarousel();
    })
    
})()