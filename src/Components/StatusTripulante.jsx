export default function StatusTripulante({ nombre, esImpostor }) {
  return (
    <li>
      {nombre} {esImpostor ? '' : 'NO'} era impostor
    </li>
  )
}
