# Beleza a casa do Criador
https://josegnilton.github.io/BelezaACasaDoCriador/

# Descrição
O site é de um petshop real, aproveitei a oportunidade do desafio para criar uma landing page para o empreendimento da minha família. Todos os textos e imagens tem propósitos reais, a ideia é dispor um site institucional de apresentação da loja e de produtos variados para todos os tipos de animais, desde o menor dos hamsters até cavalos!

# Features
- Navbar navegável.
- Carrossel interativo utilizando o Slick Slider como biblioteca para movimentação.
- Imagens personalizadas tendo dimensões de 1920x600 e 650x600, mudando em javascript para atender ao tamanho da tela e melhorar a responsividade.
- Form de e-mail funcional utilizando o FormSpree na sua versão gratuíta.
- Página descontraida mostrando a equipe, sendo ela formada inteiramente por bichos da família.
- Dark Mode implementado através de Javascript e CSS, usando localstorage para guardar qual a versão a pessoa utiliza.
- Localização geográfica pelo Google Maps.
- Botões de direcionamento para a Api do Whats App.
- Testes realizados no Cypress, com o foco de garantir o funcionamento do frontend.

# Ferramentas utilizadas
- HTML.
- CSS
- Formspree
- Slick Slider
- Cypress
- Javascript.
- Canva/Photoshop.

# Como usar o site
O site é uma landing page básica. No começo temos uma seção voltada para dispor o carrossel, carregando informações cruciais do momento. Depois temos uma seção voltada para conhecer a empresa e o projeto com um botão que leva para a seção de produtos. Uma seção mostrando o que é trabalhado no geral e os produtos mais vendidos na loja. Uma seção de call to action para redes sociais, uma com a localização utilizando a iframe do Google Maps. Por fim, uma parte de fale conosco com um formulário funcional, que emite um alerta ao ser realizado o envio.

# Como enviar um e-mail
O email pode ser enviado através de um formulário funciona próximo ao footer da página, basta preencher todos os campos que são requeridos e clicar em enviar.

# Cypress
- Dentro da pasta cypress basta rodar o comando ```npm i``` para instalar as dependências para rodar o cypress. 
- Após isso é possível rodar o comando ``` npx cypress open```, esse comando irá abrir o "navegador" do cypress. Basta iniciar os testes para ver a mágica acontecendo.
- Foram testes básicos para garantir a qualidade da homepage: O teste 1 tem o objetivo de aferir se o botão do ScrollTop está funcionando. O segundo se o botão do darkMode está funcionando e o terceiro aferir se o formulário de envio está enviando corretamente.