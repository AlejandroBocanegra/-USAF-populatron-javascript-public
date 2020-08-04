const fs =require("fs")
class FileReader {
    constructor() {
        this.data= "";
    }
    getData(file) {
        let data = fs.readFileSync(file);
        return data;
    }
}

module.exports = FileReader;