const request = require('supertest');

test('Deve retornar erro 404 ao buscar por um robo inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/robo/5/');

    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({});
});
