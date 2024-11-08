const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar por uma pessoa existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/3/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('R2-D2');
    expect(resposta.body.height).toBe('96');
    expect(resposta.body.mass).toBe('32');
    expect(resposta.body.hair_color).toBe('n/a');
    expect(resposta.body.skin_color).toBe('white, blue');
    expect(resposta.body.eye_color).toBe('red');
    expect(resposta.body.birth_year).toBe('33BBY');
    expect(resposta.body.gender).toBe('n/a');
    
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');
    
    expect(resposta.body.species).toBeDefined();
    expect(resposta.body.species.length).toBeGreaterThanOrEqual(0);
    expect(resposta.body.starships).toBeDefined();
    expect(resposta.body.starships.length).toBeGreaterThanOrEqual(0);
    expect(resposta.body.vehicles).toBeDefined();
    expect(resposta.body.vehicles.length).toBeGreaterThanOrEqual(0);
    expect(resposta.body.homeworld).toBeDefined();
    expect(resposta.body.homeworld).toBe('https://swapi.dev/api/planets/8/');
});


test('Deve retornar erro 404 ao buscar por uma pessoa inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({});
});
