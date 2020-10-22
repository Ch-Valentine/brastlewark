import testData from './testData.json';
import convertGnomes from "../convertGnomes";

const testedResult = convertGnomes(testData);

describe('convertGnomes util', () => {
  it('should return object that has three keys', () => {
    expect(Object.keys(testedResult)).toHaveLength(3);
  });

  it('should return object that has all needed properties', () => {
    expect(testedResult).toHaveProperty('gnomeById');
    expect(testedResult).toHaveProperty('gnomeIdByName');
    expect(testedResult).toHaveProperty('gnomeIdsByProfession');
  });

  it('gnomeById should be a correct value', () => {
    expect(testedResult.gnomeById).toEqual({
      0: {
        "id":0,
        "name":"Tobus Quickwhistle",
        "thumbnail":"http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
        "age":306,
        "weight":39.065952,
        "height":107.75835,
        "hair_color":"Pink",
        "professions":[
          "Metalworker",
          "Tailor"
        ],
        "friends": [
          "Fizkin Voidbuster"
        ],
        "gender": "male",
        "searchable": "tobus quickwhistle 306 pink male metalworker tailor"
      },
      1: {
        "id":1,
        "name":"Fizkin Voidbuster",
        "thumbnail":"http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg",
        "age":288,
        "weight":35.279167,
        "height":110.43628,
        "hair_color":"Green",
        "professions":[
          "Mason",
          "Tailor"
        ],
        "friends":[],
        "gender": "male",
        "searchable": "fizkin voidbuster 288 green male mason tailor"
      }
    });
  });

  it('gnomeIdByName should be a correct value', () => {
    expect(testedResult.gnomeIdByName).toEqual({
      "Tobus Quickwhistle": 0,
      "Fizkin Voidbuster": 1,
    });
  });

  it('gnomeIdsByProfession should be a correct value', () => {
    expect(testedResult.gnomeIdsByProfession).toEqual({
      "Metalworker": [0],
      "Tailor": [0, 1],
      "Mason": [1]
    });
  });
});
