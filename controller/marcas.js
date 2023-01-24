const path = require("path")
const jsonfile = require("jsonfile")

class Marcas {
    constructor(){
        this.carList = jsonfile.readFileSync(path.join(__dirname, "../car-list.json"));
        this.carList.sort((a, b) => {
            if (a.models.length < b.models.length) return -1;
            if (a.models.length > b.models.length) return 1;
            return 0;
        });
    }

    maisModelos(){
        let maisModelo = {
            brand: null,
            models: null,
            total: 0
        }

        this.carList.forEach(element => {
            if(element.models.length > maisModelo.total) {
                maisModelo = element
                maisModelo.total = element.models.length
            }
        });
        return maisModelo
    }
    
    menosModelos(){
        let menosModelo = {
            brand: null,
            models: null,
            total: Infinity
        }
        this.carList.forEach(element => {
            if(element.models.length < menosModelo.total) {
                menosModelo = element
                menosModelo.total = element.models.length
            }
        });
        return menosModelo
    }
}

module.exports = Marcas