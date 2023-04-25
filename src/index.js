// import { initializeUI } from './todos.js';
const projectFactory = (name) => {
  const projectArray = [];

  const newProject = () => {
    const projectName = prompt('Please enter the project name', 'New Project');

    if (projectName != null && projectName !== 'New Project') {
      const newListItem = document.createElement('li');
      const projectList = document.getElementById('projectList');
      newListItem.innerHTML = projectName;
      projectList.append(newListItem);
      projectArray.push(projectName);
    }
  };

  return { name, projectArray, newProject };
};

const ui = function initializeUI() {
  const body = document.getElementById('content');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const article = document.createElement('article');
  const footer = document.createElement('footer');
  const newProjectBtn = document.createElement('button');
  const projectList = document.createElement('ul');

  header.setAttribute('id', 'pageHeader');
  nav.setAttribute('id', 'mainNav');
  article.setAttribute('id', 'mainArticle');
  footer.setAttribute('id', 'pageFooter');
  newProjectBtn.setAttribute('id', 'newProjectBtn');
  newProjectBtn.setAttribute('class', 'button-11');
  projectList.setAttribute('id', 'projectList');

  header.innerHTML = 'To-Do List';
  nav.innerHTML = 'Projects';
  article.innerHTML = 'ARTICLE';
  footer.innerHTML = 'FOOTER';
  newProjectBtn.innerHTML = 'New Project';

  newProjectBtn.onclick = function () { projectFactory().newProject(); };

  body.append(header, nav, article, footer);
  nav.append(newProjectBtn, projectList);
};

const todoFactory = (title, description, dueDate, priority, notes, checkList) => ({
  title, description, dueDate, priority, notes, checkList,
});

const takeOutTrash = todoFactory('Take out the trash', "Don't forget to take out the trash.", new Date().toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' }), 'High');
const homeChores = projectFactory('Home Chores');
const workChores = projectFactory('Work Chores');

console.log(takeOutTrash.title);
console.log(takeOutTrash.dueDate);
console.log(takeOutTrash.priority);
console.log(homeChores.name);
console.log(workChores.name);

ui();
