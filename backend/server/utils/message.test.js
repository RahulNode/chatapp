let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('Should generate correct message object', () => {
        let from = 'Jen';
        let room = 'Node JS';
        let text = 'Some msg';
        let message = generateMessage(from, room, text);

        expect(typeof message.createdDate).toBe('number');
        expect(message).toMatchObject({from, text});
    })
});


describe('generateLocationMessage', () => {
    it('Should generate correct location object', () => {
        let from = 'John';
        let room = 'Node JS';
        let lat = 1;
        let long = 2;
        let url = 'https://www.google.com/maps?q=1,2';
        let res = generateLocationMessage(from, room, lat, long);

        expect(typeof res.createdDate).toBe('number');
        expect(res).toMatchObject({from, url});
    })
});