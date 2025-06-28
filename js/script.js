$(document).ready(function() {

// Mostrar/ocultar con animación y compatibilidad Bootstrap
$(".ver-mas").click(function() {
  const tipo = $(this).data("amenaza");
  const info = $("#info-" + tipo);

  if (info.hasClass("d-none")) {
    info.hide().removeClass("d-none").slideDown(); // Mostrar con animación
  } else {
    info.slideUp(function() {
      info.addClass("d-none"); // Ocultar con animación
    });
  }
});


  // 2. Validación de formulario (consejos.html)
  $("#form-contacto").submit(function(e) {
    e.preventDefault(); // Prevenir envío normal

    const nombre = $("#nombre").val().trim();
    const correo = $("#correo").val().trim();
    const mensaje = $("#mensaje").val().trim();
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === "" || correo === "" || mensaje === "") {
      $("#mensaje-validacion")
        .removeClass("text-success")
        .addClass("text-danger")
        .text("Por favor, completa todos los campos.");
    } else if (!correoRegex.test(correo)) {
      $("#mensaje-validacion")
        .removeClass("text-success")
        .addClass("text-danger")
        .text("El correo electrónico no tiene un formato válido.");
    } else {
      $("#mensaje-validacion")
        .removeClass("text-danger")
        .addClass("text-success")
        .text("✅ ¡Mensaje enviado correctamente!");

      // Opcional: mensaje desaparece después de unos segundos
      setTimeout(() => {
        $("#mensaje-validacion").text("");
      }, 4000);

      // Resetear el formulario
      $(this).trigger("reset");
    }
  });

  // 3. Evaluación del Test de Seguridad (modal)
  $("#btn-evaluar").click(function() {
    const respuesta1 = $("input[name='pregunta1']:checked").val();
    const respuesta2 = $("input[name='pregunta2']:checked").val();

    if (respuesta1 === "no" && respuesta2 === "ignorar") {
      $("#resultado-test")
        .removeClass("text-danger")
        .addC
    }
  });

});