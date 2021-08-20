const Manager = require('../lib/Manager.js');

test('create a Manager object', () => {
    const manager = new Manager('Pam', 1, 'pam@email.com', 1);

    expect(manager.name).toEqual('Pam');
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual('pam@email.com');
    expect(manager.officeNumber).toEqual(1);
});

test('role of manager returns Manager', () => {
    const manager = new Manager('Pam', 1, 'pam@email.com', 1);

    expect(manager.getRole()).toEqual('Manager');
});