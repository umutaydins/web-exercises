// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders 
//               This Component mounts
//               The state of a value
//
// useEffect(function, [dependencies])
//
// 1.useEffect(() => {}).          // Runs after every re-render
// 2.useEffect(() => {}, [])      // Runs only on mount
// 3.useEffect(() => {}, [value]) // Runs on mount + when value changes


// USES
// #1 Event Listeners
// #2 DOM manipulations
// #3 Subscription
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts
// 
import MyComponent from './MyComponent.jsx'
import MyComponent2 from './MyComponent2.jsx'
function App() {


  return (
    <>
      {/* <MyComponent/> */}
      <MyComponent2/>
    </>
  )
}

export default App
