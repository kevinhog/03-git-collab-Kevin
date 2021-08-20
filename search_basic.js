const assert = require('assert')
describe('Mocha Works?', () => {
    it('Mocha Run test', () => {
        assert.ok(true, 'Failed test')
    });
    it('Should return -1 if value not present', ()=>{ 
        assert.strictEqual([1,2,3].indexOf(5), 'Failed to find')
    });
})