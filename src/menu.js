const menuLists = [
    {
      name: 'Taro',
      description: 'Taro is a traditional food come from west Cameroon',
      price: '$20',
    },
    {
      name: 'Eru',
      description: 'Taro is a traditional food come from west Cameroon',
      price: '$20',
    },
    {
      name: 'Okok',
      description: 'Taro is a traditional food come from west Cameroon',
      price: '$20',
    },
    {
      name: 'Congré',
      description: 'Taro is a traditional food come from west Cameroon',
      price: '$20',
    },
    {
      name: 'Met de pistache',
      description: 'Taro is a traditional food come from west Cameroon',
      price: '$20',
    },
  ];
  
  function Menu() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('class', 'menu');
    const ul = document.createElement('ul');
    const title = document.createElement('h1');
    title.textContent = 'Menu List';
  
    menuLists.forEach(menu => {
      const list = document.createElement('li');
      const name = document.createElement('h4');
      name.textContent = menu.name;
  
      const desc = document.createElement('p');
      desc.textContent = menu.description;
  
      const price = document.createElement('span');
      price.textContent = menu.price;
      list.append(name, desc, price);
      ul.append(list);
    });
  
    menuDiv.append(ul);
    content.append(menuDiv);
  }
  
  export { Menu as default };
  