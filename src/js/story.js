import 'mdb-ui-kit';

/**
 * Scrollspy story section
 */
const scrollSpy = () => {
  const navLinks = document.querySelectorAll('.story-nav-link');
  const content = document.querySelector('.story-content');

  /* help function */
  function getCurrentSection() {
    const sections = document.querySelectorAll('.story-content > div');

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();
      if (rect.left >= 0 && rect.right <= window.innerWidth) {
        return section;
      }
    }

    return null;
  }

  /* scroll to section */
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      const targetOffsetLeft = targetElement.offsetLeft - content.offsetLeft - (content.offsetWidth - targetElement.offsetWidth) / 2;

      content.scrollTo({
        left: targetOffsetLeft,
        behavior: 'smooth',
      });
    });
  });

  /* mouse down event */
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  content.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    startX = event.pageX - content.offsetLeft;
    scrollLeft = content.scrollLeft;
  });

  content.addEventListener('mousemove', (event) => {
    if (!isMouseDown) return;
    event.preventDefault();
    const x = event.pageX - content.offsetLeft;
    const walk = (x - startX) * 3; // установите желаемую скорость прокрутки
    content.scrollLeft = scrollLeft - walk;
  });

  content.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  content.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });

  /* set active nav item */
  content.addEventListener('scroll', () => {
    const currentSection = getCurrentSection();

    if (!currentSection) {
      return;
    }

    navLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${currentSection.id}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  window.addEventListener('load', () => {
    const currentSection = getCurrentSection();

    if (!currentSection) {
      return;
    }

    if (currentSection !== null) {
      const currentLink = document.querySelector(`.story-nav-link[href="#${currentSection.id}"]`);
      currentLink.classList.add('active');
    }
  });
};

scrollSpy();
