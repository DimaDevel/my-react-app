import Button from "./Button/Button";
import Card from "./Card";
import Food from "./Food";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import Student from "./Sutedent";
import UserGreeting from "./UserGreeting";

function App() {
  const fruits = [
    { id: 0, name: "apple", calories: 95 },
    { id: 1, name: "orange", calories: 45 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "coconut", calories: 159 },
    { id: 4, name: "pineapple", calories: 37 },
  ];

  return (
    <>
      <List items={fruits} category="Fruits"></List>
    </>
  );
}

export default App;
