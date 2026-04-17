# ColmeIA - Suíte de Testes E2E com Cypress

Repositório de testes automatizados criado para explorar comportamentos inconsistentes da aplicação, evidenciar bugs e manter uma base de cobertura regressiva para funcionalidades críticas.

---

## 📌 Objetivo

Esta suíte foi estruturada para:

* Identificar comportamentos inesperados na aplicação
* Registrar bugs com cenários reproduzíveis e claros
* Manter cenários de regressão para fluxos essenciais
* Facilitar a leitura técnica da entrega por recrutadores, avaliadores e times de engenharia

---

## 🧠 Estratégia de cobertura

Os cenários foram organizados com tags para separar o tipo de validação:

* `@bug`: cenários que evidenciam falhas observadas no sistema
* `@regressao`: cenários que protegem comportamentos esperados e fluxos críticos

### Áreas cobertas:

* Autenticação e validações de login
* Recuperação de senha
* Navegação pelo menu lateral
* Interação com dropdown de candidato
* Operações da tela de banco de dados

---

## 📁 Estrutura dos arquivos

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

---

## 🧪 Mapa de cenários

### 🐞 Bugs identificados

| Módulo               | Cenário                                           | Evidência esperada                                   |
| -------------------- | ------------------------------------------------- | ---------------------------------------------------- |
| Login                | Mensagem de erro com credenciais válidas          | Não deve exibir erro quando o login for válido       |
| Recuperação de senha | Link "Esqueceu sua senha" sem redirecionamento    | Deve abrir a página de recuperação                   |
| Menu lateral         | Botão não fecha o painel ao segundo clique        | Deve alternar entre abrir e fechar                   |
| Menu lateral         | Colmeia Forms abre tela vazia                     | Deve carregar conteúdo útil                          |
| Candidato            | Dropdown não executa ação após seleção            | Deve responder à opção escolhida                     |
| Banco de dados       | Busca antecipa mensagem antes da pesquisa         | Deve avaliar apenas após a ação de busca             |
| Banco de dados       | Botão de refresh limpa a base em vez de atualizar | Deve apenas atualizar os dados sem remover registros |
| Banco de dados       | Item arquivado não aparece na tela de arquivados  | Deve estar visível na área correta                   |

---

### 🔁 Cobertura de regressão

| Módulo         | Cenário                       | Objetivo                                    |
| -------------- | ----------------------------- | ------------------------------------------- |
| Login          | Validação de formato de email | Garantir feedback de entrada inválida       |
| Login          | Validação de dados inválidos  | Garantir bloqueio de autenticação incorreta |
| Menu lateral   | Abertura do menu              | Garantir acesso à navegação lateral         |
| Banco de dados | Criação de registro           | Garantir persistência e exibição            |
| Banco de dados | Exclusão de item              | Garantir remoção da listagem                |
| Banco de dados | Arquivamento de item          | Garantir saída da lista principal           |

---

## 🎯 Observações de UX

* O botão de refresh na tela de banco de dados comunica uma ação de atualização, porém o comportamento observado limpa a base.
  Isso representa um bug funcional e também um problema de UX, pois o efeito real não corresponde ao que o controle sugere.

---

## ✅ Boas práticas aplicadas

* Cenários escritos com foco em comportamento
* Separação clara entre reporte de bugs e cobertura de regressão
* Naming orientado ao negócio e leitura rápida
* Passos voltados à reprodução e validação
* Estrutura preparada para evolução com evidências e integração contínua (CI)

---

## ⚙️ Como executar

### Instalação das dependências:

```bash
npm install
```

---

### Execução do Cypress em modo interativo:

```bash
npm run cy:open
```

---

### Execução em modo headless:

```bash
npm run cy:run
```

---

### Execução por grupos de bugs:

```bash
npm run cy:bug:login
npm run cy:bug:recuperacao
npm run cy:bug:menu
npm run cy:bug:candidato
npm run cy:bug:banco
```

---

### Execução por feature específica:

```bash
npx cypress run --spec cypress/e2e/features/login.feature
npx cypress run --spec cypress/e2e/features/recuperacao_senha.feature
npx cypress run --spec cypress/e2e/features/menu.feature
npx cypress run --spec cypress/e2e/features/candidato.feature
npx cypress run --spec cypress/e2e/features/banco_dados.feature
```

---

## 🧩 Observação sobre seletores

* A suíte prioriza `data-testid` sempre que disponível
* Na ausência desse atributo, são utilizados seletores mais estáveis como:

  * `href`
  * `title`
  * `placeholder`
  * `type`
  * textos funcionais de botões

Evita-se ao máximo o uso de seletores posicionais, visando maior robustez dos testes.

---

## 📄 Padrão de reporte

Cada bug deve ser documentado com:

1. Título objetivo do problema
2. Módulo afetado
3. Passos para reprodução
4. Resultado esperado
5. Resultado obtido
6. Severidade e prioridade
7. Evidência do teste automatizado vinculado ao cenário

---

