// Menu mobile toggle e feedback do formulário

document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', function () {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', !isHidden);
  });

  // Fecha o menu ao clicar em um link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', false);
    });
  });

  // Formulário de contato (simulação)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = 'Enviando...';
    status.className = "mt-4 text-center text-gray-700";
    setTimeout(() => {
      status.textContent = 'Mensagem enviada com sucesso!';
      status.className = "mt-4 text-center text-green-600";
      form.reset();
    }, 1200);
  });

  // Coloque no final do <body> ou no seu script.js
  const menuServicosBtn = document.getElementById('menu-servicos');
  const submenuCircular = document.getElementById('submenu-circular');
  let submenuTimeout;

  function showSubmenu() {
    clearTimeout(submenuTimeout);
    submenuCircular.classList.add('active');
  }
  function hideSubmenu() {
    submenuTimeout = setTimeout(() => submenuCircular.classList.remove('active'), 200);
  }

  menuServicosBtn.addEventListener('mouseenter', showSubmenu);
  menuServicosBtn.addEventListener('mouseleave', hideSubmenu);
  submenuCircular.addEventListener('mouseenter', showSubmenu);
  submenuCircular.addEventListener('mouseleave', hideSubmenu);

  // Para acessibilidade via teclado
  menuServicosBtn.addEventListener('focus', showSubmenu);
  menuServicosBtn.addEventListener('blur', hideSubmenu);
});