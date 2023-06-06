# Enviar funções para componentes em React  
O react permite enviar propriedades e valores aos componentes criados, assim como é possível utilizar o valor de uma váriavel ou constante, é possível utilizar os valores e atributos de uma função. Basicamente é o mesmo procedimento utilizado no envio de valores de variaveis, porem, alterando apenas a sintaxe de uma simples variavel para uma função. Além da sintaxe, é necessário enviar os parametros da função (caso haja) e utiliza-los dinamicamente no código.  

## Como enviar as funções para os componentes:  
Para enviar as funções, como dito acima, basta alterar a sintaxe e adicionar os parametros (caso haja). Veja o exemplo abaixo:  

**Variáveis**  
Essa é a forma utilizada para enviar o valor de variáveis  
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

**Funções**  
Essa é a forma utilizada para enviar o valor de funções  
```
export default function Dados(props){
    return(
        <section>
            <p>{'A soma de valores de num1 + num2 é: ' + props.somar(10,20)}</p>
        </section>
    )
}
```