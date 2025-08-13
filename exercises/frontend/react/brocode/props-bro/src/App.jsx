// props = read - only properties that are shared between components.
//       A parrent component can send data to a child component.
//       < Component key=value / >

// defaultProps = default values for props in case they are not 
//              passed from the parent component.
//              name:"Guest"=
import Student from "./Student"
function App() {

  return (
    <>
      <Student name={30} age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={30} isStudent={true} />
      <Student />

    </>
  )
}

export default App
