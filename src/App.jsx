import DropdownMenu from "../components/DropdownMenu"
import Header from "../components/Header"
import ProfileCard from "../components/ProfileCard"
import Carousel from "../components/Carousel"

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
     
    <div className="flex items-center justify-center min-h-screen bg-gray-100" >
      <DropdownMenu />
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Carousel />
    </div>
    </>
  )
}

export default App
