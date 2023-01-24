const path = require('path')
const Marcas = require("../controller/marcas")

module.exports = app => {
    app.get('/marcas/maisModelos/', (req, res) => {
        try {
            const marca = new Marcas()
            let mais = marca.maisModelos()
            res.status(200).json(mais)
        } catch (error) {
            res.status(500).json(error)
        }
    })

    app.get('/marcas/menosModelos/', (req, res) => {
        try {
            const marca = new Marcas()
            let menos = marca.menosModelos()
            res.status(200).json(menos)
        } catch (error) {
            res.status(500).json(error)
        }
    })

    app.get('/marcas/listaMaisModelos/', (req, res) => {
        try {
            console.log(`oi`)
            res.status(200).json({oi:"oi"})
        } catch (error) {
            res.status(500).json(error)
        }
    })

    app.get('/marcas/listaMenosModelos/', (req, res) => {
        try {
            console.log(`oi`)
            res.status(200).json({oi:"oi"})
        } catch (error) {
            res.status(500).json(error)
        }
    })

    app.get('/marcas/listaModelos/', (req, res) => {
        try {
            console.log(`oi`)
            res.status(200).json({oi:"oi"})
        } catch (error) {
            res.status(500).json(error)
        }
    })
}

