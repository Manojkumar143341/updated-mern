const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task:string
}
)

const Todomodel = mongoose.model("todos",TodoSchema)
module.exports = Todomodel