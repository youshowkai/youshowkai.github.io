'use strict'

{
  const menuItems = document.querySelectorAll('.menu div a');
  const contents = document.querySelectorAll('.content');
  const close = document.querySelectorAll('.closebtn a');
  const home = document.querySelector('div > ul');

  menuItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(clickedItem => {
        clickedItem.classList.remove('active');
      });
      item.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(item.dataset.id).classList.add('active');
    });
  });

  close.forEach(closebtn => {
    closebtn.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(clickedItem => {
        clickedItem.classList.remove('active');
      });
      contents.forEach(content => {
        content.classList.remove('active');
      });
      home.classList.add('active');
    });
  });
}

{
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if (dt !== el)
        el.parentNode.classList.remove('appear');
      });
    });
  });
}

{
  const forms = document.querySelectorAll('#formbtns div a');
  const formText = document.querySelectorAll('.form');
  const back = document.querySelectorAll('.backbtn a');
  const home = document.querySelector('#formhome');

  forms.forEach(form => {
    form.addEventListener('click', e => {
      e.preventDefault();

      forms.forEach(clickForms => {
        clickForms.classList.remove('active');
      });
      formText.forEach(clickForm => {
        clickForm.classList.remove('active');
      });
      document.getElementById(form.dataset.id).classList.add('active');
    });
  });
  
  back.forEach(backbtn => {
    backbtn.addEventListener('click', e => {
      e.preventDefault();

      formText.forEach(clickedItem => {
        clickedItem.classList.remove('active');
      });
      home.classList.add('active');
    });
  });
}