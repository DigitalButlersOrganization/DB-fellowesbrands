const initVideo = () => {
  const video = document.querySelector('#products-work__video');
  const videoBTN = document.querySelector('.products-work__video-button');

  video.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
    videoBTN.classList.toggle('js--paused');
  });
};

initVideo();
