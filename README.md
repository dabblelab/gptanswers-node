# Building a GPT-3 Knowledge Base App (NodeJS)

[![YouTube Video](https://img.youtube.com/vi/o3IiN2eISA0/maxresdefault.jpg)](https://www.youtube.com/watch?v=o3IiN2eISA0)

This is code for building a GPT-3 powered knowledge base application using Node.JS/JavaScript. It's and example from the book [Exploring GPT-3](https://www.amazon.com/dp/1800563191). To deploy and run this code you'll need the following:

- An OpenAI API key
- An account on Replit.com (the free account will work)

## Using this code

1. Watch the [2-minute tutorial video](https://youtu.be/o3IiN2eISA0).
2. Click the 'Run on Replit.com' button below to copy this code to your Replit.com account.

    [![Run on Replit.com](https://repl.it/badge/github/dabblelab/gptanswers-node)](https://repl.it/github/dabblelab/gptanswers-node)

3. In Replit.com, add a new secret named `OPENAI_API_KEY` and make the value your OpenAI API key. 
4. Add your own content to the documents defined in the `routes/answers.json` file.
5. Run and test the app in Replit

## Using an answers file

By default the code uses a JavaScript array of documents in `routes/answers.json` for the knowledge base. Alternately, you can store documents in an answers file. There is an example answers file named `answers.jsonl` in the root, along with a file named `upload.js` that provides code you can use to upload an answers file to the OpenAI API. If you use the answers file, you'll also need to setup a secret / environment variable named `ANSWERS_FILE` with the OpenAI filename for the value.

An array of documents is used by default because because it's simpler. However, there are two primary advantages to using a documents file. First, you can include more than 200 documents. Second, the the API will throw a 404 error if there isn't a matching result. Meaning, the app could be setup to log questions that should be added to the documents - unanswered questions. This is not currently a feature but is planned for a future release.

For more details on using answer files, see the [OpenAI Documentation](https://beta.openai.com/docs/api-reference/answers).

## Question and comments

If you have questions or comments, please post them on the [OpenAI Community Topic](https://community.openai.com/t/getting-started-with-the-openai-api-and-node-js-javascript/223) for this project, or on the [GitHub Discussions](https://github.com/dabblelab/gptanswers-node/discussions) page for this code. Thanks so much!
