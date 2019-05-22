var findMissing = require('./findMissing');

describe('Find Missing Letter',()=>{
    it("finds a missing letter and return undefined if theres no letter missig",()=>{
        expect(findMissing('abce')).toEqual('d');
    });

    it("finds a missing letter",()=>{
        expect(findMissing('mnopqrtuvwx')).toEqual('s');
    })
    it("return undefined if nothing is missing",()=>{
        expect(findMissing('abcdef')).toEqual(undefined);
    })
})
