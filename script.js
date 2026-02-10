// Algoritmo base CourseMash adaptado a F1 (Escuderías)

let escuderias = [
  { nombre: "Ferrari", score: 0 },
  { nombre: "Mercedes", score: 0 },
  { nombre: "Red Bull", score: 0 },
  { nombre: "McLaren", score: 0 },
  { nombre: "Aston Martin", score: 0 },
  { nombre: "Alpine", score: 0 },
  { nombre: "Williams", score: 0 },
  { nombre: "Haas", score: 0 },
  { nombre: "Sauber", score: 0 },
  { nombre: "RB", score: 0 }
];

let opcionA;
let opcionB;

function seleccionarEscuderias() {
  let indices = [...escuderias.keys()]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  opcionA = escuderias[indices[0]];
  opcionB = escuderias[indices[1]];

  document.getElementById("optionA").textContent = opcionA.nombre;
  document.getElementById("optionB").textContent = opcionB.nombre;
}

function votar(ganadora, perdedora) {
  ganadora.score += 1;
  perdedora.score -= 1;

  actualizarRanking();
  seleccionarEscuderias();
}

function actualizarRanking() {
  let rankingOrdenado = [...escuderias].sort(
    (a, b) => b.score - a.score
  );

  let lista = document.getElementById("ranking");
  lista.innerHTML = "";

  rankingOrdenado.forEach(escuderia => {
    let li = document.createElement("li");
    li.textContent = `${escuderia.nombre}: ${escuderia.score}`;
    lista.appendChild(li);
  });
}

document.getElementById("optionA").addEventListener("click", () => {
  votar(opcionA, opcionB);
});

document.getElementById("optionB").addEventListener("click", () => {
  votar(opcionB, opcionA);
});

seleccionarEscuderias();
actualizarRanking();
