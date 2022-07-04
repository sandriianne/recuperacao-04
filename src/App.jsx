import Plano from "./Plano";
import"./App.css";

function App() {
    const planos = [
      {
        title: "Start",
        price: "Free",
        qnt_users: "1 user",
        qnt_projects: "1 project",
      },
      {
        title: "Basic",
        price: "$19.99",
        qnt_users: "5 user",
        qnt_projects: "20 project",
      },
      {
        title: "Expert",
        price: "$129.99",
        qnt_users: "Unlimited users",
        qnt_projects: "Unlimited projets",
      }
    ];

    return(
      <div>  
        {planos.map( (plano) =>{
          return <Plano 
          titulo={plano.title}
          preco={plano.price}
          usuarios={plano.qtd_users}
          projetos={plano.qtd_projects}
           />
        }) }      
  
  
      </div>
    );
  
}


export default App
