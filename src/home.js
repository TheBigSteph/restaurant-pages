function Home() {
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');
    homeDiv.setAttribute('class', 'home');
  
    const title = () => {
      const h1 = document.createElement('h1');
      h1.setAttribute('class', 'title');
      h1.textContent = 'Enjoy our Haus favourites for 5 euro at lunchtime.';
      homeDiv.append(h1);
    };
  
    const image = () => {
      const header = document.createElement('div');
      header.setAttribute('class', 'header');
      const url = 'assets/banner.jpg';
      header.style.height = '600px';
      header.style.backgroundImage = `url("${url}")`;
      homeDiv.append(header);
    };
  
    const text = () => {
      const p = document.createElement('p');
      p.setAttribute('class', 'text');
      p.textContent = 'From 12 - 3pm join us for Express Lunch pr Business Lunch. THe perfect break to the day, especially when enjoyed with a pint of one of our Munich beers!';
      homeDiv.append(p);
    };
  
    image();
    title();
    text();
  
    content.append(homeDiv);
  }
  
  export { Home as default };