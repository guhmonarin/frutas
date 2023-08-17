# Website de Gerenciamento de Dados de Frutas

O Website de Gerenciamento de Dados de Frutas é um projeto que visa criar um sistema de gerenciamento de informações sobre frutas, permitindo a realização de operações CRUD (Criar, Ler, Atualizar, Deletar). O projeto utiliza as tecnologias React.js para o frontend, Node.js para o backend e GraphQL (com Apollo Server) para a API.

## Funcionalidades Principais

- Listagem de frutas com informações.
- Adição de novas frutas ao sistema.
- Atualização de informações de frutas existentes.
- Remoção de frutas do sistema.

## Tecnologias Utilizadas

- **Frontend**: O frontend do projeto é desenvolvido em React.js, uma biblioteca JavaScript para a criação de interfaces de usuário interativas. Componentes reutilizáveis e uma arquitetura de estado eficiente serão utilizados para garantir uma experiência de usuário fluida.

- **Backend**: O backend é construído em Node.js, uma plataforma de tempo de execução JavaScript que permite a construção de servidores escaláveis e eficientes. O servidor será responsável por lidar com as solicitações do frontend, processar operações CRUD e interagir com o banco de dados.

- **API GraphQL**: A API será desenvolvida utilizando GraphQL, uma linguagem de consulta flexível para suas APIs. Utilizaremos o Apollo Server para montar e gerenciar o esquema GraphQL.

## Estrutura do Projeto

O projeto é dividido em duas partes principais: o frontend e o backend.

- **Frontend**: Localizado na pasta `/frontend`, contém os componentes React que compõem a interface do usuário. Ele se comunica com o servidor backend por meio das chamadas à API GraphQL.

- **Backend**: Localizado na pasta `/backend`, é onde o servidor Node.js é configurado. Ele contém o esquema GraphQL, define as operações CRUD e se conecta ao banco de dados (ainda não implementado no exemplo).

Claro, aqui está o complemento para a seção "Estrutura Inicial" do README:

## Estrutura Inicial do Backend

Para começar o projeto, siga as seguintes etapas:

1. Crie uma pasta chamada `frutas`.

2. Dentro da pasta `frutas`, crie uma pasta chamada `backend`. Agora, a estrutura de pastas ficará assim:

   ```
   - frutas
      - backend
   ```

3. Abra um terminal de comandos e navegue até a pasta `frutas/backend`.

4. Execute os comandos a seguir para iniciar o servidor backend:

   ```
   # Iniciar um novo projeto Node.js
   npm init -y

   # Instalar as dependências necessárias
   npm i graphql apollo-server mongoose dotenv
   ```

Isso irá configurar a estrutura inicial do projeto, incluindo uma pasta `frutas` contendo a pasta `backend`, onde o servidor backend será desenvolvido. As dependências necessárias também serão instaladas para permitir a criação da API GraphQL e a interação com o banco de dados.

- graphql: Montar shemas e executar queries GraphQL
- apollo-server: Montar servidor GraphQL
- mongoose: Modelar dados do banco e conectar ao banco MongoDB
- dotenv: Configurar variáveis de ambiente para MongoDB

## Estrutura Inicial do Frontend

1. Dentro da pasta `frutas`, crie uma pasta chamada `frontend`. Agora, a estrutura de pastas ficará assim:

   ```
   - frutas
      - backend
      - frontend
   ```

2. Abra um terminal de comandos e navegue até a pasta `frutas/frontend`.

3. Execute os comandos a seguir para inicializar um novo projeto React (certifique-se de ter o Node.js instalado) :

   ```
   # Iniciar um novo projeto
   npx create-react-app .
   ```

Isso irá criar uma nova aplicação React no diretório atual (frontend) com a estrutura de pastas e arquivos necessários.