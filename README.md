# Nest Simple API

Projeto de estudo em **NestJS + Prisma** para gerenciamento de produtos e controle de estoque.
Este projeto implementa endpoints para CRUD de produtos e movimentações de estoque (entradas e saídas).

---

## Tecnologias usadas
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="20"/> **Node.js**
- <img src="https://nestjs.com/img/logo-small.svg" width="20"/> **NestJS**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="20"/> **TypeScript**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="20"/> **MySQL**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="20"/> **Docker**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="20"/> **Git**

---

## Pré-requisitos

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="20"/> **Node.js** 
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="20"/> **npm**   
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="20"/> **Docker** (opcional)  
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="20"/> **Git**

---

## Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/joaopauloa3/nest-simple-api.git
cd nest-simple-api
```

### 2. Instalar dependências

```bash
pnpm install
# ou npm install
```

### 3. Subir o banco de dados MySQL via Docker

```bash
docker-compose up -d
```

- Usuário: `root`
- Senha: `root`
- Banco: `nest`
- Porta: `3306`

### 4. Configurar Prisma

```bash
npx prisma generate
npx prisma db push
```

> Isso gera o client do Prisma e cria as tabelas no banco.

### 5. Rodar a aplicação

```bash
pnpm start:dev
# ou npm run start:dev
```

A API estará disponível em: `http://localhost:3000`

---

## Endpoints principais

### Produtos (`/products`)

- `GET /products` → lista todos os produtos
- `GET /products/:id` → busca produto específico
- `POST /products` → cadastra produto
```json
{
  "name": "Arroz São João 5kg Tipo 1",
  "price": 24.45
}
```
- `PATCH /products/:id` → atualiza produto
```json
{
  "name": "Arroz",
  "price": 40
}
```
- `DELETE /products/:id` → remove produto

### Estoque

- `POST /stock-inputs` → registra entrada de estoque
```json
{
  "product_id": 7,
  "quantity": 20,
  "date": "2000-01-01"
}
```
- `POST /stock-outputs` → registra saída de estoque
```json
{
  "product_id": 7,
  "quantity": 10,
  "date": "2000-01-01"
}
```

---

## Observações

- Este projeto é voltado para aprendizado de NestJS, Prisma e arquitetura de API REST.
- Segue boas práticas: Controllers chamam Services, que usam Prisma para acessar o banco.
- Ideal para estudar integração NestJS + ORM + Docker + MySQL.

---

Feito por João Paulo A³

