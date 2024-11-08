Os testes realizados utilizam o framework supertest para verificar o comportamento da API SWAPI, garantindo que os endpoints retornem as informações corretas para recursos
existentes e tratem corretamente os casos de erro para recursos inexistentes. Cada teste é dividido em dois cenários: o primeiro verifica o retorno correto de dados,como nome, 
modelo, fabricante, filmes e outras informações associadas aos recursos, enquanto o segundo verifica
o comportamento da API ao solicitar recursos que não existem, esperando uma resposta com status 404 e uma mensagem de erro apropriada.

Os testes abrangem diferentes recursos da API, como planetas, naves, veículos e espécies, utilizando endpoints como /planets/2/, /starships/9/ e /vehicles/8/. 
A estrutura dos testes é clara, com validações específicas de propriedades do corpo da resposta e verificações de status HTTP. 
Isso garante que os dados retornados estejam corretos e que os erros sejam adequadamente tratados, proporcionando uma cobertura eficiente e confiável dos endpoints da API.
