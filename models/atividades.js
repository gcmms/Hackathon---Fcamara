var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Atividade = new Schema({

    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    hr_inicio:{
        type: Date
    },
    hr_fim:{
        type: Date},
    limite: {
        type: Number
    }

});
mongoose.model('atividades', Atividade);