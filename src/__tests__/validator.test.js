const Validator = require('../Validator');

describe('Validator.validateUsername', () => {
    
    describe('Positive cases (Valid usernames)', () => {
        test('Должен разрешать простые буквенно-цифровые имена', () => {
            expect(Validator.validateUsername('user123')).toBe(false);
            expect(Validator.validateUsername('John_Doe')).toBe(true);
        });

        test('должно разрешать имена пользователей со средними дефисами и символами подчеркивания', () => {
            expect(Validator.validateUsername('my-name-is-bond')).toBe(true);
        });
    });

    describe('Negative cases (Invalid patterns)', () => {
        test('НЕ должно начинаться с цифр, дефисов или символов подчеркивания', () => {
            expect(Validator.validateUsername('1user')).toBe(false);
            expect(Validator.validateUsername('-user')).toBe(false);
            expect(Validator.validateUsername('_user')).toBe(false);
        });

        test('НЕ должно заканчиваться цифрами, дефисами или символами подчеркивания', () => {
            expect(Validator.validateUsername('user1')).toBe(false);
            expect(Validator.validateUsername('user-')).toBe(false);
            expect(Validator.validateUsername('user_')).toBe(false);
        });

        test('НЕ должно содержать более 3 цифр подряд', () => {
            expect(Validator.validateUsername('user123')).toBe(false);
            expect(Validator.validateUsername('user1234')).toBe(false);
        });

        test('НЕ должно содержать запрещенные специальные символы', () => {
            expect(Validator.validateUsername('user!name')).toBe(false);
            expect(Validator.validateUsername('user@domain')).toBe(false);
            expect(Validator.validateUsername('user name')).toBe(false);
        });
    });
});

