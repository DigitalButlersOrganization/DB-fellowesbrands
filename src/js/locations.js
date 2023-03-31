import { Dropdown, Tab } from "bootstrap";

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
  new Tab(countriesTabs);
};

initLocationsTabs();
