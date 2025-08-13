
import List from './List.jsx'
function App() {

  const fruits = [
    {id: 1, name: "appe", calories: 95},
    {id: 2, name: "orange", calories: 62},
    {id: 3, name: "banana", calories: 105},
    {id: 4, name: "coconut", calories: 118},
    {id: 5, name: "pineapple", calories: 82}
  ];  
  const vegetables = [
    {id: 6, name: "carrot", calories: 41},
    {id: 7, name: "broccoli", calories: 55},
    {id: 8, name: "spinach", calories: 23},
    {id: 9, name: "potato", calories: 77},
    {id: 10, name: "tomato", calories: 22}
  ];

  return (
    <>
      {fruits.length>0 && <List items={fruits} category="Fruits" />}
      {vegetables.length>0 && <List items={vegetables} category="Vegetables" /> }

    </>
  );
}

export default App
