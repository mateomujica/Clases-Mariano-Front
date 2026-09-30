
/* function Saludo () {
  const curso:string = "Programacion"

  return (
    <div>
      <h2> Hola, clase!
        <p>Hoy arrancamos con {curso}</p>
        <p> 2 + 3 = {2+3}</p>
      </h2>
    </div>
  )
  
}

export default function App()
{
  return (
    <main>
      <Saludo/>
    </main>
  )
} */

function Tarjeta ({nombre, rol, emoji}) {
  return (
    <div className = "card">
      <span style={{fontSize:32}}>{emoji}</span>
      <h3>{nombre}</h3>
      <p className="muted">{rol}</p>
    </div>
  )
}

export default function App()
{
  return (
    <div>
      <Tarjeta nombre="Ada Lovelace" rol="Escribio el primer algoritmo" 
      emoji="#"/>

      
    </div>
      
    
  )
}

