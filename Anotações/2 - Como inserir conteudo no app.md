# Como inserir conteudo na aplicação React

As inclusoes dentro da aplicação React devem ocorrer dentro da função utilizada no arquivo "App.js".  
React é 100% Javascript e por mais que utilizemos tags HTML, todas as funções, códigos e métodos Javascript poderão ser inclusos.

## Variáveis e Constantes

Para criar uma variável e utilizar ela dentro do react, basta definir ela fora do campo **return()** e utiliza-la normalmente na aplicação, porem, a variavel precisa estar dentro de colchetes -> {} para ser reconhecida.
```
export default function App() {
  var nome = "Rafael"
  var sobrenome = "Mileris"
  const nome_completo = nome + sobrenome
  return (
    <section>
      <p>Meu nome é: {nome}</p>
      <p>Meu sobrenome é: {sobrenome}</p>
      <p>{"Meu nome completo é: " + nome + " " + sobrenome}</p>
      <p>Meu nome completo é: {nome_completo}</p>
    </section>
  )
}
```

## Imagens  
Parar incluir imagens em uma aplicação react é necessário que essas imagens estejam armazenadas dentro do "servidor" da aplicação, ou seja, dentro da pasta **src**.  
Essas imagens serão consideradas componentes da aplicação e precisam ser especificadas dentro dos arquivos internos da aplicação. Diferente de um arquivo HTML comum, onde é possível apenas criar uma tag e incluir uma imagem.  
Para criar essa pasta de componentes, basta realizar o procedimento abaixo:  
- 1 - Crie uma nova pasta dentro do diretório **SRC** e armazene as imagens nessa nova pasta;  
- 2 - No arquivo App.js, realize a importação das imagens que serão utilizadas, indicando o caminho que a imagem está armazenada:    
```
import Var from '../src/componentes/var_const.png'
```
- 3 - Crie uma tag `img` e digite o nome atribuido ao componente em sua importação:  
```
<img src={Var} />  
```