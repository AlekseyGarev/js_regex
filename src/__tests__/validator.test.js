const Validator = require('../Validator');

describe('Validator.validateUsername', () => {
    
    describe('Positive cases (Valid usernames)', () => {
        test.each([
            ['John_Doe', 'обычные буквы и подчеркивание'],
            ['my-name-is-bond', 'дефисы внутри имени'],
            ['u123r', 'цифры (не более 3 подряд) внутри'],
        ])('Должен разрешать: %s (%s)', (username) => {
            expect(Validator.validateUsername(username)).toBe(true);
        });
    });

    describe('Negative cases (Invalid patterns)', () => {
        
        test.each([
            ['1user', 'начинается с цифры'],
            ['-user', 'начинается с дефиса'],
            ['_user', 'начинается с подчеркивания'],
            ['user1', 'заканчивается цифрой'],
            ['user-', 'заканчивается дефисом'],
            ['user_', 'заканчивается подчеркиванием'],
        ])('НЕ должен разрешать недопустимые края: %s (%s)', (username) => {
            expect(Validator.validateUsername(username)).toBe(false);
        });

        test.each([
            ['user123', 'ровно 3 цифры'],
            ['user1234', 'более 3 цифр'],
            ['123456', 'только цифры'],
        ])('НЕ должен разрешать длинные последовательности цифр: %s (%s)', (username) => {
            expect(Validator.validateUsername(username)).toBe(false);
        });

        test.each([
            ['user!name'],
            ['user@domain'],
            ['user name'],
            ['юзер'],
        ])('НЕ должен разрешать спецсимволы или пробелы: %s', (username) => {
            expect(Validator.validateUsername(username)).toBe(false);
        });
    });
});