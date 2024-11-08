const request = require('supertest');

test('Deve retornar erro 404 ao buscar por um heroi inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/heroes/2/');

    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({});
});
