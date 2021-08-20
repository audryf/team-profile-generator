const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Pam', 1, 'pam@email.com', 'Hogwarts');

    expect(intern.name).toEqual('Pam');
    expect(intern.id).toEqual(1);
    expect(intern.email).toEqual('pam@email.com');
    expect(intern.school).toEqual('Hogwarts');
});

test('gets value for school', () => {
    const intern = new Intern('Pam', 1, 'pam@email.com', 'Hogwarts');

    expect(intern.getSchool()).toEqual('Hogwarts');
});

test('role of intern returns Intern', () => {
    const intern = new Intern('Pam', 1, 'pam@email.com', 'Hogwarts');

    expect(intern.getRole()).toEqual('Intern');
});
