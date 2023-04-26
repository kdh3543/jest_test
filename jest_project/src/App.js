import './App.css'
import Hello from './component/Hello'
import Timer from './component/Timer'

const user = {
  name: 'Kevin',
  age: 31,
}

function App() {
  return (
    <div className="App">
      <Hello user={user} />
      <Timer />
    </div>
  )
}

export default App
