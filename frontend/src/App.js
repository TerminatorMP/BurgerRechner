import "./styles/styles.css";
import { useBestellListe } from "./hooks/useBestellListe";
import { useZettel } from "./hooks/useZettel";

import Bestellung from "./Bestellung";
import Auflistung from "./Auflistung";

import Zettel from "./Zettel";
import {useState} from "react";
import {getAllOrdersOfLastWeek} from "./api/orderApi";

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

  const [wockenUmsatz, setWochenUmsatz] = useState(0);

  const calcUmsatz = async () => {
      let totalUmsatz = 0;
      const alleOrders = await getAllOrdersOfLastWeek();
      alleOrders.forEach(order => {
          totalUmsatz += order.price;
      })
      setWochenUmsatz(totalUmsatz);
  }

  return (
      <div className="App">
        <main className="container">
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>Burgerrechner9000</h1>
                <div>
                    <div>Umsatz seit letzter Woche: {wockenUmsatz}</div>
                    <button onClick={calcUmsatz} className={"outline"}>Kalkuliere Wochenumsatz</button>
                </div>
            </div>

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
