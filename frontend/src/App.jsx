import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <nav>Nav bar</nav>
<main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6'>

  <Outlet/>
</main>
  <footer>footer</footer>
    </>
  )
}

export default App
