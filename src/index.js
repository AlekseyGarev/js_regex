function getSpecialAttacks({ special }) {
    return special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
        id,
        name,
        icon,
        description
    }));
}

module.exports = getSpecialAttacks;