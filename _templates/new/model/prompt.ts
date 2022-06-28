import { QuestionFlow } from "../module/types/QuestionFlow"
import { models } from "../module/models"
import { generalQuestion } from "../module/generalQuestion"
import { finallyQuestion } from "../module/finallyQuestion"

const questionFlow: QuestionFlow = [
  {
    type: "select",
    name: "modelName",
    message: "Which model does it component depend on?",
    choices: models,
  },
]

export default [generalQuestion, questionFlow, finallyQuestion].flat()