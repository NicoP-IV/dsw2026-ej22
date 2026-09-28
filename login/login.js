document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const form = document.querySelector('form');
  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('toggle-password');

  // Muestra u oculta la contraseña con el ojito
  togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  });

  // Valida el usuario y lleva al panel
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = passwordInput.value;

    if (username === 'admin' && password === 'password') {
      window.location.href = '../menu-nav/menu.html';
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  });
});