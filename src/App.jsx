import DropdownMenu from "../components/DropdownMenu"
import Header from "../components/Header"
import ProfileCard from "../components/ProfileCard"

function App() {

  const profiles = [
    {
      name: "John Cena",
      title: "Actor",
      image: "./image/johncena.png",
      bio: "john cena es un actor y tambien luchador de la wwe"
    },
    {
      name: "Will Smith",
      title: "Actor",
      image: "./image/willsmith.jpg",
      bio: "will smith es un actor y cantante, mas conocido por interpretar al principe de rap"
    }
  ]

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
    <div className="flex flex-wrap items-center justify-center min-h-screen bg-gray-100 gap-8 p-4 ">
      {profiles.map((profile,index) => (
        <ProfileCard 
          key={index}
          name={profiles.name}
          title={profile.title}
          image={profile.image}
          bio={profile.bio}/>
      ))}
    </div>
    </>
  )
}

export default App
