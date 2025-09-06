# Boilerplate Pessoal Vite + React + Emotion

Um template de projeto inicial para aplicações React, configurado com Vite para alta performance e Emotion para estilização CSS-in-JS.

O ambiente é otimizado para uma inicialização rápida com GitHub Codespaces, incluindo configurações de qualidade de vida e automações para um fluxo de desenvolvimento eficiente.

<p align="center">
  <img src="https://i.imgur.com/c9nHLMv.png" alt="Mapa Mental do projeto" width="600">
</p>

## Recursos Principais

* **Vite + React:** Setup de alta performance para um desenvolvimento ágil.
* **Emotion:** Biblioteca CSS-in-JS pré-instalada para estilização moderna e encapsulada.
* **Padrão `1rem = 10px`:** Configuração global de `font-size: 62.5%` aplicada via Emotion, facilitando o design responsivo.
* **Codespaces Ready:** Ambiente totalmente automatizado com o ficheiro `.devcontainer` para uma inicialização rápida na nuvem, incluindo:
    * Instalação da versão LTS do Node.js.
    * Instalação de extensões essenciais do VS Code.
    * Instalação automática de dependências.
    * Verificação de atualizações de pacotes na inicialização.

## Como Utilizar este Template

Siga estes passos para iniciar um novo projeto baseado neste template.

### 1. Crie o seu Novo Repositório

Clique no botão verde **"Use this template"** > **"Create a new repository"** no topo desta página do GitHub. Isto irá criar um novo repositório na sua conta com uma cópia exata deste código.

### 2. Inicie o Ambiente de Desenvolvimento

Tem duas opções para começar a codificar:

#### Opção A: GitHub Codespaces (Recomendado)

Esta é a forma mais rápida de começar, pois todo o ambiente é configurado automaticamente na nuvem.

1.  No seu novo repositório, clique no botão verde **"< > Code"**.
2.  Vá para o separador **"Codespaces"**.
3.  Clique em **"Create codespace on main"**.
4.  Aguarde enquanto o Codespaces constrói o ambiente. O processo de instalação de dependências (`npm install`) e a verificação de atualizações serão executados automaticamente.

#### Opção B: Desenvolvimento Local

1.  Clone o repositório que acabou de criar para a sua máquina local:
    ```bash
    git clone [https://github.com/SEU-UTILIZADOR/NOME-DO-SEU-NOVO-REPOSITORIO.git]
    ```
2.  Navegue até à pasta do projeto e instale as dependências:
    ```bash
    cd NOME-DO-SEU-NOVO-REPOSITORIO
    npm install
    ```

### 3. Execute a Aplicação

```bash
npm run dev
