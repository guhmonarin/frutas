# Website de Gerenciamento de Dados de Frutas

O Website de Gerenciamento de Dados de Frutas é um projeto que visa criar um sistema de gerenciamento de informações sobre frutas, permitindo a realização de operações CRUD (Criar, Ler, Atualizar, Deletar). O projeto utiliza as tecnologias React.js para o frontend, Node.js para o backend e GraphQL (com Apollo Server) para a API.

## Funcionalidades Principais

- Listagem de frutas com informações como nome e cor.
- Adição de novas frutas ao sistema.
- Atualização de informações de frutas existentes.
- Remoção de frutas do sistema.

## Tecnologias Utilizadas

- **Frontend**: O frontend do projeto é desenvolvido em React.js, uma biblioteca JavaScript para a criação de interfaces de usuário interativas. Componentes reutilizáveis e uma arquitetura de estado eficiente serão utilizados para garantir uma experiência de usuário fluida.

- **Backend**: O backend é construído em Node.js, uma plataforma de tempo de execução JavaScript que permite a construção de servidores escaláveis e eficientes. O servidor será responsável por lidar com as solicitações do frontend, processar operações CRUD e interagir com o banco de dados.

- **API GraphQL**: A API será desenvolvida utilizando GraphQL, uma linguagem de consulta flexível para suas APIs. Utilizaremos o Apollo Server para montar e gerenciar o esquema GraphQL.

## Estrutura do Projeto

O projeto é dividido em duas partes principais: o frontend e o backend.

- **Frontend**: Localizado na pasta `/client`, contém os componentes React que compõem a interface do usuário. Ele se comunica com o servidor backend por meio das chamadas à API GraphQL.

- **Backend**: Localizado na pasta raiz do projeto, é onde o servidor Node.js é configurado. Ele contém o esquema GraphQL, define as operações CRUD e se conecta ao banco de dados (ainda não implementado no exemplo).

## Configuração e Execução

