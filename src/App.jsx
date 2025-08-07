import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido/a al Blog! Acá verás tus artículos 📚" />
    </>
  );
}
