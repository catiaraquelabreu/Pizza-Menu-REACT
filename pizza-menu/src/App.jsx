// import "./App.css"



const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];



function App() {
  return (
    <div className="container">
      <Header />
      <Menu/>
      <Footer />

    </div>
  )
}

function Header () {

  const style= {}
  return <header className="header footer">
          <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
}




//MENU


function Menu (){ 
  const pizzas = pizzaData;

  return (
     <main className="menu">
  <h2>Our Menu</h2>

 

  {pizzas && ( 
    <>
    <p>Authentic Italian cuisine and creative dishes to choose from.</p>
    
    <ul className="pizzas">
      {pizzas.map(pizza => 
      <Pizza pizzaObj={pizza} key={pizza.name} />)}
  </ul>
  </>
  )}
  </main>
    )
}


      {/* <Pizza 
      name='Pizza Spinaci' 
      ingredients='Tomato, mozarella, spinach, and ricotte cheese' 
      photoName='pizzas/spinaci.jpg' 
      price={12} />

<Pizza 
      name='Pizza Funghi' 
      ingredients='Tomato, mushrooms' 
      photoName='pizzas/funghi.jpg' 
      price={15}  />
      */}
      



//FUNÇAO PIZZA

function Pizza({pizzaObj}) {
  console.log(pizzaObj)

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />

      <li>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
    </li>
    </li>
  );
}





//FOOTER

function Footer (){
  const hour = new Date().getHours()
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen)

  // if(hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert ("Sorry we're closed!")

  return <footer className="footer">
  {isOpen ? ( 
    <Order closeHour={closeHour}/> 

    ) :  (
      <p>
          We're happy to welcmoe you between {openHour}:00h and {closeHour}:00h
      </p>
    )} ;
  </footer>
}

function Order (props) {
  return  <div className="order">
  <p>We're open until {props.closeHour}:00h</p>
  <button className="btn">Order</button>
  </div> 
}





export default App
