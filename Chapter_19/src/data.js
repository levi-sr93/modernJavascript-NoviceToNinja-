const users = [
    {name: 'Mario', premium: true},
    {name: 'Luigi', premium: false},
    {name: 'Yoshi', premium: true},
    {name: 'Toad', premium: true},
    {name: 'Peach', premium: false}
];

 const getPremiumUsers = users => {
    return users.filter(user => user.premium)
}

export { getPremiumUsers, users as default }