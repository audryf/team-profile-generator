const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Pam', 1, 'pam@email.com', 'pamhalpert');

    expect(engineer.name).toEqual('Pam');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual('pam@email.com');
    expect(engineer.github).toEqual('pamhalpert');
});

test('role of engineer returns Engineer', () => {
    const engineer = new Engineer('Pam', 1, 'pam@email.com', 'pamhalpert');

    expect(engineer.getRole()).toEqual('Engineer');
});

test('gets github username', () => {
    const engineer = new Engineer('Pam', 1, 'pam@email.com', 'pamhalpert');

    expect(engineer.getGithub()).toEqual('pamhalpert');
});