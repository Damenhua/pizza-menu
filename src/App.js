import "./App.css";

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
    soldOut: false,
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
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian pizzas made with fresh ingredients and love. Each
            pizza is handcrafted to perfection.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} pizzaData={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

function Pizza({ pizzaData }) {
  return (
    <li className={`pizza ${pizzaData.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaData.photoName} alt={pizzaData.name} />
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        <span>{pizzaData.soldOut ? "SOLD OUT" : pizzaData.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const nowHour = new Date().getHours();
  const openHour = 11;
  const closeHour = 23;
  const isOpen = openHour <= nowHour && nowHour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} isOpen={isOpen} openHour={openHour} />
      ) : (
        <p>
          We're currently closed. Please come back between {openHour}:00pm and{" "}
          {closeHour}:00pm
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, isOpen, openHour }) {
  return (
    <div>
      <div className="order">
        <p>
          We're currently {isOpen ? "open" : "closed"} until{" "}
          {isOpen ? closeHour : openHour}:00pm
        </p>
        <button className="btn">Order Now</button>
      </div>
    </div>
  );
}

export default App;
