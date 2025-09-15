# Formula 1 Minimal API

Este projeto é uma API minimalista para fornecer dados relacionados à Fórmula 1. Desenvolvida com foco em simplicidade, performance e fácil integração, a API permite acessar informações essenciais sobre pilotos e equipes.

## Funcionalidades

- Listagem de pilotos
- Listagem de equipes
- Listagem de piloto por id
- Endpoints RESTful claros e bem documentados

## Tecnologias Utilizadas

- **Node.js** com **Fastify**
- **Cors** 

## Como Executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/FranciscoVitorNunes/formula-1-minimal-API.git
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Inicie o servidor:
    ```bash
    npm start:dev
    ```

## Endpoints Principais

- `GET /drivers` — Lista todos os pilotos
- `GET /teams` — Lista todas as equipes
- `GET /teams/1` — Lista o piloto com id 1

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

