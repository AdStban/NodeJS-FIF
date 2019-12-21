const getStarships = require('../../src/getStarships');

describe('getStarships',()=>{
    const resp = {
        data: {
            results: [
                {name:"Executor", model: "Executor-class star dreadnought"},
                {name:"Sentinel-class landing craft", model: "Sentinel-class landing craft"},
                {name:"Death Star", model: "DS-1 Orbital Battle Station"}
            ]
        }
    };
    it('shoul character the array', async done =>{
        const result = await getStarships();
        expect(Array.isArray(result)).toBeTruthy();
        done();
    });
});