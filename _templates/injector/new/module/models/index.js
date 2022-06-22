const fs = require("fs")
const modelDir = `${process.cwd()}/models`
const models = fs.readdirSync(modelDir)

module.exports = {
  models
}
