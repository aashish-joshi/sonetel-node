import { Sonetel } from '../index';
test('My Sonetel', () => {
    const sonetel = new Sonetel('username', 'password');
    expect(sonetel.username).toBe('username');
    expect(sonetel.password).toBe('password');
    expect(sonetel.generateToken()).toBe('Sonetel generateToken');
    expect(sonetel.generateToken(true)).toBe('Sonetel generateToken refresh');
    expect(sonetel.getAccount()).toBe('Sonetel getAccount');
    expect(sonetel.getUsers()).toBe('Sonetel getUers');
});