const request = require('supertest');

test('Deve retornar erro 404 ao buscar por um cometa inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/cometa/11/');

    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({});
});
