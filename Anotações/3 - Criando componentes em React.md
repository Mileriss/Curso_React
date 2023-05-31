# Como criar componentes em React  
O framework React é utilizado através da criação e uso de componentes pré-definidos e componentes criados de acordo com a necessidade.  
É possível criar um componente para cada ação que a aplicação irá realizar.  
Os componentes do React são utilizados através de sua importação na aplicação principal "App.js".  
A importação é possível através da criação de componentes dentro do diretório **src**, repsonsável por armazenar toda a estrutura funcional e visual da aplicação.  

## Criando um componente  
Caso você não tenha uma pasta "componentes" dentro do diretório **src**, crie uma nova pasta e nomeie ela de "componentes".  
Dentro dessa pasta, crie um arquivo ´.js´ com o nome que deseja utilizar no seu novo componente.  
Dentro do arquivo, crie uma estrutura padrão de react e adicione o conteudo que deseja no componente. 

### Estrutura padrão:  
```
import React from 'react'

export default function <nome-da-função>(){
    return(
    )
}
```

## Componente Header  
**Header** é o nome do componente que criamos abaixo:  

```
import React from 'react'

export default function Header(){
    return(
        <h1>Componente Header</h1>
    )
}
```

## Componente Corpo  
**Corpo** é o nome do componente que criamos abaixo:  

```
import React from 'react'

export default function Corpo(){
    return(
        <section>
            <p>Paragráfo de exemplo 1</p>
            <p>Paragráfo de exemplo 2</p>
            <p>Paragráfo de exemplo 3</p>
        </section>
    )
}
```

## APP.JS  
Após realizar a importação dos componentes no arquivo principal "App.js", para conseguir indicar o conteudo criado nos componentes é necessário criar uma `tag` com o nome atribuido ao componente na importação.  
Veja como ficou o arquivo principal com os componentes `Header` e `Corpo`  

```
import React from 'react'
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'


export default function App() {
  return (
    <>
    <Header/>
    <Corpo/>
    </>
  )
}
```