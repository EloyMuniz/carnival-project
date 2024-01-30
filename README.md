# Planejador de Rotas para o Carnaval de Belo Horizonte

## Visão Geral

Este projeto é um Planejador de Rotas para o Carnaval que ajuda os usuários a encontrar a melhor rota para o bloco desejado em Belo Horizonte, Minas Gerais, Brasil. Os usuários podem inserir o bloco para o qual desejam ir e escolher o meio de transporte preferido. O sistema então calcula e fornece a rota ideal com base nas coordenadas geográficas armazenadas no banco de dados.

# Tecnologias Utilizadas

- **Express.js:**O servidor backend é construído usando o Express.js para lidar com requisições e respostas HTTP.

- **Prisma:** ORM de banco de dados usado para interação com o PostgreSQL. Fornece um construtor de consultas gerado automaticamente e seguro em relação a tipos.
- **Axios:** Um cliente HTTP baseado em promessas usado para fazer requisições a APIs externas.

- **API Geoapify:** Utilizada para geocodificação e roteamento, fornecendo informações de localização e calculando rotas.

- **PostgreSQL:** Banco de dados relacional escolhido para armazenar informações sobre os blocos.

## Estrutura do Projeto

controllers/UsersController.ts: Contém a lógica principal para lidar com solicitações de planejamento de rotas. Recupera informações do bloco do banco de dados e utiliza APIs externas para geocodificação e roteamento.

- **prisma/schema.prisma:** Define o esquema do banco de dados usando Prisma, incluindo o modelo blocks para armazenar informações sobre os blocos.
