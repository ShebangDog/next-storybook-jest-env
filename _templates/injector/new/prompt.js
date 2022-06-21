const models = ["user", "vote"]

module.exports = [
  {
    type: "select",
    name: "modelName",
    message: "What is the model of this component?",
    choices: models,
  },
  {
    type: "input",
    name: "componentName",
    message: "What is the name of this component?"
  },
]
