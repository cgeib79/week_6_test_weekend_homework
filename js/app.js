document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  renderList();
})

let appList;
if (JSON.parse(localStorage.getItem('apps')) !== null){
  appList = JSON.parse(localStorage.getItem('apps'));
} else {
  appList = [];
}

const handleFormSubmit = function(event){
  event.preventDefault();

  const newApp = {
    name: event.target.name.value,
    category: event.target.category.value,
    membership_model: event.target.membership_model.value,
  };

  appList.push(newApp); //once clicked, submit apps

  localStorage.setItem('apps', JSON.stringify(appList));
  event.target.reset()
  renderList();
};

const renderList = function(){
    const appDiv = document.querySelector('#app-list');
    appDiv.innerHTML = "";
  const appList = JSON.parse(localStorage.getItem('apps'));
  appList.forEach((app) => {
    const appUl = document.createElement('ul');
    const nameLi = document.createElement('li');
    nameLi.textContent = `Name: ${app.name}`;
    const categoryLi = document.createElement('li');
    categoryLi.textContent = `Category: ${app.category}`;
    const membership_modelLi = document.createElement('li');
    membership_modelLi.textContent = `Membership Model: ${app.membership_model}`;

    appUl.appendChild(nameLi);
    appUl.appendChild(categoryLi);
    appUl.appendChild(membership_modelLi);

    appDiv.appendChild(appUl);


  })
}
