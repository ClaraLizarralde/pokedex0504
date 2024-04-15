import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>POKEDEX 2.0</title>
        <link rel="shortcut icon" href="./images/pokeball6.png"></link>
      </Head>
      <main className="main">
        <Headerbar></Headerbar>
        <PokemonList></PokemonList>
      </main>
    </>
  );
}

export const Headerbar = () => {

  const [menuActive, setMenuActive] = React.useState(false)

  const toggleMenu = () => {
      setMenuActive(!menuActive);
    };
  const checkIfMenuIsActive = () => {
      if (menuActive == true) {
          return 'active'
      } else {
          return ''
      }
  }
  
  const options = [
      { name: 'Opcion 1', link: '/' },
      { name: 'Opcion 2', link: '/' },
      { name: 'Opcion 3', link: '/' },
      { name: 'Opcion 3', link: '/' },
      { name: 'Opcion 3', link: '/' },
      { name: 'Opcion 3', link: '/' },

  ]
    return (
  < div className="headerbar container-fluid">
    <div className="row">
      <div className="col-12 col-md-7 box">
        <div className="logo">
          <Image className="image-logo" width={150} height={80} src='/images/pokemonlogo.png' alt="pokemon logo"/></div>
        </div>
    <div className="col-6 col-md-3 box">
      <div className="buscador"><input placeholder="buscar" /></div>
      </div>
    <div className="col-6 col-md-2 box">
      <div className="opciones">
    <div className='ProfileMenu'  onClick={toggleMenu}>
        {menuActive ? 'X' : 'o'}  </div>
                <div className={"MenuOptions " + checkIfMenuIsActive()}>
                    {options.map((option,index) => {
                        return (
                            <div key={"option-key-"+index} className='option' onClick={() => setMenuActive(false)} ><p>{option.name}</p></div>
                        )
                    })}
                </div>
                </div>
            </div>
     </div>
     </div>
    )
    
 
}

export const PokemonList = () => {

  const   [pokemonData, setPokemonData] = React.useState ([])
  const   [pokemonInfo, setPokemonInfo] = React.useState (null)
 


     const grabInfo = () => {
     getPokemons().then(setPokemonData);

     }

     React.useEffect(() => {
      grabInfo();
      console.log(pokemonData);
      }, [pokemonData]);

    const grabPokemonInfo = (url) => {
      getPokemonInfo(url).then(data => {
        setPokemonInfo(data);
      });
    };
  
    React.useEffect(() => {
      if (pokemonData.length > 0) {
        grabPokemonInfo(pokemonData[0].url);
      }
    }, [pokemonData]);

  

  return (
      <>
      <div className="tarjetas-pokemon">
  <div className="tarjeta">
      <div className="id-back">#025</div> 
      <div className="pokemon-img">  
           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu"></img></div>
      <div className="pokemon-info">
            <div className="nombre-contenedor">
                <p className="pokemon-id">#025</p>
                <h2 className="pokemon-nombre">Pikachu</h2>
          </div>
       <div className="pokemon-tipos">
                <p className="electric tipo">ELECTRIC</p>
                <p className="fighting tipo">FIGHTING</p>
            </div>
       <div className="pokemon-stats">
                <p className="stat">4m</p>
                <p className="stat">60kg</p>
            </div>
      </div>
 </div>
 <div className="tarjeta">
      <div className="id-back">#025</div> 
      <div className="pokemon-img">  
           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu"></img></div>
      <div className="pokemon-info">
            <div className="nombre-contenedor">
                <p className="pokemon-id">#025</p>
                <h2 className="pokemon-nombre">Pikachu</h2>
          </div>
       <div className="pokemon-tipos">
                <p className="electric tipo">ELECTRIC</p>
                <p className="fighting tipo">FIGHTING</p>
            </div>
       <div className="pokemon-stats">
                <p className="stat">4m</p>
                <p className="stat">60kg</p>
            </div>
      </div>
 </div>
 <div className="tarjeta">
      <div className="id-back">#025</div> 
      <div className="pokemon-img">  
           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu"></img></div>
      <div className="pokemon-info">
            <div className="nombre-contenedor">
                <p className="pokemon-id">#025</p>
                <h2 className="pokemon-nombre">Pikachu</h2>
          </div>
       <div className="pokemon-tipos">
                <p className="electric tipo">ELECTRIC</p>
                <p className="fighting tipo">FIGHTING</p>
            </div>
       <div className="pokemon-stats">
                <p className="stat">4m</p>
                <p className="stat">60kg</p>
            </div>
      </div>
 </div>
 <div className="tarjeta">
      <div className="id-back">#025</div> 
      <div className="pokemon-img">  
           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu"></img></div>
      <div className="pokemon-info">
            <div className="nombre-contenedor">
                <p className="pokemon-id">#025</p>
                <h2 className="pokemon-nombre">Pikachu</h2>
          </div>
       <div className="pokemon-tipos">
                <p className="electric tipo">ELECTRIC</p>
                <p className="fighting tipo">FIGHTING</p>
            </div>
       <div className="pokemon-stats">
                <p className="stat">4m</p>
                <p className="stat">60kg</p>
            </div>
      </div>
 </div>

 <div className="tarjeta">
      <div className="id-back">#025</div> 
      <div className="pokemon-img">  
           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu"></img></div>
      <div className="pokemon-info">
            <div className="nombre-contenedor">
                <p className="pokemon-id">#025</p>
                <h2 className="pokemon-nombre">Pikachu</h2>
          </div>
       <div className="pokemon-tipos">
                <p className="electric tipo">ELECTRIC</p>
                <p className="fighting tipo">FIGHTING</p>
            </div>
       <div className="pokemon-stats">
                <p className="stat">4m</p>
                <p className="stat">60kg</p>
            </div>
      </div>
 </div>
  </div> </>
  )

}

export const getPokemons = () => {
         let limit = 10000
         let offset = 0
         let page = 1
         const str = '?limit=' + limit + '&offset=' + offset + '&page=' + page
          return new Promise ((resolve, reject) => {
          fetch ("https://pokeapi.co/api/v2/pokemon" + str).then((response) => {
          return response.json();
          } ) .then(resolve).catch(reject)
    }
  )}