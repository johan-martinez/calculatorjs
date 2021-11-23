const sum = require('../operations/sum')

describe('sum',()=>{
    test('1+1=2', ()=>{
        const result=sum(1,1)
        expect(result).toBe(2)
    })
    test('null + null',()=>{
        const result=sum(null,null)
        expect(result).toBe(null)
    })
})
