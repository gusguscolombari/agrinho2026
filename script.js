const perguntas = [
  { texto: "O desmatamento libera CO₂ na atmosfera.", resposta: true },
  { texto: "Florestas ajudam a absorver carbono da atmosfera.", resposta: true },
  { texto: "Desmatar não tem nenhuma relação com o efeito estufa.", resposta: false },
  { texto: "Plantar árvores ajuda a reduzir o carbono no ar.", resposta: true },
  { texto: "A Amazônia não tem importância para o clima global.", resposta: false },
  { texto: "Proteger florestas é uma forma de combater as mudanças climáticas.", resposta: true }
];
 
let atual = 0, pontos = 0;
 
function mostrar() {
  document.getElementById('contador').textContent = `Pergunta ${atual + 1} de ${perguntas.length}`;
  document.getElementById('pergunta').textContent = perguntas[atual].texto;
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('btn-prox').style.display = 'none';
  document.getElementById('btn-v').disabled = false;
  document.getElementById('btn-f').disabled = false;
}
 
function responder(escolha) {
  const certo = escolha === perguntas[atual].resposta;
  if (certo) pontos++;
 
  document.getElementById('btn-v').disabled = true;
  document.getElementById('btn-f').disabled = true;
 
  const fb = document.getElementById('feedback');
  if (certo) { fb.textContent = '✅ Correto!'; fb.className = 'feedback certo'; }
  else       { fb.textContent = '❌ Errado!';  fb.className = 'feedback errado'; }
 
  document.getElementById('btn-prox').style.display = 'inline-block';
  document.getElementById('btn-prox').textContent =
    atual < perguntas.length - 1 ? 'Próxima →' : 'Ver resultado';
}
 
function proxima() {
  atual++;
  if (atual < perguntas.length) { mostrar(); }
  else {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('placar').textContent = `Você acertou ${pontos} de ${perguntas.length}!`;
    const msgs = ['Tente novamente! ', 'Tente novamente! ', 'Continue aprendendo! ', 'Bom trabalho! ', 'Muito bem! ', 'Parabéns, perfeito! '];
    document.getElementById('msg').textContent = msgs[pontos];
  }
}
 
function reiniciar() {
  atual = 0; pontos = 0;
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  mostrar();
}
 
mostrar();