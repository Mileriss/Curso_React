## Enviando propriedades para os componentes utilizando o PROPS  
PROPS é uma forma de enviarmos dados, funções e tudo que for possível para os nossos componentes.  
Essa funcionalidade é muito importante e util para conseguirmos manipular as informações utilizando variaveis, funcções e etc de um outro local/componente.  

O PROPS realiza a captura de algum atributo e permite enviar qualquer dado para um componente, sem precisar necessáriamente criar algum valor dentro do componente. Por exemplo, temos um componente contendo as informações pessoais de alguem e precisamos utilizar essas informações em um outro componente.  

## Como utilizar o PROPS  
É possível utilizar o PROPS indicando ele como um parametro na função que você deseja receber as informações.  
Basta indicar o PROPS como um parametro dentro da função/componente que foi criado.  
```
import React from 'react'

export default function Dados(props){
    return(
        <section>
            <p>Nome: {}</p>
            <p>Sobrenome: {}</p>
            <p>Nome Completo: {}</p>
        </section>
    )
}
```  

Após criar o componente e indicar o parametro PROPS, basta que você vá até o arquivo principal "App.js", indique o componente e crie atributos para ele, igual dessa forma abaixo:  
```
import React from 'react'
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'
import Dados from './componentes/Dados'


export default function App() {
  return (
    <>
    <Header/>
    <Corpo/>
    <Dados nome='Rafael' sobrenome='Mileris' nome_completo='Rafael Mileris'/>
    </>
  )
}
```  

Agora retorne até o componente criado e indique os atributos dentro das tags criadas juntamente com o PROPS:  
```
export default function Dados(props){
    return(
        <section>
            <p>Nome: {props.nome}</p>
            <p>Sobrenome: {props.sobrenome}</p>
            <p>Nome Completo: {props.nome_completo}</p>
        </section>
    )
}
```

## Utilizando PROPS com Variáveis  
Para utilizar o valor de variáveis como parametro para o PROPS, basta realizar o mesmo procedimento acima, alterando apenas o valor pré-definido manualmente pelo valor das variaveis criadas:  
```
import React from 'react'
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'
import Dados from './componentes/Dados'


export default function App() {
  var nome = "Rafael"
  var sobrenome = "Mileris"
  return (
    <>
    <Header/>
    <Corpo/>
    <Dados nome={nome} sobrenome={sobrenome} nome_completo={nome + " " + sobrenome}/>
    </>
  )
}
```

