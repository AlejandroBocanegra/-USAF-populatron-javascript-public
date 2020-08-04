const FileReader = require("../FileReader");

describe('File reader', () => {
    it('should read the file', () => {
      //your test goes here
      let fileReader = new FileReader();
      let mockCSV = "data/worldCitiesPopTestCopy.csv";
      let data = `Country,City,AccentCity,Region,Population,Latitude,Longitude
      ad,aixas,Aix�s,06,,42.4833333,1.4666667
      ad,aixirivali,Aixirivali,06,,42.4666667,1.5
      ad,aixirivall,Aixirivall,06,,42.4666667,1.5
      ad,aixirvall,Aixirvall,06,,42.4666667,1.5
      ad,aixovall,Aixovall,06,,42.4666667,1.4833333
      ad,andorra,Andorra,07,,42.5,1.5166667
      ad,andorra la vella,Andorra la Vella,07,20430,42.5,1.5166667
      ad,andorra-vieille,Andorra-Vieille,07,,42.5,1.5166667
      ad,andorre,Andorre,07,,42.5,1.5166667`
      expect(fileReader.getData(mockCSV)).toBe(data)
    })
  });