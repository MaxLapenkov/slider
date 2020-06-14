//JQUERY
// $(document).ready(function() {
//     let position = 0;
//     const slidesToShow = 4;
//     const slidesToScroll = 3;

//     const container = $('.slider-container');
//     const track = $('.slider-track');
//     const items = $('.slider-item');

//     const btnPrev = $('.btn-prev');
//     const btnNext = $('.btn-next');

//     const itemWidth = container.width() / slidesToShow;
//     const movePosition = slidesToScroll * itemWidth;

//     const itemCount = $('.slider-item').length;
//     const extremePosition = -(itemCount * itemWidth - slidesToShow * itemWidth)
    
//     items.each((index, item) => {
//         $(item).css({
//             minWidth: itemWidth
//         })
//     })

//     btnPrev.click(() => {
//         position += movePosition;
//         if(position > 0) {
//             position = 0;
//         }
//         setPosition();
//         checkBtns();
//     })
//     btnNext.click(() => {
//         position -= movePosition;
//         if(position < extremePosition) {
//             position = extremePosition;
//         }
//         setPosition();
//         checkBtns();
//     })

//     const setPosition = () => {
//         track.css({
//             transform: `translateX(${position}px)`
//         })
//     }
//     const checkBtns = () => {
//         if(position <= extremePosition){
//             btnPrev.prop('disabled', false);
//             btnNext.prop('disabled', true);
//         } else if(position === 0) {
//             btnPrev.prop('disabled', true);
//             btnNext.prop('disabled', false);    
//         } else {
//             btnPrev.prop('disabled', false);
//             btnNext.prop('disabled', false);
//         }
//     }
//     checkBtns();
// })

//NAtive JS
    let position = 0;
    const slidesToShow = 4;
    const slidesToScroll = 3;

    const container = document.querySelector('.slider-container');
   
    const track = document.querySelector('.slider-track');
    const items = document.querySelectorAll('.slider-item');

    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');

    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    const itemCount = items.length;
    const extremePosition = -(itemCount * itemWidth - slidesToShow * itemWidth)
    
    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`
    })

    btnPrev.addEventListener('click', () => {
        position += movePosition;
        if(position > 0) {
            position = 0;
        }
        setPosition();
        checkBtns();
    })
    btnNext.addEventListener('click', () => {
        position -= movePosition;
        if(position < extremePosition) {
            position = extremePosition;
        }
        setPosition();
        checkBtns();
    })

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`
    }
    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= extremePosition;
    }
    checkBtns();