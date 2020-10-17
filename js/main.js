// accordion on jquery
! function(i) {
  var o, n;
  i(".question-qna").on("click", function() {
    o = i(this).parents(".qna__task"), n = o.find(".qna__content"),
      o.hasClass("active_block") ? (o.removeClass("active_block"),
        n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
        o.siblings(".active_block").removeClass("active_block").children(
          ".qna__content").stop(!0, !0).slideUp())
  })
}(jQuery);

// menu-burger

const burger = document.querySelector('.burger'),
	  nav = document.querySelector('.header__nav');

const navShow = function() {
	nav.classList.toggle('header__nav--active');
	burger.classList.toggle('burger--active');
}


burger.addEventListener('click', navShow);

// video 

const videoText = document.querySelector('.video__text'),
      videoPlay = document.querySelector('.video__play');

const textHide = function() {
  videoText.classList.add('video__text--active');
  videoPlay.classList.add('video__play--active');
}

videoPlay.addEventListener('click', textHide);

// slider 

const track1 = document.querySelector('.slider__track');
const headerPrev = document.querySelector('.slider__prev');
const headerNext = document.querySelector('.slider__next');
const item1 = document.querySelectorAll('.slider__item');

let position1 = 0;
let width1 = item1[0].clientWidth;

if (position1 === 0) {
  headerPrev.style.pointerEvents = "none";
}


const moveTrack1 = function() {
  track1.style.transform = "translateX(" + position1 + "px)"; // When we click on the button, we move the "track" using translateX + position.
}


let checkBtn = function() { // check buttons - check when the button need stops
  position1 === 0 ? headerPrev.style.pointerEvents = "none" : headerPrev.style.pointerEvents = "auto" ;
  position1 <= -width1 * 2 ? headerNext.style.pointerEvents = "none" : headerNext.style.pointerEvents = "auto" ;
}

headerPrev.addEventListener('click', () => {
  position1 += width1 + 100; // take width the item;

  moveTrack1();
  checkBtn();
});

headerNext.addEventListener('click', () => {
  position1 -= width1 + 100; // take width the item;

  moveTrack1();
  checkBtn();
});