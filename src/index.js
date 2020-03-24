import Home from './home';
import Menu from './menu';
import Contact from './contact';
import NavBar from './navbar';

window.onload = NavBar();

Home();
const navigationHeader = document.getElementById('header');
const content = document.getElementById('content');
const updatePageContent = event => {
  const innerText = event.target.textContent;
  // eslint-disable-next-line default-case
  switch (innerText) {
    case 'Menu':
      content.innerHTML = '';
      Menu();
      break;
    case 'Contact':
      content.innerHTML = '';
      Contact();
      break;
    case 'Home':
      content.innerHTML = '';
      Home();
      break;
  }
};

navigationHeader.addEventListener('click', updatePageContent);
