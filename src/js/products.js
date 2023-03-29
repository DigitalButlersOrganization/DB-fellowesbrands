const initVideo = () => {
  const video = document.querySelector("#products-work__video");
  const videoBTN = document.querySelector(".products-work__video-button");

  video.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
    videoBTN.classList.toggle('js--paused');
  });
};

initVideo();



document.addEventListener('DOMContentLoaded', () => {
  const slidesAction = document.querySelectorAll('.products-process__accordion-item');

  slidesAction.forEach(slideAction => slideAction.addEventListener('click', (e) => {
    document.querySelector('.products-process__accordion-item.js--active').classList.remove("js--active");
    slideAction.classList.add("js--active");
  }));
});

const checkWidth = function() {
  const windowsize = document.width();
  if (windowsize > 480) {
      const slideWidth = document.querySelector('.js--active').width();
      document.querySelector('.products-process__accordion-item-content').css({
          width: `${slideWidth}px`,
      });
  }

}

document.addEventListener("resize", () => {
  checkWidth();

  clearTimeout(window.resizedFinished);
  window.resizedFinished = setTimeout( checkWidth , 500);
});
