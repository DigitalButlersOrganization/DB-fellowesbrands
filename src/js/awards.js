import { Tab } from 'bootstrap';

const triggerTabList = document.querySelectorAll('#awards-tab button');
triggerTabList.forEach((triggerEl) => {
  const tabTrigger = new Tab(triggerEl);

  triggerEl.addEventListener('click', (event) => {
    event.preventDefault();
    tabTrigger.show();
  });
});
