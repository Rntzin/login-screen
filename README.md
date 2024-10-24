# Login Screen Application

Esta aplicação oferece uma tela de login simples e funcional, onde os usuários podem se autenticar utilizando suas credenciais. O design é responsivo e adaptável para diferentes dispositivos.

## Funcionalidades

- **Autenticação de Usuários:**
  - Login por e-mail e senha.
  - Validação de campos (e-mail válido e senha com requisitos mínimos).
  - Feedback de erro em tempo real ao usuário, em caso de falha no login.

- **Autenticação via JWT:**
  - Após o login bem-sucedido, um token JWT (JSON Web Token) é gerado e armazenado localmente.
  - O token é utilizado para autenticar o usuário em páginas protegidas da aplicação.

- **Design Responsivo:**
  - Interface adaptada para diferentes tamanhos de tela (desktop, tablet, e mobile).

- **Feedback Visual:**
  - Indicadores de carregamento durante a tentativa de login.
  - Mensagens de erro claras e objetivas para melhorar a experiência do usuário.

## Tecnologias Utilizadas

- **React** com **TypeScript** para construção da interface.
- **Chakra UI** para estilização e design responsivo.
- **React Hook Form** para gerenciamento de formulários.
- **Yup** para validação de campos do formulário.
- **JWT** (JSON Web Token) para autenticação segura.

## Instalação e Configuração

### Pré-requisitos

- Node.js instalado

### Passos para rodar a aplicação localmente

1. Clone o repositório:

   \`\`\`bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   \`\`\`

2. Navegue até o diretório do projeto:

   \`\`\`bash
   cd seu-repositorio
   \`\`\`

3. Instale as dependências:

   \`\`\`bash
   npm install
   \`\`\`

4. Inicie o servidor de desenvolvimento:

   \`\`\`bash
   npm start
   \`\`\`

5. Abra o navegador e acesse `http://localhost:3000`.
