

console.log('Hi From Quiz');

const quizData = [
  {
    qtn: 'Roughly when did internet come into existence ?',
    a: '1990',
    b: '1983',
    c: '1972',
    d: '1984',
    correct: 'b'
  }, {
    qtn: 'Which is the most used programming language in 2024 ?',
    a: 'JavaScript',
    b: 'C++',
    c: 'Python',
    d: 'MATLAB',
    correct: 'c'
  }, {
    qtn: 'No. 1 super computer in 2024 ?',
    a: 'FRONTIER',
    b: 'AURORA',
    c: 'EAGLE',
    d: 'Non of the above',
    correct: 'a'
  }, {
    qtn: 'When was Javascript invented ?',
    a: '1983',
    b: '1890',
    c: '2000',
    d: '1995',
    correct: 'd'
  }, {
    qtn: ' What is HTML full form ?',
    a: 'High Markup Language',
    b: 'Hyper text Market Land',
    c: 'Hypertext Markup Language',
    d: 'Non of the above',
    correct: 'c'
  }
];

console.log(quizData);

const qtnEl = document.getElementById('qtn');

const a_text =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let curruntQtn = 0;
let score = 0;
let answer = undefined;

loadQuiz ();

function loadQuiz() {

  const curruntQuizData = quizData[curruntQtn];

  qtnEl.innerText = curruntQuizData.qtn;

  a_text.innerText = curruntQuizData.a;
  b_text.innerText = curruntQuizData.b;
  c_text.innerText = curruntQuizData.c;
  d_text.innerText = curruntQuizData.d;

  

}

submitBtn.addEventListener('click', () => {

  curruntQtn++;

  const answer = getSelected();

  if(answer){

    if(curruntQtn < quizData.length){
      loadQuiz();
    } else {
      // TODO : show result
      alert('Done!')
    } 

  }

  /*

  if(curruntQtn < quizData.length){
    loadQuiz();
  } else {
    // TODO : show result
    alert('Done!')
  } 

  */

})

function getSelected () {

  console.log('Sur');

  const answerEls = document.querySelectorAll('.answer');

  answerEls.forEach((answerEl) => {

    if(answerEl.checked) {
      return answerEl.id;
    }    
  });

  return undefined;

}