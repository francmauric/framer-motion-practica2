import DropdownMenu from "../components/DropdownMenu"
import Header from "../components/Header"

function App() {
  

  return (
    <>
    <Header></Header>
     <div className="font-bold">hola </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100" >
      <DropdownMenu />
    </div>
    <div id="encavesado" className=" w-full">
      <h1 className="text-4xl font-bold text-green-700 shadow-lg border-black border-2">hola caja</h1>
    </div>
    </>
  )
}

export default App
