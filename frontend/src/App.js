import "./styles/styles.css";
import { useBestellListe } from "./hooks/useBestellListe";
import { useZettel } from "./hooks/useZettel";

import Bestellung from "./Bestellung";
import Auflistung from "./Auflistung";

import Zettel from "./Zettel";

const flexStyle = {
  display: "flex"
};

export default function App() {
  const [
    bestellListe,
    addBestellListe,
    removeBestellList,
    resetBestellListe
  ] = useBestellListe();

  const [zettel, addZettel, removeZettel, updateZettel] = useZettel();

  return (
      <div className="App">
        <main className="container">
          <h1>Burgerrechner9000</h1>

          <div style={flexStyle}>
            <Bestellung add={addBestellListe} remove={removeBestellList} />

            <Auflistung bestellListe={bestellListe} />
          </div>

          <button
              style={{ margin: "50px 0" }}
              className="outline"
              onClick={() => {
                addZettel(bestellListe);
                resetBestellListe();
              }}
          >
            Bestellen
          </button>

          <Zettel zettel={zettel} removeZettel={removeZettel} />
        </main>
      </div>
  );
}
