# eSport-ai  🎮
## Descrição do Projeto
Este projeto é uma interface de assistente de meta para jogos, que utiliza a **IA do Gemini** para fornecer respostas a perguntas dos usuários. 
Ele foi projetado para ajudar jogadores com estratégias, builds e dicas para seus jogos favoritos. A interface permite que o usuário insira sua chave de API do Gemini, selecione um jogo e faça uma pergunta para receber conselhos gerados por IA.
## Funcionalidades

 - **Seleção de Jogo**: O usuário pode escolher entre uma lista de jogos, incluindo Valorant, League of Legends e Teamfight Tactics (TFT).
 -  **Consulta à IA**: Envia a pergunta do usuário, juntamente com o jogo selecionado, para a API do Gemini.
 - **Assistente Especialista**: A IA é instruída a atuar como um especialista no jogo selecionado, fornecendo respostas focadas em meta, estratégias e builds.
 - **Interface Simples**: Uma interface web limpa e direta para facilitar a interação do usuário.
    
 -  **Exibição da Resposta**: A resposta da IA é formatada de markdown para HTML e exibida diretamente na página.
## Tecnologias Utilizadas
 -   **HTML5**: Estrutura da página web.
    
 -   **CSS3**: Estilização da interface, incluindo um design responsivo e animações.
    
 -   **JavaScript**: Lógica do lado do cliente para interagir com a API do Gemini e manipular o DOM.
    
 -   **Google Gemini API**: Modelo de linguagem utilizado para gerar as respostas.
    
 -   **Showdown.js**: Biblioteca para converter a resposta em Markdown da API para HTML.
## Como Usar
 1. Clone ou baixe os arquivos do projeto **ou** acesse [diretamente no site](https://esport-ai.vercel.app/).
 2. Abra o arquivo `index.html` em seu navegador. -> ***caso tiver optado por baixar os arquivos***
 3. Insira sua chave de API do Google Gemini no campo apropriado.
 4. Selecione o jogo sobre o qual você tem uma pergunta.
 5. Digite sua pergunta no campo de texto.
 6. Clique em "Perguntar" e aguarde a resposta da IA.
 
## Como Gerar uma Chave de API do Gemini
 **Para utilizar a aplicação, você precisará de uma chave de API do Google Gemini. O processo para obtê-la é gratuito e simples.**
 1. **Acesse o Google AI Studio**: Vá para o site [aistudio.google.com](https://aistudio.google.com/app/apikey).
 2. **Faça Login**: Entre com sua conta do Google.
 3. **Crie a Chave de API**:
	 - Clique no botão "Get API key" (Obter chave de API).
	 - Clique em "Create API key" (Criar chave de API).
	 - Você pode ser solicitado a criar um novo projeto do Google Cloud se ainda não tiver um.
4. **Copie sua Chave**: Sua chave de API será gerada e exibida. Copie-a e guarde-a em um local seguro.
5. **Use na Aplicação**: Cole a chave de API que você copiou no campo "Informe a API KEY do Gemini" na página do projeto.
