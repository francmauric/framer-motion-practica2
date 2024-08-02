import DropdownMenu from "../components/DropdownMenu";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import Carousel from "../components/Carousel";
import DraggableList from "../components/DraggableList";
import CardPokemon from "../components/CardPokemon";
import Beneficios from "../components/Beneficios";
import Logo from "../components/Logo";
import { useRef } from "react";

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

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  return (
    <>
      <div>
        <Logo 
            sectionRefs = {{
              section1Ref,
              section2Ref,
              section3Ref,
              section4Ref,
              section5Ref,
            }} />
      </div>
      <div ref={section1Ref} id="section-header" className="overflow-hidden">
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
        ref={section2Ref}
        id="section-carousel"
        className="flex bg-gray-800 items-center justify-center min-h-screen  overflow-hidden"
      >
        <Carousel />
      </div>
      <div ref={section3Ref} className="flex items-center justify-center min-h-screen bg-gray-100">
        <DraggableList />
      </div>
      <div
        ref={section4Ref}
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
      <div ref={section5Ref} id="section-beneficios">
        <Beneficios />
      </div>
    </>
  );
}

export default App;
