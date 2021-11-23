const resta = require('../operations/resta')

decribe('Restas',()=>{
    test('4-2=2', ()=>{
        const result= resta(4,2)
        expect(result).toBe(2)
    })
    test('null-null= (null)', ()=>{
        const result= resta(null,null)
        expect(result).toBe(null)
    })
})