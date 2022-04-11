const Engineer = require('../lib/Engineer')

describe('Engineer Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', () => {
            const engineer = new Engineer(123, 'Bob')

            expect(engineer.id).toEqual(123);
            expect(engineer.name).toEqual('Bob');
        });
    });
});