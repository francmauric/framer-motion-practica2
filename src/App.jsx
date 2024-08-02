import DropdownMenu from "../components/DropdownMenu";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import Carousel from "../components/Carousel";
import DraggableList from "../components/DraggableList";
import CardPokemon from "../components/CardPokemon";
import Beneficios from "../components/Beneficios";
import Logo from "../components/Logo";

function App() {
  const profiles = [
    {
      name: "John Cena",
      title: "Actor",
      image: "./image/johncena.png",
      bio: "john cena es un actor y tambien luchador de la wwe",
    },
    {
      name: "Will Smith",
      title: "Actor",
      image: "./image/willsmith.jpg",
      bio: "will smith es un actor y cantante, mas conocido por interpretar al principe de rap",
    },
  ];

  return (
    <>
      <div>
        <Logo />
      </div>
      <div id="section-header" className="overflow-hidden">
        <Header></Header>
      </div>

      {/* <div id="section-dropdownMenu" className="flex items-center justify-center min-h-screen bg-gray-100">
        <DropdownMenu />
      </div>

      <div id="section-cardProfile" className="flex flex-wrap items-center justify-center min-h-screen bg-gray-100 gap-8 p-4 ">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profiles.name}
            title={profile.title}
            image={profile.image}
            bio={profile.bio}
          />
        ))}
      </div> */}
      <div
        id="section-carousel"
        className="flex bg-gray-800 items-center justify-center min-h-screen  overflow-hidden"
      >
        <Carousel />
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <DraggableList />
      </div>
      <div
        id="section-card"
        className="bg-gray-800 flex flex-wrap items-center justify-center min-h-screen bg-gray-100 "
      >
        <CardPokemon pokemon="pikachu" />
        <CardPokemon pokemon="bulbasaur" />
        <CardPokemon pokemon="charmander" />
        <CardPokemon pokemon="pikachu" />
        <CardPokemon pokemon="bulbasaur" />
        <CardPokemon pokemon="charmander" />
      </div>
      <div id="section-beneficios">
        <Beneficios />
      </div>
    </>
  );
}

export default App;
