const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar por uma nave existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/9/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Death Star');
    expect(resposta.body.model).toBeDefined();
    expect(resposta.body.model).toBe('DS-1 Orbital Battle Station');
    expect(resposta.body.manufacturer).toBeDefined();
    expect(resposta.body.manufacturer).toContain('Imperial Department of Military Research');
    expect(resposta.body.cost_in_credits).toBeDefined();
    expect(parseInt(resposta.body.cost_in_credits)).toBeGreaterThan(0);

    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');
});

test('Deve retornar erro 404 ao buscar por uma nave inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});
