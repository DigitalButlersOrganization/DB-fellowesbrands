import { Dropdown, Tab } from "bootstrap";

const awardsTabs = document.getElementById('awards-tabs');
const awardsNavLinks = awardsTabs.querySelectorAll('.nav-link');
const dropdownMenuForTabs = document.querySelector('.dropdown-menu[data-name="awards"]');
const dropdownTrigger = document.querySelector('.dropdown-toggle[data-bs-toggle="dropdown"]');

/** ***** Init Dropdown ***** **/
const initAwardsDropdown = () => {
  new Dropdown(dropdownTrigger);

  dropdownMenuForTabs.addEventListener("click", function (event) {
    const selectedHref = event.target.dataset.value;
    dropdownTrigger.textContent = event.target.textContent;
    const prevActive = document.querySelector('.dropdown-item.active');
    prevActive.classList.remove('active');
    event.target.classList.add('active');

    const matchedLink = Array.from(awardsNavLinks).find(
      el=>el.href.includes(selectedHref)
    );
    matchedLink.click();
  })
}

initAwardsDropdown();

/** ***** Tabs ***** **/
const initAwardsTabs = () => {
  new Tab(awardsTabs);
};

initAwardsTabs();
