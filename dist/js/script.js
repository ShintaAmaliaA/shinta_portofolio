// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

  document.addEventListener("click", function(e) {

    // bunga random
    const flowers = ["🌸", "🌷", "🌺", "💮", "🌼"];

    for(let i = 0; i < 8; i++) {

      const flower = document.createElement("span");
      flower.classList.add("flower-click");

      flower.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

      // posisi klik
      flower.style.left = e.clientX + "px";
      flower.style.top = e.clientY + "px";

      // ukuran random
      flower.style.fontSize =
        (Math.random() * 20 + 15) + "px";

      // arah random
      const x = (Math.random() - 0.5) * 150;
      const y = (Math.random() - 0.5) * 150;

      flower.animate([
        {
          transform: "translate(0,0) scale(0.5)",
          opacity: 1
        },
        {
          transform: `translate(${x}px, ${y}px) scale(1.5)`,
          opacity: 0
        }
      ], {
        duration: 2000,
        easing: "ease-out"
      });

      document.body.appendChild(flower);

      setTimeout(() => {
        flower.remove();
      }, 2000);
    }

  });

   const helloText = document.getElementById("hello-text");

    const greetings = [
      "Hello",
      "こんにちは",
      "안녕하세요",
      "Halo",
      "Bonjour",
      "Hola",
      "Ciao",
      "مرحبا",
      "你好",
      "Привет"
    ];

    let index = 0;

    const changeText = setInterval(() => {

      helloText.style.opacity = 0;
      helloText.style.transform = "scale(0.9)";

      setTimeout(() => {

        index++;

        if(index >= greetings.length){
          clearInterval(changeText);
          return;
        }

        helloText.innerHTML = greetings[index];

        helloText.style.opacity = 1;
        helloText.style.transform = "scale(1)";

      }, 100);

    }, 200);

  
    // pindahkan posisi toggle sesuai mode
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }
