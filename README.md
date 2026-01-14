# ⏳ Countdown Overlay

Um timer flutuante, minimalista e **always-on-top** (sempre no topo) para Windows.  
Desenvolvido com design "Flat Pill" (pílula), ideal para gerenciar o tempo sem perder o foco na tela principal.

## ✨ Funcionalidades

- **Sempre no Topo:** Fica sobre qualquer janela ou jogo.
- **Design Minimalista:** Estilo pílula, limpo e sem distrações.
- **Arrastar Inteligente:** Clique e segure em qualquer lugar branco para mover. Clique rápido interage.
- **Lógica de Virada de Dia:** Se você colocar para terminar às 02:00 e agora são 23:00, ele entende que é o dia seguinte.
- **Instalador Nativo:** Instalação fácil no Windows com atalho no Menu Iniciar e Desktop.

---

## 📥 Como Baixar e Instalar

Para usuários que desejam apenas utilizar o programa:

1.  Acesse a pasta de **setup** no link abaixo.
2.  Baixe o arquivo `Countdown Overlay Setup 1.0.0.exe`.
3.  Execute o arquivo e siga as instruções de instalação.

👉 **[CLIQUE AQUI PARA BAIXAR O INSTALADOR](https://github.com/elianxavier/countdown-overlay/tree/main/setup)**

---

## 💻 Rodar em Modo de Desenvolvimento

Se você é desenvolvedor e quer alterar o código ou rodar localmente:

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- [Git](https://git-scm.com/) instalado.

### Passo a Passo

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/elianxavier/countdown-overlay.git](https://github.com/elianxavier/countdown-overlay.git)
    cd countdown-overlay
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Rode o projeto:**
    ```bash
    npm start
    ```

### Gerar o Instalador (Build)

Para criar o executável (`.exe`) novamente:

```bash
npm run dist
```
