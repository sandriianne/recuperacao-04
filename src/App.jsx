import "./App.css";
function App() {
    const ifood = [

        {
            img:<img src ="big-king.webp"></img>,
            title:"Combo Big King",
            descricao:"Um hamburger com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
            servico: " Serve 1 pessoa",
            preco:"R$ 41,90",
        },
        {
            img:<img src= "cheddar-duplo.webp"></img>,
            title: "Combo Cheddar Duplo",
            descricao: "Um hambúrguer com duas carnes bovinas grelhadas de 57g,pão preto com gergilim...",
            servico: " Serve 1 pessoa",
            preco:"R$ 41,90",
            
        },
        {
            img:<img src="cheeseburger-duplo.webp"></img>,
            title: "Combo Cheeseburger Duplo com Bacon",
            descricao: "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
            servico: "  Serve 1 pessoa",
            preco:" R$ 36,90",
        },
        {
            img:<img src="mega-stacker.webp"></img>,
            title: "Combo Mega Stacker 2.0",
            descricao: "Um hambúrguer com duas carnes bovinas grelhadas de 113g, pão com gergilim, queijo",
            servico: " Serve 1 pessoa",
            preco:"R$ 51,90",
        },
       
    ];


    const sanduiche = elementos.map(
      (sanduiche)=>
      { 
        return(
          <div className="item">
          <br></br>
        {sanduiche.img}
        <br></br>
          {sanduiche.title}
          <br></br>
          {sanduiche.descricao}
          <br></br>
          {sanduiche.servico}
          <br></br>
          {sanduiche.preco}
          <br></br>
          </div>
        )
      
        }
      
    );
      return(
        <div className="lanches">
          <ol className="itens">
            <img className="logo" src="logo.svg"></img>
            <button className="botao">Entregador</button>
            <button>Restaurante e Mercado</button>
            <button>Ifood Card</button>
            <button className="botao">Criar conta</button>
            <button className="botao2">Conta</button>
          </ol>

      <div>
        <h1 className="destaque">Destaques</h1>
        </div>
        <div className="componentes">
          {sanduiche}
        </div>
        </div>
      );
     
}
export default App;