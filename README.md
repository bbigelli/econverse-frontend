# 🛍️ Econverse - E-commerce Platform

![Status](https://img.shields.io/badge/status-concluído-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.0-purple)
![Sass](https://img.shields.io/badge/Sass-1.63.6-pink)

## 📋 Sobre o Projeto

Este é meu teste técnico para a vaga de **Desenvolvedor Front-End na Econverse**. Desenvolvi uma plataforma de e-commerce completa com vitrine de produtos, carrinho de compras com Context API, modal de detalhes, consumo de API real, vitrine de produtos, categorias, banner promocional, newsletter e um design totalmente responsivo.

🔗 **Deploy:** [https://econverse-frontend-opal.vercel.app/]

### ✨ Funcionalidades Implementadas

- 🏠 **Homepage completa** com vitrine de produtos
- 🛒 **Carrinho de compras** com Context API (totalmente funcional)
- 🎨 **Modal de produto** com detalhes e seleção de quantidade
- 📦 **Consumo de API real** (JSON da Econverse)
- 📱 **Design responsivo** para todos os dispositivos (mobile, tablet, desktop)
- 🏷️ **Categorias de produtos** interativas
- 🔍 **Busca de produtos** funcional
- 📧 **Newsletter** com validação de termos e condições
- 🎯 **Badge do carrinho** com contador em tempo real
- 💾 **Persistência no localStorage** (carrinho salvo)
- ♿ **Acessibilidade** com ARIA labels
- ⚡ **Loading states** para melhor UX

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite 5** - Build tool e desenvolvimento
- **Sass** - Pré-processador CSS
- **Context API** - Gerenciamento de estado do carrinho

### Por que escolhi essas tecnologias?

**Vite**: Optei pelo Vite em vez do CRA porque é significativamente mais rápido em desenvolvimento e build, além de ter melhor suporte para TypeScript.

**Sass**: Utilizei Sass para poder usar variáveis, nesting e mixins, mantendo o CSS mais organizado e reutilizável.

**Context API para o carrinho**: Decidi usar Context API em vez de Redux porque o estado é simples e global, sem necessidade de boilerplate excessivo. 

**Sem bibliotecas UI**: Todo o CSS é 100% customizado para seguir exatamente o layout do Figma.

## 📦 Como executar o projeto

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Git**

### Passo a passo

# 1. Clone o repositório
git clone https://github.com/bbigelli/econverse-frontend.git

# 2. Entre na pasta do projeto
cd econverse-frontend

# 3. Instale as dependências
npm install

# 4. Execute o projeto em modo desenvolvimento
npm run dev

# 5. Acesse no navegador
# http://localhost:5173

### Scripts disponíveis
Comando	Descrição
npm run dev	    Inicia o servidor de desenvolvimento
npm run build	Gera a build de produção
npm run preview	Visualiza a build localmente
npm run lint	Executa o ESLint para verificar o código
npm run format	Formata o código com Prettier

### 🎯 Funcionalidades em detalhes
### Carrinho de Compras
✅ Adicionar/remover produtos

✅ Aumentar/diminuir quantidade

✅ Cálculo automático do total

✅ Persistência no localStorage

✅ Badge com contador no header

### Consumo de API
✅ Requisição para o JSON oficial da Econverse

✅ Tratamento de loading e erro

✅ Adaptação dos campos (productName, photo, price)

### 📄 Licença
Este projeto foi desenvolvido como teste técnico para a Econverse.

###👨‍💻 Desenvolvedor
Bruno Bigelli

GitHub: @bbigelli

LinkedIn: Bruno Bigelli