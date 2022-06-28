import * as fs from "fs"

const modelDir = `${process.cwd()}/models`

export const models = fs.readdirSync(modelDir)
