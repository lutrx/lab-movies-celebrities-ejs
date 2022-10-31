//  Add your code here
const { Schema, model } = require('mongoose')

const celebritySchema = new Schema ({
    name: String,
    occupation: String,
    catchPhrase: String,
})

const Celebrity = model('Celebritie', celebritySchema);
module.exports = Celebrity;