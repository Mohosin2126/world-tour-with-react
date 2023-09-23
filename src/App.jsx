import './App.css'
import Countries from './components/countries/Countries'
function App() {

  return (
    <>
     <div className='max-w-screen-xl mx-auto'>
     <h1 className='font-bold text-3xl text-center m-14 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '>World Tour</h1>
     
     <Countries></Countries>
     </div>
    </>
  )
}

export default App
