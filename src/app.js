// Arrays de elementos para generar excusas aleatorias
const who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
const action = ['se comió', 'orinó sobre', 'aplastó', 'rompió'];
const what = ['mi tarea', 'mi teléfono', 'el carro'];
const when = ['antes de clase', 'mientras dormía', 'mientras hacía ejercicio', 'durante el almuerzo', 'mientras rezaba'];

/**
 * Genera una excusa aleatoria combinando elementos de cada array
 * @returns {string} Una excusa formada correctamente
 */
function generarExcusa() {
  const sujeto = who[Math.floor(Math.random() * who.length)];
  const verbo = action[Math.floor(Math.random() * action.length)];
  const objeto = what[Math.floor(Math.random() * what.length)];
  const momento = when[Math.floor(Math.random() * when.length)];
  return `${sujeto} ${verbo} ${objeto} ${momento}.`;
}

/**
 * Actualiza el DOM con una nueva excusa
 */
function mostrarExcusa() {
  const excusa = generarExcusa();
  const elemento = document.getElementById("excuse");
  if (elemento) elemento.innerText = excusa;
}

/**
 * Sintetiza la excusa actual usando la Web Speech API
 */
function leerExcusa() {
  const texto = document.getElementById("excuse")?.innerText;
  const button = document.getElementById("btnLeer");
  
  if (texto && button) {
    const speech = new SpeechSynthesisUtterance(texto);
    speech.lang = 'es-ES';
    
    // Deshabilitar botón mientras habla
    button.disabled = true;
    button.textContent = '🔊 Escuchando...';
    
    // Re-habilitar cuando termina
    speech.onend = () => {
      button.disabled = false;
      button.textContent = '🔊 Escuchar excusa';
    };
    
    // Manejar errores
    speech.onerror = (event) => {
      console.error('Error en síntesis:', event.error);
      button.disabled = false;
      button.textContent = '🔊 Escuchar excusa';
      alert('Error al sintetizar voz');
    };
    
    window.speechSynthesis.speak(speech);
  }
}

document.addEventListener("DOMContentLoaded", mostrarExcusa);
document.getElementById("btnExcusa")?.addEventListener("click", mostrarExcusa);
document.getElementById("btnLeer")?.addEventListener("click", leerExcusa);