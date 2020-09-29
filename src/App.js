import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Jumbotron from './componentes/Jumbotron';
import Card from './componentes/Card';
import Footer from './componentes/Footer';

function App() {

  //Array con 4 objetos que representan las 4 cards:
  const CardInfo =
    [
      {
        img: "https://s.france24.com/media/display/8c13820c-5b0e-11e9-bf90-005056a964fe/w:980/p:16x9/gato.webp",
        title: "A little Cat",
        text: "Cats, also called domestic cats (Felis catus), are small, carnivorous (meat-eating) mammals, of the family Felidae. Domestic cats are often called 'house cats' when kept as indoor pets. Cats have been domesticated (tamed) for nearly 10,000 years. Domestic cats are found in shorthair, longhair, and hairless breed."
      },
      {
        img: "https://s.france24.com/media/display/8c13820c-5b0e-11e9-bf90-005056a964fe/w:980/p:16x9/gato.webp",
        title: "A little Cat",
        text: "Cats, also called domestic cats (Felis catus), are small, carnivorous (meat-eating) mammals, of the family Felidae. Domestic cats are often called 'house cats' when kept as indoor pets. Cats have been domesticated (tamed) for nearly 10,000 years. Domestic cats are found in shorthair, longhair, and hairless breed."
      },
      {
        img: "https://s.france24.com/media/display/8c13820c-5b0e-11e9-bf90-005056a964fe/w:980/p:16x9/gato.webp",
        title: "A little Cat",
        text: "Cats, also called domestic cats (Felis catus), are small, carnivorous (meat-eating) mammals, of the family Felidae. Domestic cats are often called 'house cats' when kept as indoor pets. Cats have been domesticated (tamed) for nearly 10,000 years. Domestic cats are found in shorthair, longhair, and hairless breed."
      },
      {
        img: "https://s.france24.com/media/display/8c13820c-5b0e-11e9-bf90-005056a964fe/w:980/p:16x9/gato.webp",
        title: "A little Cat",
        text: "Cats, also called domestic cats (Felis catus), are small, carnivorous (meat-eating) mammals, of the family Felidae. Domestic cats are often called 'house cats' when kept as indoor pets. Cats have been domesticated (tamed) for nearly 10,000 years. Domestic cats are found in shorthair, longhair, and hairless breed."
      }
    ];


  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <Jumbotron />
        </div>

        <div className="row mt-4">
          {CardInfo.map(item => {
            return <div className="col-md-3 col-sm-12"><Card img={item.img} title={item.title} text={item.text} /></div>
          })}
        </div>

      </div>

      <Footer />

    </>
  );
}

export default App;
