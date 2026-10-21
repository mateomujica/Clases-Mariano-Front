import { useState, type ChangeEvent, type SubmitEvent } from "react";
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
} 

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

export default function App() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  function manejarEnvio(e: SubmitEvent<HTMLFormElement>) {
    console.log(e);
    e.preventDefault();
    setMensaje(`Hola ${nombre}, bienvenido`);
    setNombre("");
  }

  function manejarCambio(e: ChangeEvent<HTMLInputElement>) {
    setNombre(e.target.value);
  }

  return (
    <form onSubmit={manejarEnvio}>
      <input
        value={nombre}
        onChange={manejarCambio}
        placeholder="Escribi tu nombre"
      />
      <button type="submit" disabled={nombre.trim() === ""}>Enviar</button>
      <p 
      className="muted">Estas escribiendo: {nombre || "(NADA TODAVIA)"}
      </p>

      
      {mensaje && <h3>{mensaje}</h3>}
    </form>
    
  );
}
*/


interface Lenguaje {
  id: number;
  nombre: string;
  tipado: boolean;
}

const lenguajes: Lenguaje[] = [
  { id: 1, nombre: "JavaScript", tipado: false },
  { id: 2, nombre: "TypeScript", tipado: true },
  { id: 3, nombre: "Python", tipado: false },
  { id: 4, nombre: "Java", tipado: true },
  { id: 5, nombre: "C#", tipado: true },
];

export default function App() {

  const [soloTipados, setSoloTipados] = useState<boolean>(false);

  const visibles = soloTipados ? lenguajes.filter((l) => l.tipado) : lenguajes;

  
  return (
    <>
      <label>
        <input type="checkbox" onChange ={(e) => setSoloTipados(e.target.checked)}/>{"  "}Solo tipados estatico
      </label>
      <ul>{visibles.map((l) => (<li>({l.nombre}) ({l.id}) ({l.tipado ? "Tipado" : "No tipado"})</li>))}</ul>
    </>

  );
}