### 📌 Exemplo

> **Título:** Login exibe erro com credenciais válidas
> **Módulo:** Autenticação
> **Passos:** Acessar login, informar credenciais válidas e submeter o formulário
> **Esperado:** Autenticar sem mensagem de erro
> **Obtido:** Sistema exibe erro e ainda assim permite acesso
> **Severidade:** Alta
>
> ## 🐞 Detalhamento dos bugs

---

### 🐞 Bug: Login exibe mensagem de erro mesmo com credenciais válidas

**Módulo:** Autenticação

**Passos para reprodução:**

1. Acessar a página de login
2. Informar email válido: `qa@test.com`
3. Informar senha válida: `123456`
4. Clicar no botão de login

**Resultado esperado:**
Usuário deve ser autenticado sem exibição de mensagens de erro

**Resultado obtido:**
Sistema exibe o modal com a mensagem *"Seu login está incorreto, quer continuar?"*

**Severidade:** Alta
**Prioridade:** Alta

---

### 🐞 Bug: Sistema permite login mesmo após indicar erro de credenciais

**Módulo:** Autenticação

**Passos para reprodução:**

1. Acessar a página de login
2. Informar credenciais válidas
3. Clicar no botão de login
4. No modal exibido, clicar em "Continuar"

**Resultado esperado:**
Sistema não deveria permitir autenticação após indicar erro de login

**Resultado obtido:**
Usuário é autenticado e redirecionado para a área logada mesmo após mensagem de erro

**Severidade:** Crítica
**Prioridade:** Alta

---

### 🐞 Bug: Link "Esqueceu sua senha" não realiza redirecionamento

**Módulo:** Recuperação de senha

**Passos para reprodução:**

1. Acessar a página de login
2. Clicar na opção "Esqueceu sua senha"

**Resultado esperado:**
Usuário deve ser redirecionado para a página de recuperação de senha

**Resultado obtido:**
Nenhum redirecionamento ocorre e o usuário permanece na tela de login

**Severidade:** Média
**Prioridade:** Média

---

### 🐞 Bug: Menu lateral não fecha ao clicar novamente

**Módulo:** Navegação

**Passos para reprodução:**

1. Estar logado na aplicação
2. Clicar no botão de menu lateral
3. Clicar novamente no mesmo botão

**Resultado esperado:**
Menu lateral deve alternar entre aberto e fechado

**Resultado obtido:**
Menu permanece aberto após o segundo clique

**Severidade:** Média
**Prioridade:** Média

---

### 🐞 Bug: Colmeia Forms redireciona para tela sem conteúdo

**Módulo:** Navegação

**Passos para reprodução:**

1. Estar logado na aplicação
2. Abrir o menu lateral
3. Clicar na opção "Colmeia Forms"

**Resultado esperado:**
Tela deve carregar conteúdo funcional relacionado à funcionalidade

**Resultado obtido:**
Tela é carregada sem conteúdo visível (tela vazia)

**Severidade:** Média
**Prioridade:** Média

---

### 🐞 Bug: Dropdown de candidato não executa ação

**Módulo:** Dashboard

**Passos para reprodução:**

1. Estar logado na aplicação
2. Localizar o dropdown de candidato no dashboard
3. Clicar no dropdown
4. Selecionar uma opção

**Resultado esperado:**
Sistema deve exibir opções e executar ação correspondente à seleção

**Resultado obtido:**
Nenhuma opção é exibida ou nenhuma ação é executada após interação

**Severidade:** Média
**Prioridade:** Média

---

### 🐞 Bug: Busca antecipa mensagem antes da execução

**Módulo:** Banco de dados

**Passos para reprodução:**

1. Estar logado e acessar a tela de banco de dados
2. Digitar "teste" no campo de busca

**Resultado esperado:**
Sistema deve aguardar ação de busca para exibir resultados

**Resultado obtido:**
Mensagem *"Nenhum resultado encontrado para 'teste'"* é exibida antes da execução da busca

**Severidade:** Média
**Prioridade:** Média

---

### 🐞 Bug: Botão de refresh remove dados da tabela

**Módulo:** Banco de dados

**Passos para reprodução:**

1. Estar na tela de banco de dados
2. Garantir que existe ao menos um item na lista
3. Clicar no botão de refresh

**Resultado esperado:**
Sistema deve apenas atualizar a listagem mantendo os dados existentes

**Resultado obtido:**
Os dados são removidos da tabela após o refresh

**Severidade:** Alta
**Prioridade:** Alta

---

### 🐞 Bug: Item arquivado não aparece na tela de arquivados

**Módulo:** Banco de dados

**Passos para reprodução:**

1. Estar na tela de banco de dados
2. Criar um novo item
3. Arquivar o item criado
4. Acessar a tela de itens arquivados

**Resultado esperado:**
Item arquivado deve ser exibido na lista de arquivados

**Resultado obtido:**
Item não aparece na listagem de arquivados

**Severidade:** Alta
**Prioridade:** Alta

