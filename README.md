# Boilerplate Pessoal Vite + React + Emotion

Template de projeto inicial para aplicações React, configurado com Vite e Emotion. Otimizado para GitHub Codespaces.

## Recursos

* **Vite + React:** Setup de alta performance.
* **Emotion:** CSS-in-JS pré-instalado.
* **Padrão 1rem = 10px:** Configuração global de `font-size: 62.5%` aplicada via Emotion Global Styles.
* **Codespaces Ready:** Configuração `.devcontainer` para inicialização rápida na nuvem, instalação automática de extensões e dependências.

## Como Utilizar (Local ou Codespaces)

1.  Clone o repositório ou use-o como template.
2.  Rode `npm install` (se estiver localmente; no Codespaces é automático).
3.  Rode `npm run dev` para iniciar o servidor de desenvolvimento.

## Entendendo o Ambiente Codespaces

Ao iniciar este projeto no GitHub Codespaces, o arquivo `.devcontainer.json` automatiza:
* **Node.js LTS:** Garante o uso da versão Long Term Support do Node.js.
* **Instalação de Extensões:** Instala automaticamente ESlint, Prettier e GitLens.
* **Instalação de Dependências:** Executa `npm install` na criação do ambiente.
* **Mensagem de Boas-Vindas:** Exibe informações úteis no terminal ao iniciar.