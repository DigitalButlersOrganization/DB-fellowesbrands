import 'mdb-ui-kit';
import { Dropdown } from "bootstrap";

const countriesTabs = document.getElementById('countries-tabs');
const countriesNavLinks = countriesTabs.querySelectorAll('.nav-link');
const dropdownMenuForTabs = document.querySelector('.dropdown-menu[data-name="countries"]');
const dropdownTrigger = document.querySelector('.dropdown-toggle[data-bs-toggle="dropdown"]');

/** ***** Init Dropdown ***** **/
const initLocationsDropdown = () => {
  new Dropdown(dropdownTrigger);

  dropdownMenuForTabs.addEventListener("click", function (event) {
    const selectedHref = event.target.dataset.value;
    dropdownTrigger.textContent = event.target.textContent;
    const prevActive = document.querySelector('.dropdown-item.active');
    prevActive.classList.remove('active');
    event.target.classList.add('active');

    const matchedLink = Array.from(countriesNavLinks).find(
      el=>el.href.includes(selectedHref)
    );
    matchedLink.click();
  })
}

initLocationsDropdown();

/** ***** Tabs ***** **/
const initLocationsTabs = () => {
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

