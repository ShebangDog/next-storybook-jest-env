import { QuestionFlow } from "../module/types/QuestionFlow"
import { generalQuestion } from "../module/generalQuestion"
import { finallyQuestion } from "../module/finallyQuestion"

const questionFlow: QuestionFlow = [

]


export default [
  generalQuestion,
  questionFlow,
  finallyQuestion,
].flat()