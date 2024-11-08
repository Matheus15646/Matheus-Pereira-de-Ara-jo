const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar por um filme existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/1/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.title).toBe('A New Hope');
    expect(resposta.body.episode_id).toBe(4);
    expect(resposta.body.director).toBe('George Lucas');
    expect(resposta.body.producer).toBeDefined();
    expect(resposta.body.producer).toContain('Gary Kurtz');
    expect(resposta.body.release_date).toBe('1977-05-25');

    expect(resposta.body.characters).toBeDefined();
    expect(resposta.body.characters.length).toBeGreaterThan(0);
    expect(resposta.body.characters[0]).toBe('https://swapi.dev/api/people/1/');

    expect(resposta.body.planets).toBeDefined();
    expect(resposta.body.planets.length).toBeGreaterThan(0);
    expect(resposta.body.planets[0]).toBe('https://swapi.dev/api/planets/1/');
});

test('Deve retornar erro 404 ao buscar por um filme inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});
