# Renderização dos componentes em React  
O React permite que você crie funções e atribua elas a componentes especificos na página/aplicação, ou seja, não é necessário atualizar toda a página para que uma unica parte de um componente seja renderizado e realize determinada ação.  

## Explicação prática de como funciona a renderização  
Foi criado um componente chamado Relógio e adicionada o seguinte código a ele:  
```
export default function Relogio() {
    return (
        <div>
            <p>{"Hoje é dia: " + new Date().toLocaleDateString()}</p> //Função utilizada para indicar a data atual
            <p>{"Horário atual: " + new Date().toLocaleTimeString()}</p> //Função utilizada para indicar o horário atual
        </div>
    )
}
```  

Esse componente foi incluso no `App.js` e sua função é exibir a data e o horário atual, respectivamente.  
Feito isso, nós adicionamos uma função no arquivo `index.js` indicando um intervalo de tempo de 1000milisegundos, ou seja, 1 segundo para cada atualização:  
```
function Tick() {
  root.render(
    <React.StrictMode>
      <App /> //Vai renderizar todos os componentes e conteudo criado e incluso no App.js  
    </React.StrictMode>
  );
  setInterval(Tick, 1000) //Função que permite definir um tempo para cada atualização do uso de uma função  
}
Tick() //Chamada da função
```

O arquivo `index.js` é o arquivo principal onde o arquivo `App.js` é renderizado.  
Todas as informações que estiverem dentro do Aplicativo serão exibidas aqui.  

Dito isso, essa função criada vai permitir que apenas o componente <code>Relógio</code> seja renderizado de acordo com os parametros indicados no SetInterval (Chamar a função a cada 1000Milisegundos), e todos os componentes da página não serão atualizados, apenas o componente Relogio.  