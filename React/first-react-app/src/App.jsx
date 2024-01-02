import "./App.css";
import Duck from "./Duck";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Form from "./Form";
import Counter from "./Counter";
import Toggler from "./Toggler";
import ColorBoxGrid from "./ColorBoxGrid";
const data = [
  { id: 1, item: "eggs", quantity: 12, purchased: false },
  { id: 2, item: "milk", quantity: 1, purchased: false },
  { id: 3, item: "whey protien", quantity: 2, purchased: true },
  { id: 4, item: "soya chunks", quantity: 5, purchased: true },
];
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
function App() {
  return (
    <div>
      <ColorBoxGrid
        colors={[
          "violet",
          "indigo",
          "blue",
          "green",
          "yellow",
          "orange",
          "red",
        ]}
      />
      {/* <ShoppingList items={data} /> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <Clicker msg="hi" btnText="Click Me" />
      <Clicker msg="bye" btnText="Dont Click Me" />
      <Clicker /> */}
      {/* <Counter /> */}
      {/* <Toggler /> */}
      {/* <Greeter person="Raju" me="Sumeet"/>
    <Greeter person="Shyam"/>
    <Greeter me="Sumeet"/>
    <Duck />
    <Die numSides = {20}/>
    <Die numSides = {10}/>
    <Die /> 
      <ListPicker values={[1,2,3]}/> 
      <ListPicker values={{a:"apple",b:"ball"}}/>
       <DoubleDice />
      <DoubleDice />
       <Heading />
      <Heading text="React is <3" />
      <Heading color="skyblue" text="2 plus 2 is 4" />
      <ColorList colors={["red", "magenta", "cyan", "aquamarine"]} />
      <Slots v1="hi" v2="hi" v3="hi" /> */}
    </div>
  );
}

export default App;
