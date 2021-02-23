import logo from './logo.svg';
import './App.css';
import Person from "./Components/props"
import Product from "./Components/products"
import Count from "./Components/count"
import Users from './Components/users';

function App() {
  const products = [
    {name : "Photoshop",price : 120},
    {name : "Laptop" , price : 750},
    {name : "Phone" , price : 150},
    {name : "TV" , price : 222},
    {name : "PDF Reader" ,price : 6.99}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Video number 7 in using React</h1>
        <p>My first react Paragraph</p>
      </header>
      <Count></Count>
      <Users></Users>
      <Person name = "Hossen" profession ="Creator"></Person>
      <Person name ="Mosharof" profession = "Business"></Person>
      <Person name = "Musa" profession = "Founder of Space BD"></Person>
      {
        products.map(product => <Product name ={product.name} price = {product.price}></Product>)
      }
    </div>
  );
}



export default App;
