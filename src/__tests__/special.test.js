const getSpecialAttacks = require('../index');

test('Должен извлекать атаки и подставлять описание по умолчанию', () => {
    const character = {
        name: 'Лучник',
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
            }
        ]
    };

    const result = getSpecialAttacks(character);

    const expected = [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
            description: 'Описание недоступно'
        }
    ];

    expect(result).toEqual(expected);
});

test('Должен возвращать пустой массив, если специальных атак нет', () => {
    const character = { special: [] };
    const result = getSpecialAttacks(character);
    expect(result).toEqual([]);
});