/*As funções rotuladas apenas como export não estão associadas a nenhuma rota, 
mas podem ser usadas como marcas em código HTML dentro de outras funções. 
Notem que essas funções podem ter variáveis, if's, for's e fazer o processamento que quiserem, 
mas precisam retornar um código HTML. As funções exportadas como default também podem ser usadas como marcas em outas funções.*/

export function MariaPrea({ mensagem }) {
    return (
      <h2>{mensagem}</h2>
    );
  }
  