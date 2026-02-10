let items = [];
let opcionA, opcionB;

// Listas según nivel de fan
const escuderias = [
  "Ferrari", "Mercedes", "Red Bull", "McLaren",
  "Aston Martin", "Alpine", "Williams"
];

const pilotos = [
  "Hamilton", "Verstappen", "Alonso",
  "Leclerc", "Norris", "Sainz"
];

function iniciar(nivel) {
  document.getElementById("fanSelector").style.display = "none";
  document.getElementById("algoritmo").style.display = "block";

  let listaBase = [...escuderias];

  if (nivel === "medio") {
    listaBase = listaBase.concat(pilotos.slice(0, 3));
  }

  if (nivel === "alto") {
    listaBase = listaBase.concat(pilotos);
  }

  items = listaBase.map(nombre => ({
    nombre,
    score: 0
  }));

  seleccionar();
  actualizarRanking();
}

function seleccionar() {
  let indices = [...items.keys()]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  opcionA = items[indices[0]];
  opcionB = items[indices[1]];

  document.getElementById("optionA").textContent = opcionA.nombre;
  document.getElementById("optionB").textContent = opcionB.nombre;
}

function votar(ganadora, perdedora) {
  ganadora.score++;
  perdedora.score--;

  seleccionar();
  actualizarRanking();
}

function actualizarRanking() {
  let ranking = [...items].sort((a, b) => b.score - a.score);
  let ul = document.getElementById("ranking");
  ul.innerHTML = "";

  ranking.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.nombre}: ${item.score}`;
    ul.appendChild(li);
  });
}

document.getElementById("optionA").onclick = () => votar(opcionA, opcionB);
document.getElementById("optionB").onclick = () => votar(opcionB, opcionA);
