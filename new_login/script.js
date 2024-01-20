
document.addEventListener('DOMContentLoaded', function () {
  function formatTextInput(input, maxLength) {
    input.value = input.value.replace(/[^\w]/g, '').slice(0, maxLength);
  }

  function togglePasswordVisibility() {
    var passwordInput = document.getElementById('clave');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  }

  // Validación de longitud en el frontend
  document.getElementById('usuario').addEventListener('input', function () {
    formatTextInput(this, 20);
  });

  document.getElementById('clave').addEventListener('input', function () {
    formatTextInput(this, 20);
  });

  // Mostrar/ocultar contraseña
  var togglePasswordButton = document.getElementById('togglePassword');
  if (togglePasswordButton) {
    togglePasswordButton.addEventListener('click', togglePasswordVisibility);
  }
});
