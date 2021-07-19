const Filter = require('bad-words');
const axios = require('axios');
const express = require('express');
const router = express.Router();

const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const documents = [
  "I am a day older than I was yesterday.<|endoftext|>",
  "I build applications that use GPT-3.<|endoftext|>",
  "My preferred programming is Python.<|endoftext|>"
]

const endpoint = 'https://api.openai.com/v1/answers';

router.post('/', (req, res) => {
  if (req.rateLimit.remaining == 0) {
    res.send({ "answer": "Ask me again in a minute." });
    return;
  };

  if (req.body.question.length > 150) {
    res.send({ "answer": "Sorry. That question is too long." });
    return;
  }

  let filter = new Filter();
  if (filter.isProfane(req.body.question)) {
    res.send({ "answer": "That’s not a question we can answer." });
    return;
  }

  const data = {
    "file": process.env.ANSWERS_FILE,
    "question": req.body.question,
    "search_model": "ada",
    "model": "curie",
    "examples_context": "My favorite programming language is Python.",
    "examples": [["How old are you?", "I'm a day older than I was yesterday."], ["What languages do you know?", "I speak English and write code in Python."]],
    "max_tokens": 15,
    "temperature": 0,
    "return_prompt": false,
    "expand": ["completion"],
    "stop": ["\n", "<|endoftext|>"],
  }
  client.post(endpoint, data)
    .then(result => {
      res.send({ "answer": result.data.answers[0] })
    }).catch(result => {
      res.send({ "answer": "Sorry, I don’t have an answer." })
    });
});

module.exports = router;

