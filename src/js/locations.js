import 'mdb-ui-kit';

/** ***** Tabs ***** **/
const initLocationsTabs = () => {
  const countriesTabs = document.getElementById('countries-tabs');
  const countriesNavLinks = countriesTabs.querySelectorAll('.nav-link');

  function disableTabs() {
    countriesNavLinks.forEach((link) => {
      link.removeAttribute('data-mdb-toggle');
    });
  }

  function enableTabs() {
    countriesNavLinks.forEach((link) => {
      link.setAttribute('data-mdb-toggle', 'tab');
    });
  }

  window.addEventListener('load', () => {
    if (window.innerWidth < 480) {
      disableTabs();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth < 480) {
      disableTabs();
    } else {
      enableTabs();
    }
  });
};

initLocationsTabs();
