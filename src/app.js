// ⚠️ OPORTUNIDAD DE MEJORA: Nomenclatura en inglés/español mezclada
// Sugerencia: Usar todo español (sujetos, acciones) o todo inglés (subjects, actions)
const who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
const action = ['se comió', 'orinó sobre', 'aplastó', 'rompió'];
const what = ['mi tarea', 'mi teléfono', 'el carro'];
const when = ['antes de clase', 'mientras dormía', 'mientras hacía ejercicio', 'durante el almuerzo', 'mientras rezaba'];

// ✅ PATRÓN POSITIVO: Función con responsabilidad única (solo genera la excusa)
function generarExcusa() {
  // ❌ ANTI-PATRÓN: Código duplicado - Math.floor(Math.random()...) se repite 4 veces
  // Sugerencia: Crear función helper seleccionarAleatorio(array)
  const sujeto = who[Math.floor(Math.random() * who.length)];
  const verbo = action[Math.floor(Math.random() * action.length)];
  const objeto = what[Math.floor(Math.random() * what.length)];
  const momento = when[Math.floor(Math.random() * when.length)];
  return `${sujeto} ${verbo} ${objeto} ${momento}.`;
}

// ✅ PATRÓN POSITIVO: Separación de responsabilidades (mostrar vs generar)
function mostrarExcusa() {
  const excusa = generarExcusa();
  const elemento = document.getElementById("excuse");
  // ⚠️ SUGERENCIA: Usar textContent en lugar de innerText (mejor rendimiento)
  if (elemento) elemento.innerText = excusa;
}

// 🎉 EXCELENTE: Feature extra - Web Speech API (¡va más allá del ejercicio!)
function leerExcusa() {
  // ✅ PATRÓN POSITIVO: Optional chaining (?.) para seguridad
  const texto = document.getElementById("excuse")?.innerText;
  if (texto) {
    const speech = new SpeechSynthesisUtterance(texto);
    speech.lang = 'es-ES';
    window.speechSynthesis.speak(speech);
  }
}

// ✅ PATRÓN POSITIVO: DOMContentLoaded asegura que el DOM está listo
document.addEventListener("DOMContentLoaded", mostrarExcusa);
// ✅ PATRÓN POSITIVO: Optional chaining previene errores si elementos no existen
document.getElementById("btnExcusa")?.addEventListener("click", mostrarExcusa);
document.getElementById("btnLeer")?.addEventListener("click", leerExcusa);
