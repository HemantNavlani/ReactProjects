import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


function App() {
      return (
        <>
        <h1 className="text-3xl mt-20 font-bold text-center">Learn about redux toolkit</h1>
        <AddTodo />
        <Todos/>
        </>
      )
}

export default App
