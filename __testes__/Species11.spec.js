const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar por uma espécie existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/species/11/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Neimodian');
    expect(resposta.body.classification).toBe('unknown');
    expect(resposta.body.designation).toBe('sentient');
    expect(resposta.body.language).toBe('Neimoidia');

    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/4/');

    expect(resposta.body.people).toBeDefined();
    expect(resposta.body.people.length).toBeGreaterThanOrEqual(0);
});

test('Deve retornar erro 404 ao buscar por uma espécie inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/species/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({});
});
