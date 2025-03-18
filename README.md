# Jogo do Amigo Secreto
Este é um projeto simples de **Amigo Secreto** desenvolvido com HTML, CSS e JavaScript. Ele permite que você adicione nomes de amigos, visualize uma lista e sorteie aleatoriamente um dos amigos para o jogo de "Amigo Secreto". O projeto foi criado para ser simples e intuitivo, ideal para praticar manipulação de DOM e eventos em JavaScript.

## Funcionalidades

- **Adicionar amigos**: Insira o nome de amigos e adicione-os à lista.
- **Exibir a lista de amigos**: Visualize todos os amigos adicionados.
- **Sortear amigo secreto**: Sorteie aleatoriamente um amigo da lista de amigos.

## Instalação

Este projeto não possui dependências externas e pode ser executado diretamente em qualquer servidor web ou em sua máquina local.

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/stephaniealves-ds/amigo-secreto.git
    ```

2. **Navegue até o diretório do projeto**:

    ```bash
    cd amigo-secreto
    ```

**Observação**:
Caso queira, também é possível acessar a aplicação por meio do GitHub Pages.
```bash
    https://stephaniealves-ds.github.io/amigo-secreto/
```

## Dependências

- **Nenhuma**: O projeto não depende de bibliotecas externas. Ele usa apenas recursos nativos do JavaScript (DOM, eventos) e HTML/CSS básicos.

## Como executar o projeto

Este projeto pode ser executado diretamente no seu navegador:

1. **Abrir o arquivo `index.html`**:  
    Basta abrir o arquivo `index.html` em qualquer navegador da sua escolha (Google Chrome, Firefox, etc.) para visualizar e interagir com o aplicativo.

    Se preferir, você pode configurar um servidor local para servir os arquivos (caso esteja utilizando algum framework ou queira testar em um servidor local).

    Exemplo com **VS Code** (usando o plugin "Live Server"):
    - Abra o projeto no **VS Code**.
    - Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

## Estrutura do Projeto

O projeto contém os seguintes arquivos:

- `index.html`: O arquivo principal com a estrutura HTML.
- `style.css`: Arquivo de estilo simples para a interface.
- `app.js`: O arquivo JavaScript com a lógica do "Amigo Secreto".

## Como usar

1. **Adicionar amigos**:
    - Insira o nome de um amigo no campo de texto e clique no botão para adicionar o nome à lista de amigos.

2. **Exibir a lista de amigos**:
    - Após adicionar amigos, a lista será automaticamente atualizada e exibida na interface.

3. **Sortear um amigo secreto**:
    - Clique no botão para **Sortear Amigo Secreto** e veja qual amigo foi selecionado aleatoriamente.

## Possíveis Problemas e Soluções

1. **O campo de nome está vazio e o amigo não é adicionado**:
    - Certifique-se de que o campo de entrada não está vazio. O sistema exibe um alerta caso o campo esteja em branco.

2. **A lista de amigos não está sendo atualizada**:
    - Verifique se o array `amigos` contém elementos. A lista será limpa e atualizada sempre que um novo amigo for adicionado.

3. **Problemas ao sortear um amigo**:
    - Se não houver amigos na lista, o sistema exibirá um alerta. Certifique-se de adicionar amigos antes de tentar realizar o sorteio.

## Contribuindo

Sinta-se à vontade para fazer contribuições neste repositório. Se você tiver sugestões de melhorias ou correções, basta abrir uma **issue** ou enviar um **pull request**.

## Licença

Este projeto é licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
