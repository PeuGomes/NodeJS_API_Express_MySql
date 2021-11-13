const Atendimento = require('../models/atendimentos.js')

module.exports = app => {
    app.get('/Atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/Atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
        
    })

    app.post('/Atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)    
    })

    app.patch('/Atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/Atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })

}
