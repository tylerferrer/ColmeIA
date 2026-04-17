# ColmeIA - Suite de Testes E2E com Cypress

Repositorio de testes automatizados criado para explorar comportamentos inconsistentes da aplicacao, evidenciar bugs e manter uma base de cobertura regressiva para funcionalidades criticas.

## Objetivo

Esta suite foi estruturada para:

- identificar comportamentos inesperados na aplicacao
- registrar bugs com cenarios reproduziveis e claros
- manter cenarios de regressao para fluxos essenciais
- facilitar a leitura tecnica da entrega por recrutadores, avaliadores e times de engenharia

## Estrategia de cobertura

Os cenarios foram organizados com tags para separar o tipo de validacao:

- `@bug`: cenarios que evidenciam falhas observadas no sistema
- `@regressao`: cenarios que protegem comportamentos esperados e fluxos criticos

Areas cobertas:

- autenticacao e validacoes de login
- recuperacao de senha
- navegacao pelo menu lateral
- interacao com dropdown de candidato
- operacoes da tela de banco de dados

## Estrutura dos arquivos

```text
cypress/
|-- e2e/
|   |-- features/
|   |   |-- banco_dados.feature
|   |   |-- candidato.feature
|   |   |-- login.feature
|   |   |-- menu.feature
|   |   `-- recuperacao_senha.feature
|   `-- step_definitions/
|       |-- banco.steps.js
|       |-- candidato.steps.js
|       |-- login.steps.js
|       |-- menu.steps.js
|       `-- recuperacaoSenha.steps.js
|-- fixtures/
|   `-- users.json
|-- pages/
|   |-- BancoDadosPage.js
|   |-- CandidatoPage.js
|   |-- LoginPage.js
|   |-- MenuPage.js
|   `-- RecuperacaoSenhaPage.js
`-- support/
    |-- commands.js
    `-- e2e.js
```

## Mapa de cenarios

### Bugs identificados

| Modulo | Cenario | Evidencia esperada |
| --- | --- | --- |
| Login | mensagem de erro com credenciais validas | nao deve exibir erro quando o login for valido |
| Recuperacao de senha | link "Esqueceu sua senha" sem redirecionamento | deve abrir a pagina de recuperacao |
| Menu lateral | botao nao fecha o painel ao segundo clique | deve alternar entre abrir e fechar |
| Menu lateral | Colmeia Forms abre tela vazia | deve carregar conteudo util |
| Candidato | dropdown nao executa acao apos selecao | deve responder a opcao escolhida |
| Banco de dados | busca antecipa mensagem antes da pesquisa | so deve avaliar apos a acao de busca |
| Banco de dados | botao de refresh limpa a base em vez de atualizar a listagem | deve apenas atualizar os dados sem remover registros |
| Banco de dados | item arquivado nao aparece na tela de arquivados | deve estar visivel na area correta |

### Cobertura de regressao

| Modulo | Cenario | Objetivo |
| --- | --- | --- |
| Login | validacao de formato de email | garantir feedback de entrada invalida |
| Login | validacao de dados invalidos | garantir bloqueio de autenticacao incorreta |
| Menu lateral | abertura do menu | garantir acesso a navegacao lateral |
| Banco de dados | criacao de registro | garantir persistencia e exibicao |
| Banco de dados | exclusao de item | garantir remocao da listagem |
| Banco de dados | arquivamento de item | garantir saida da lista principal |

## Observacoes de UX

- o botao de refresh na tela de banco de dados comunica uma acao de atualizacao, mas o comportamento observado limpa a base. Isso representa um bug funcional e tambem um problema de UX, porque o efeito real nao corresponde ao que o controle sugere.

## Boas praticas aplicadas

- cenarios escritos com foco em comportamento
- separacao objetiva entre bug report e regressao
- naming orientado a negocio e leitura rapida
- passos voltados a reproducao e validacao
- estrutura pronta para evolucao com evidencias e pipeline CI

## Como executar

Instalacao das dependencias:

```bash
npm install
```

Execucao do Cypress em modo interativo:

```bash
npm run cy:open
```

Execucao em modo headless:

```bash
npm run cy:run
```

Execucao de cada feature principal de bug:

```bash
npm run cy:bug:login
npm run cy:bug:recuperacao
npm run cy:bug:menu
npm run cy:bug:candidato
npm run cy:bug:banco
```

Execucao direta por arquivo, quando quiser rodar uma feature especifica:

```bash
npx cypress run --spec cypress/e2e/features/login.feature
npx cypress run --spec cypress/e2e/features/recuperacao_senha.feature
npx cypress run --spec cypress/e2e/features/menu.feature
npx cypress run --spec cypress/e2e/features/candidato.feature
npx cypress run --spec cypress/e2e/features/banco_dados.feature
```

Observacao sobre seletores:

- a suite prioriza `data-testid` sempre que a aplicacao disponibiliza esse atributo
- quando `data-testid` nao existe na interface, a estrategia adotada e usar atributos mais estaveis como `href`, `title`, `placeholder`, `type` e texto funcional de botoes, evitando ao maximo seletores posicionais

## Padrao de reporte

Cada bug deve ser reportado com o seguinte formato:

1. titulo objetivo do problema
2. modulo afetado
3. passos para reproducao
4. resultado esperado
5. resultado obtido
6. severidade e prioridade
7. evidencia do teste automatizado vinculado ao cenario

Exemplo:

> Titulo: Login exibe erro com credenciais validas
>
> Modulo: Autenticacao
>
> Passos: acessar login, informar credenciais validas, submeter formulario
>
> Esperado: autenticar sem mensagem de erro
>
> Obtido: sistema exibe erro e ainda assim permite acesso
>
> Severidade: alta

## Observacoes finais

Esta documentacao foi preparada para apresentar a automacao como uma entrega de QA com foco em analise, reproducao de falhas e organizacao profissional da cobertura funcional.

Caso este projeto seja publicado no GitHub, inclua neste README o link publico do repositorio no topo da pagina para facilitar a validacao da entrega.
