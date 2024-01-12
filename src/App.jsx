import Register from './Register'
import Navbar from './Navbar'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import Todo from './Todo'
import InputTodos from './InputTodos'
import { DragDropContext } from 'react-beautiful-dnd'
import { useFirebase } from './Firebase'

function App() {

  const firebase = useFirebase()

  const onDragEnd = (result) => {
    console.log(result);
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    firebase.patchTodo('todo/'+ result.draggableId, {priority: result.destination.droppableId})

  }
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/createtodo' element={<InputTodos />} />
      </Routes>
    </DragDropContext>
  )
}

export default App		
					
					
					
					
					
					
					
					
					
					
					
					

