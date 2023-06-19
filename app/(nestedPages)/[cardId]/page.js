export default function Card({ params }) {
  console.log(params)
  return (
    <>
      <h1>cardId {params.cardId}</h1>
    </>
  )
}
