const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar por um veículo existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/8/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('TIE/LN starfighter');
    expect(resposta.body.model).toBe('Twin Ion Engine/Ln Starfighter');
    expect(resposta.body.manufacturer).toBe('Sienar Fleet Systems');
    expect(resposta.body.cost_in_credits).toBe('unknown');

    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');

    expect(resposta.body.vehicle_class).toBeDefined();
    expect(resposta.body.vehicle_class).toBe('starfighter');
});

test('Deve retornar erro 404 ao buscar por um veículo inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({});
});
