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
