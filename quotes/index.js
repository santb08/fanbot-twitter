const quotes29DeSeptiembre = require('./29-de-septiembre.json')
const quotes1200Km = require('./1200-km.json')
const quotesAccidente = require('./accidente.json')
const quotesElBaileDeElvis = require('./el-baile-de-elvis.json')
const quotesHiceTodoMal = require('./hice-todo-mal.json')
const quotesInvierno = require('./invierno.json')
const quotesNiUnaCancion = require('./ni-una-cancion.json')
const quotesRenaultFuego = require('./renault-fuego.json')

const quotes = [
    ...quotes1200Km,
    ...quotes29DeSeptiembre,
    ...quotesAccidente,
    ...quotesElBaileDeElvis,
    ...quotesHiceTodoMal,
    ...quotesInvierno,
    ...quotesNiUnaCancion,
    ...quotesRenaultFuego
]

module.exports = quotes;