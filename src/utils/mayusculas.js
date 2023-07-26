/**
 * Esta función convierte la primera letra de cada palabra en un texto a mayúsculas.
 *
 * @param {string} texto - El texto que se desea convertir a mayúsculas.
 * @returns {string} - El texto con la primera letra de cada palabra en mayúsculas.
 */
export default function mayusculas(texto) {
  return texto.replace(/\b\w/g, (l) => l.toUpperCase());
}
