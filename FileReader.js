const fs =require("fs")
class FileReader {
    constructor() {
        this.data= "";
    }
    getData(file) {
        
        return fs.readFileSync(file).toString();
    }
}

module.exports = FileReader;