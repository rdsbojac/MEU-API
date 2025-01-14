# Catálogo de Filmes - API

Este projeto é uma API RESTful para gerenciar um catálogo de filmes, desenvolvida utilizando Node.js e Express. A API permite acessar informações sobre categorias de filmes, incluindo títulos, descrições, elencos e imagens de capa.

## Estrutura do Projeto

A estrutura do JSON para o catálogo de filmes é a seguinte:

```json
{
    "categories": [
        {
            "id": 1,
            "title": "Acao",
            "movies": [
                {
                    "id": 1,
                    "title": "O Resgate",
                    "description": "Um agente secreto deve resgatar reféns em um cenário perigoso.",
                    "cover_url": "https://meu-api-catalogo.onrender.com/images/o_resgate.jpg",
                    "cast": ["Chris Hemsworth", "Randeep Hooda"]
                },
                {
                    "id": 2,
                    "title": "Missão Impossível: Fallout",
                    "description": "Ethan Hunt enfrenta desafios extremos para salvar o mundo.",
                    "cover_url": "https://meu-api-catalogo.onrender.com/images/missao_impossivel_fallout.jpg",
                    "cast": ["Tom Cruise", "Henry Cavill"]
                },
                {
                    "id": 3,
                    "title": "Vingadores: Ultimato",
                    "description": "Os heróis se unem para impedir Thanos de destruir o universo.",
                    "cover_url": "https://meu-api-catalogo.onrender.com/images/vingadores_ultimato.jpg",
                    "cast": ["Robert Downey Jr.", "Chris Hemsworth"]
                },
                {
                    "id": 4,
                    "title": "John Wick: Capítulo 3",
                    "description": "John Wick luta pela sobrevivência após ser excomungado.",
                    "cover_url": "https://meu-api-catalogo.onrender.com/images/john_wick_3.jpg",
                    "cast": ["Keanu Reeves", "Halle Berry"]
                },
                {
                    "id": 5,
                    "title": "O Exterminador do Futuro: Gênesis",
                    "description": "A batalha entre humanos e exterminadores chega a novos extremos.",
                    "cover_url": "https://meu-api-catalogo.onrender.com/images/exterminador_do_futuro_genesis.jpg",
                    "cast": ["Arnold Schwarzenegger", "Emilia Clarke"]
                }
            ]
        }
    ]
}
```
