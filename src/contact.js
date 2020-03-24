function Contact() {
  const content = document.getElementById('content');
  const contactDiv = document.createElement('div');
  contactDiv.setAttribute('class', 'contact');

  const contactTitle = document.createElement('h1');
  contactTitle.textContent = 'Contact';

  const restaurantEmail = document.createElement('h4');
  restaurantEmail.textContent = 'restaurant@gmail.com';
  const restaurantTel = document.createElement('h4');
  restaurantTel.textContent = '00237 677 32 14 10';
  const restaurantAdress = document.createElement('h4');
  restaurantAdress.textContent = 'Bastos, Yaounde, Cameroon';

  contactDiv.append(contactTitle, restaurantEmail, restaurantTel, restaurantAdress);

  content.append(contactDiv);
}

export { Contact as default };
