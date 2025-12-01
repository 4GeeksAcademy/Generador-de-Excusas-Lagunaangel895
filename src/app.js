const who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
const action = ['se comió', 'orinó sobre', 'aplastó', 'rompió'];
const what = ['mi tarea', 'mi teléfono', 'el carro'];
const when = ['antes de clase', 'mientras dormía', 'mientras hacía ejercicio', 'durante el almuerzo', 'mientras rezaba'];

function generarExcusa() {
  const sujeto = who[Math.floor(Math.random() * who.length)];
  const verbo = action[Math.floor(Math.random() * action.length)];
  const objeto = what[Math.floor(Math.random() * what.length)];
  const momento = when[Math.floor(Math.random() * when.length)];
  return `${sujeto} ${verbo} ${objeto} ${momento}.`;
}

function mostrarExcusa() {
  const excusa = generarExcusa();
  const elemento = document.getElementById("excuse");
  if (elemento) elemento.innerText = excusa;
}

function leerExcusa() {
  const texto = document.getElementById("excuse")?.innerText;
  if (texto) {
    const speech = new SpeechSynthesisUtterance(texto);
    speech.lang = 'es-ES';
    window.speechSynthesis.speak(speech);
  }
}

document.addEventListener("DOMContentLoaded", mostrarExcusa);
document.getElementById("btnExcusa")?.addEventListener("click", mostrarExcusa);
document.getElementById("btnLeer")?.addEventListener("click", leerExcusa);