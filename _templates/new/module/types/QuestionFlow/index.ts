import Enquirer from "enquirer"

export type QuestionFlow = Exclude<Parameters<typeof Enquirer.prompt>["0"], Function | unknown[]>[]