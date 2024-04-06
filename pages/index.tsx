import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>POKEDEX 2.0</title>
       </Head>
      <main className="main">
        <Headerbar></Headerbar>
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
        <div className="logo"><Image className="imagelogo" width={150} height={80} src='/images/pokemonlogo.png' alt="pokemon logo"/></div>
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