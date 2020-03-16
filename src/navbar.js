function NavBar() {
  const content = document.getElementById('content');

  const navDiv = document.createElement('div');

  navDiv.setAttribute('id', 'header');

  const navs = document.createElement('ul');
  navs.setAttribute('id', 'navs');

  const navbar = (page) => {
    const link = document.createElement('a');
    link.setAttribute('class', 'nav-bar');
    // eslint-disable-next-line no-script-url
    link.setAttribute('href', 'javascript:void(0)');
    link.textContent = page;
    navDiv.append(link);
  };

  navbar('Home');
  navbar('Menu');
  navbar('Contact');

  content.parentNode.insertBefore(navDiv, content);
}

export { NavBar as default };
