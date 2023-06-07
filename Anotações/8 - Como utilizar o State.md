# O que é State em React  
State é uma forma de alterar algo dentro de um componente de forma que a aplicação entenda que houve uma alteração e renderize os valores do componente novamente, diferente com o que acontece com as variáveis, onde o componente não identifica uma alteração e consequentemente não renderiza o componente para receber as novas informações.  

## Como importar o useState  
Para utilizar o State é necessário realizar a importação do `useState` em conjunto a importação do `React`:  

**React**  
> Import React from 'react'  

**useState**
> Import React, {useState} from 'react'  

## Sintaxe do useState  
Após realizar a importação do State para dentro da aplicação, é necessário conhecer e utilizar a sintaxe dele:  

**Sintaxe**
> const [numero, definirNumero]=useState(10)  

- `const` -> Vai indicar que será uma constante  
- `[  ]` -> Vai definir o nome e a funcionalidade do state  
- `numero` -> Indica o nome do state  
- `definirNumero` -> Indica a descrição da funcionalidade do state  
- `useState(< valor >)` -> Indica que todos os atributos anteriores serão atribuidos a um useState, e o valor que esse useState vai receber  

## Resumindo  
O state deve ser utilizado para atualizar algum valor, atributo ou qualquer informação que seja em um componente, quando acontecer uma atualização o componente vai identificar que houve alteração e realizará uma renderização. Esse procedimento não ocorrerá a partir de variáveis comuns.  