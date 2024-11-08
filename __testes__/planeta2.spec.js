const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar por um planeta existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/2/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Alderaan');
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');

    expect(resposta.body.residents).toBeDefined();
    expect(resposta.body.residents.length).toBeGreaterThan(0);
    expect(resposta.body.residents[0]).toBe('https://swapi.dev/api/people/5/');
});

test('Deve retornar erro 404 ao buscar por um planeta inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});
