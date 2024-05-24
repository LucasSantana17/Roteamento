<h1>Roteamento<h1>

<p>O roteamento é um conceito fundamental em muitos frameworks web, incluindo o Express.js para Node.js, Flask para Python, Django para Python e muitos outros. Em essência, o roteamento refere-se ao processo de direcionar solicitações HTTP para funções específicas, chamadas de manipuladores, com base no caminho da URL solicitada e no método HTTP usado.<p>

<p>No contexto do desenvolvimento web, o roteamento é a técnica que permite definir como o servidor deve responder a diferentes solicitações de URL. Quando um cliente (um navegador, por exemplo) faz uma solicitação HTTP para o servidor, ele inclui uma URL que especifica o recurso desejado. O servidor então precisa decidir o que fazer com essa solicitação.<p>

<p>O roteamento permite mapear URLs para diferentes partes do seu código, geralmente funções ou métodos conhecidos como manipuladores de rota. Essas funções são executadas quando uma solicitação corresponde à rota associada<p>

<h2>Exemplo de roteamento de pagina statica<h2>

<h2>Dependencias<h2>
<h4>cors<h4>
<h4>express<h4>

~~

<p>Observação: para que as stilizações ou que todos os arquivos staticos de um diretório sejam executados <br>
é necessario que seja feita uma configuração no express passando o diretório que contem os arquivos staticos <br>
"app.use(express.static(path.join(__dirname, 'view')));"
<p>