const p = document.querySelector("p");
const dniText = document.getElementById("dni");
const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

dniText.addEventListener("input", () => {
  let dni = dniText.value;
  comprobarDni(dni);
});

function comprobarDni(str) {
  let dni = str.split("");
  let numeros = parseInt(str);
  let pilaNumeros = numeros.toString().split("");

  try {
    if (dni.length != 10) throw new Error("La longitud no es correcta");
    if (dni[8] != "-") throw new Error("Formato incorrecto");
    if (!isNaN(dni[9]))
      throw new Error("No hay una letra en el lugar correspodiente");
    if (pilaNumeros.length != 8)
      throw new Error("El bloque de numeros no tiene 8 numeros");
    if (!comprobarLetra(str)) throw new Error("La letra no es correcta");
    p.textContent = "La letra coincide";
    p.style.color = "white";
    p.style.backgroundColor = "green";
  } catch (error) {
    p.textContent = `${error.message}`;
    p.style.color = "red";
    p.style.background = "none";
  }
}

function comprobarLetra(arr) {
  let dn = arr.split("");
  let ar1 = parseInt(arr);
  let posLetra = ar1 % 23;
  if (letras[posLetra] == dn[dn.length - 1].toUpperCase()) return true;
}
