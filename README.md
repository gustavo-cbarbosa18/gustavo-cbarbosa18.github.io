# Back to Teams - NU

Um portal de trabalho híbrido desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Começando

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Build para Produção

Para criar uma build de produção:

```bash
npm run build
```

Para visualizar a build de produção:

```bash
npm run preview
```

### Deploy para GitHub Pages

#### Opção 1: Deploy Automático (Recomendado)

O projeto está configurado com GitHub Actions para deploy automático. Quando você fizer push para a branch `main`, o site será automaticamente construído e publicado.

**Configuração necessária no GitHub:**

1. Vá até `Settings` > `Pages` no seu repositório
2. Em "Source", selecione **GitHub Actions**
3. Faça commit e push das suas alterações para a branch `main`

#### Opção 2: Deploy Manual

Se preferir fazer deploy manual:

```bash
npm run deploy
```

**Nota:** Certifique-se de que o arquivo `.nojekyll` está presente no diretório `public/` para evitar problemas com o processamento Jekyll do GitHub Pages.

## 🎨 Características

- **Design Responsivo**: Layout adaptável para desktop, tablet e mobile
- **Paleta de Cores Personalizada**: Roxo vibrante (#8a05be) como cor primária
- **Navegação Fixa**: Navbar com transição suave entre transparente e opaco ao rolar
- **Hero Section**: Seção de destaque com gradiente roxo vibrante
- **Grid de Cartões**: Quatro cartões principais com animações hover
- **Componentes Reutilizáveis**: Componentes React modulares e tipados com TypeScript

## 🛠️ Tecnologias

- React 18
- TypeScript
- Tailwind CSS
- Vite

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── NavBar.tsx       # Componente de navegação
│   └── HomePage.tsx     # Componente da página inicial
├── App.tsx              # Componente principal
├── main.tsx             # Ponto de entrada
└── index.css            # Estilos globais com Tailwind
```

## 🎯 Seções Principais

1. **About Back to Teams**: Informações sobre o modelo de trabalho híbrido
2. **TA Report**: Relatórios de presença e análises
3. **Positions Collocation**: Coordenação de presença das equipes
4. **Resources**: Documentação e suporte

## 📝 Licença

Este projeto é privado.

