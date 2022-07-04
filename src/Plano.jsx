import "./Plano.css";

function Plano({titulo, preco, usuarios, projetos}){
    return(
        <div className = "plano-container">
            <h1 className="plano-titulo">{titulo}</h1>
            <h2 className="plano-preço">{preco}</h2>
            <p className="plano-info">{usuarios}</p>
            <p className="plano-info">{projetos}</p>
            
        </div>

    );
}


export default Plano;