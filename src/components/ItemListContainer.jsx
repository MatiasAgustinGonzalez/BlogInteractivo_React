export default function ItemListContainer({ greeting }) {
  return (
    <main className="container" id="articulos">
      <h1>{greeting}</h1>
      <p>Próximamente: listado de artículos desde tu data.</p>
    </main>
  );
}
