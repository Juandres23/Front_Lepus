// Función para enviar el formulario al backend
  function submitLoginForm() {
    const email = document.getElementById("email").value;
    const contrasena = document.getElementById("contrasena").value;
    const id_rol = document.getElementById("id_rol").value;

    // Crear un objeto con los datos del formulario
    const data = {
      email: email,
      contrasena: contrasena,
      id_rol: id_rol,
    };

    // Realizar una solicitud POST al backend
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes manejar la respuesta del backend, por ejemplo, redirigir al usuario a una página de inicio o mostrar un mensaje de error en caso de credenciales inválidas.
      })
      .catch((error) => {
        // Manejar errores en la solicitud
        console.error("Error en la solicitud:", error);
      });
  }

  // Agregar un evento de escucha para el envío del formulario
  document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío tradicional del formulario
    submitLoginForm(); // Enviar los datos del formulario al backend
  });
