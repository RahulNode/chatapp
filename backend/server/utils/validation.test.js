let {isRealString} = require('./validation');

describe('isRealString', () => {
    it('Should return true', () => {
        let string = 'Joe';
        let result = isRealString(string);
        expect(result).toBe(true);
    })
    it('Should return false', () => {
        let string = '     ';
        let result = isRealString(string);
        expect(result).toBe(false);
    })
});
