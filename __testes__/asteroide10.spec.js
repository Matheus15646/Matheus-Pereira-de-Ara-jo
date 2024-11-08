const request = require('supertest');

test('Deve retornar erro 404 ao buscar por um asteroide inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/asteroide/10/');

    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({});
});
