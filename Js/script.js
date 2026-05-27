// ========================= 
// script.js
// ========================= 

const boton = document.getElementById("btnMensaje");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "Conectando con apoyo institucional...";
});

function mostrarInfo(lugar) {

  const infoBox = document.getElementById("info-box");

  if (lugar === "dae") {

    infoBox.innerHTML = `
      <h3 class="text-purple">
        <i class="bi bi-people-fill"></i>
        Departamento de Asuntos Estudiantiles
      </h3>

      <p>
        Espacio de orientación y apoyo estudiantil.
      </p>

      <p>
        📍 Primer piso<br>
        🕐 08:00 a 18:00<br>
        📧 dae@inacapmail.cl
      </p>
    `;
  }

  else if (lugar === "psicologia") {

    infoBox.innerHTML = `
      <h3 class="text-primary">
        <i class="bi bi-heart-pulse-fill"></i>
        Apoyo Psicológico
      </h3>

      <p>
        Servicio de orientación emocional y contención.
      </p>

      <p>
        📍 Segundo piso<br>
        📞 +56 9 1234 5678
      </p>
    `;
  }

  else if (lugar === "emergencia") {

    infoBox.innerHTML = `
      <h3 class="text-danger">
        <i class="bi bi-exclamation-triangle-fill"></i>
        Emergencia
      </h3>

      <p>
        Contacto rápido ante situaciones críticas.
      </p>

      <p>
        📞 Anexo 101<br>
        🚨 Atención inmediata
      </p>
    `;
  }

  else if (lugar === "seguro") {

    infoBox.innerHTML = `
      <h3 class="text-success">
        <i class="bi bi-shield-fill-check"></i>
        Punto Seguro
      </h3>

      <p>
        Espacio de acompañamiento y contención temporal.
      </p>

      <p>
        📍 Zona segura estudiantil
      </p>
    `;
  }

}