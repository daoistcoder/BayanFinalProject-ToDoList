const landingPage = document.getElementById('landing-page');
const landingPageButton = document.getElementById('landing-page-button');
const loginPageButton = document.getElementById('login-page-button');
const mainPage = document.getElementById('main-page');
const usernameInput = document.getElementById('username-input');
const usernameElement = document.getElementById('username');
const addItemButton = document.getElementById('add-item-button');
const newItemInput = document.getElementById('new-item-input');
const todoList = document.getElementById('todo-list');
const exitButton = document.getElementById('exit-button');

let items = [];

landingPageButton.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  
  if (username !== '') {
    landingPage.classList.add('d-none');
    mainPage.classList.remove('d-none');
    usernameElement.textContent = username;
    loginPageButton.innerText = "Logout";
  }
});

function renderItems() {
  todoList.innerHTML = '';

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    listItem.textContent = item;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'delete-button');
    deleteButton.dataset.index = i.toString();
    deleteButton.textContent = 'Delete';

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  }
}

addItemButton.addEventListener('click', () => {
  const item = newItemInput.value.trim();
  
  if (item !== '') {
    items.push(item);
    newItemInput.value = '';
    renderItems();
  }
});

todoList.addEventListener('click', (event) => {
  const target = event.target;
  
  if (target.classList.contains('delete-button')) {
    const index = parseInt(target.dataset.index);
    
    if (!isNaN(index) && index >= 0 && index < items.length) {
      items.splice(index, 1);
      renderItems();
    }
  }
});

exitButton.addEventListener('click', () => {
  landingPage.classList.remove('d-none');
  mainPage.classList.add('d-none');
  items = [];
  renderItems();
  loginPageButton.innerText = "Login";
  usernameInput.value = "";
});

renderItems();
