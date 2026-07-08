const questions = [
  {
    q: "O que é o aquecimento global?",
    options: ["Um aumento pontual de calor em um único dia", "O aumento da temperatura média da Terra ao longo do tempo", "Um fenômeno que só acontece no verão", "A mudança de cor do céu"],
    correct: 1,
    f: "O aquecimento global é o aumento contínuo da temperatura média do planeta, medido ao longo de décadas."
  },
  {
    q: "Qual é a principal causa do aquecimento global atual?",
    options: ["Erupções vulcânicas", "O acúmulo de gases de efeito estufa na atmosfera", "A posição da Lua", "As marés"],
    correct: 1,
    f: "O acúmulo de gases como o CO2, vindos principalmente da queima de combustíveis fósseis, é a principal causa."
  },
  {
    q: "Qual dessas consequências está relacionada ao aquecimento global?",
    options: ["Derretimento de geleiras e aumento do nível do mar", "Diminuição da temperatura dos oceanos", "Redução do número de furacões", "Mais gelo nos polos"],
    correct: 0,
    f: "O aumento da temperatura derrete geleiras e calotas polares, elevando o nível do mar."
  },
  {
    q: "Como o desmatamento contribui para o aquecimento global?",
    options: ["Ele esfria o planeta", "Reduz a quantidade de árvores que absorvem CO2", "Não tem nenhuma relação", "Aumenta a chuva de forma equilibrada"],
    correct: 1,
    f: "Menos árvores significa menos absorção de CO2, o que deixa mais gás na atmosfera retendo calor."
  },
  {
    q: "Qual atitude ajuda a reduzir o aquecimento global?",
    options: ["Aumentar o uso de combustíveis fósseis", "Investir em energias renováveis, como solar e eólica", "Desmatar mais áreas verdes", "Ignorar o consumo de energia"],
    correct: 1,
    f: "Energias renováveis emitem muito menos gases de efeito estufa do que combustíveis fósseis."
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById('question').textContent = q.q;
  document.getElementById('feedback').textContent = '';
  document.getElementById('next').style.display = 'none';

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => answer(i);
    optionsDiv.appendChild(btn);
  });
}

function answer(i) {
  const q = questions[current];
  const buttons = document.querySelectorAll('#options button');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) btn.classList.add('correct');
    else if (idx === i) btn.classList.add('wrong');
  });
  if (i === q.correct) score++;
  document.getElementById('feedback').textContent = q.f;
  document.getElementById('next').style.display = 'block';
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById('question').textContent = `Você acertou ${score} de ${questions.length}.`;
    document.getElementById('options').innerHTML = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('next').style.display = 'none';
  }
}

loadQuestion();
