const FileReader = require("../FileReader");

describe('File reader', () => {
    it('should read the file', () => {
      //your test goes here
      let fileReader = new FileReader();
      let mockCSV = "data/worldCitiesPopTestCopy.csv";
      expect(fileReader.getData(mockCSV)).toBe(`Country,City,AccentCity,Region,Population,Latitude,Longitude
      ad,aixirivali,Aixirivali,06,,42.4666667,1.5`)
    })
  });