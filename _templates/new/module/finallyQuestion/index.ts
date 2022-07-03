import { QuestionFlow } from "../types/QuestionFlow"

export const finallyQuestion: QuestionFlow = [
  {
    type: "confirm",
    name: "hasStatelessComponent",
    message: "Has it Stateless Component?"
  },
  {
    type: "input",
    name: "componentName",
    message: "What is the name of it component?"
  },
]
