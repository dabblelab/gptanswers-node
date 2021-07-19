const form = document.querySelector('form');
const answer = document.querySelector('#answer');

const formEvent = form.addEventListener('submit', event => {
  event.preventDefault();
  const question = document.querySelector('#question');
  if (question.value) {
    askQuestion(question.value);
  } else {
    answer.innerHTML = "You need to enter a question to get an answer.";
    answer.classList.add("error");
  }
});

const appendAnswer = (result) => {
  answer.innerHTML = `<p>${result.answer}</p>`;
};

const askQuestion = (question) => {
  const params = {
    method: 'post',
    url: '/answer',
    headers: {
      'content-type': 'application/json'
    },
    data: { question }
  };
  axios(params)
    .then(response => {
      const answer = response.data;
      appendAnswer(answer);
    })
    .catch(error => console.error(error));
};
