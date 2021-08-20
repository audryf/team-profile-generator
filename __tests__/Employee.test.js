const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('Pam', 1, 'pam@email.com');

    expect(employee.name).toEqual('Pam');
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual('pam@email.com');
});

test('role of employee returns Employee', () => {
    const employee = new Employee('Pam', 1, 'pam@email.com');

    expect(employee.getRole()).toEqual('Employee');
});

test('gets name', () => {
    const employee = new Employee('Pam', 1, 'pam@email.com');

    expect(employee.getName()).toEqual('Pam');
});

test('gets id number', () => {
    const employee = new Employee('Pam', 1, 'pam@email.com');

    expect(employee.getId()).toEqual(1);
});

test('gets email', () => {
    const employee = new Employee('Pam', 1, 'pam@email.com');

    expect(employee.getEmail()).toEqual('pam@email.com');
});

