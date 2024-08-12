import './App.css'
import StatusTripulante from './Components/StatusTripulante'

const tripulantes = [
  { nombre: 'Mr. Poindibags', esImpostor: true },
  { nombre: 'Bombom', esImpostor: false },
  { nombre: 'Tito', esImpostor: false },
  { nombre: 'X-Ray', esImpostor: false },
  { nombre: 'Fixfox', esImpostor: false },
]

const tripulacion = tripulantes.map((tripulante, index) => (
  <StatusTripulante {...tripulante} key={index} />
))

const lista = <ul>{tripulacion}</ul>

function App() {
  return (
    <>
      <h1 style={{ color: 'orange', backgroundColor: 'deeppink' }}>
        Lista de Tripulantes:
      </h1>
      {lista}
    </>
  )
}

export default App
