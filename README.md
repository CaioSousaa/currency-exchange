### Currency Exchange

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTokZliYkKkA5G-4WfbuaNpKj5f9PYnTUPLA&s" width="300" alt="React logo" /></a>
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" hspace="10">
  <img alt="Npm" src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" hspace="10">
  <img alt="Tailwindcss" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" hspace="10">
  <img alt="StyleComponents" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" hspace="10">
</p>

---

### Descrição Geral

A aplicação em questão é uma plataforma web desenvolvida em React, projetada para fornecer ferramentas de conversão de moedas com base nas taxas de câmbio atualizadas em tempo real. O sistema também oferece recursos personalizados para usuários cadastrados, como configuração de perfil e um dashboard interativo que monitora a desvalorização do Real (BRL) em relação ao Dólar (USD). Além disso, para criar interfaces, animações e interações, utilizei bibliotecas modernas como Chakra UI para componentes, Tippy.js para criar tooltips e o Shadcn UI para criar o gráfico principal. Os dados vêm de APIs públicas, as quais foram acessadas utilizando o Axios.

### Tecnologias usadas

- ReactJS
- Firebase
- Typescript
- Axios
- TailwindCSS
- Tippy.js
- Shadcn UI
- Chakra UI
- Motion

<br>

### Estrutura da Aplicação

<pre style="overflow-x: auto; max-width: 1000px; white-space: pre;">
/public          # Arquivos estáticos públicos (ex.: ícones, manifest.json, etc.)
/src             # Código-fonte principal da aplicação
  /assets        # Recursos estáticos (imagens, fontes, etc.)
  /components    # Componentes reutilizáveis da aplicação
  /hooks         # Hooks personalizados do React
  /lib           # Bibliotecas ou utilitários globais
  /pages         # Páginas principais da aplicação
  /services      # Serviços (ex.: chamadas de API)
  /styles        # Estilos da aplicação (ex.: .scss)
  /utils         # Funções utilitárias e helpers
  App.tsx        # Componente principal da aplicação
  main.tsx       # Ponto de entrada da aplicação (renderiza o App.tsx)
  routes.tsx     # Definição das rotas da aplicação
  vite-env.d.ts  # Declarações de tipos do Vite
</pre>

### Como usar a aplicação?

<br>

**Pré-requisitos:**

No momento em que fiz essa aplicação, estou utilizando:

- Tailwind V4
- NodeJS - 22.13.1
- npm - 10.9.3

<br>

**Instalação:**

- Primeiramente, você deve usar o comando: `https://github.com/CaioSousaa/currency-exchange.git` para clonar o projeto na sua máquina.
- Após isso, rode o comando `npm install` para instalar as dependências e gerar a pasta node_modules

### TELAS

## Login

![Tela Inicial](./.github/login.png)

## Signup

![Tela Inicial](./.github/signup.png)

## HOME

![Tela Inicial](./.github/home.png)

## Dashboard

![Tela Inicial](./.github/dashboard.png)

## Tooltip - Dashboard

![Tela Inicial](./.github/tooltip.png)
