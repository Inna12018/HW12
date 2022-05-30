// Задание
// Реализовать функцию подсветки нажимаемых клавиш. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

// Технические требования:

// В файле index.html лежит разметка для кнопок.
// Каждая кнопка содержит в себе название клавиши на клавиатуре
// По нажатию указанных клавиш - та кнопка, на которой написана эта буква, должна окрашиваться в синий цвет. При этом, если какая-то другая буква уже ранее была окрашена в синий цвет - она становится черной. Например по нажатию Enter первая кнопка окрашивается в синий цвет. Далее, пользователь нажимает S, и кнопка S окрашивается в синий цвет, а кнопка Enter опять становится черной.

// 

const btn =  document.querySelectorAll('.btn');
   
function chengeColor(e) {
    const key = document.querySelector(`.btn[data-key="${e.keyCode}"]`).classList.add('btn-blue'); 
    console.log(e.keyCode);
        
  }

  btn.forEach(btn => btn.addEventListener('keydown',()=> {
    const attr = btn.dataset.key;
    console.log(attr);
    document.querySelector('.btn.btn-blue').classList.remove('btn-blue');
    // btn.classList.add('btn-blue');
    // document.querySelector(`.key[data-key="${attr}-key"]`).classList.add('btn-blue'); 

  }));

 document.addEventListener('keydown', chengeColor);

    