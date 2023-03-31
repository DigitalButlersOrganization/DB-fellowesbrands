import { Dropdown, Tab } from "bootstrap";

const newsTabs = document.getElementById('news-tabs');
const newsNavLinks = newsTabs.querySelectorAll('.nav-link');
const dropdownMenuForTabs = document.querySelector('.dropdown-menu[data-name="news"]');
const dropdownTrigger = document.querySelector('.dropdown-toggle[data-bs-toggle="dropdown"]');

/** ***** Init Dropdown ***** **/
const initLatestNewsDropdown = () => {
  new Dropdown(dropdownTrigger);

  dropdownMenuForTabs.addEventListener("click", function (event) {
    const selectedHref = event.target.dataset.value;
    dropdownTrigger.textContent = event.target.textContent;
    const prevActive = document.querySelector('.dropdown-item.active');
    prevActive.classList.remove('active');
    event.target.classList.add('active');

    const matchedLink = Array.from(newsNavLinks).find(
      el=>el.href.includes(selectedHref)
    );
    matchedLink.click();
  })
}

initLatestNewsDropdown();

/** ***** Tabs ***** **/
const initLatestNewsTabs = () => {
  new Tab(newsTabs);
};

initLatestNewsTabs();
