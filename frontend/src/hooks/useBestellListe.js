import { useState } from "react";

export function useBestellListe() {
    const [bestellListe, setBestellListe] = useState([]);

    const addBestellListe = (item) => {
        const foundItem = bestellListe.find(
            (countItem) => item.item === countItem.item
        );
        if (foundItem) {
            foundItem.count++;
            setBestellListe([...bestellListe]);
        } else {
            setBestellListe([...bestellListe, { item: item.item, count: 1 }]);
        }
    };

    const removeBestellListe = (item) => {
        const foundItem = bestellListe.find(
            (countItem) => item.item === countItem.item
        );
        if (foundItem) {
            if (foundItem.count !== 0) {
                foundItem.count--;
                setBestellListe([...bestellListe]);
            }
        }
    };

    const resetBestellListe = () => {
        setBestellListe([]);
    };

    return [bestellListe, addBestellListe, removeBestellListe, resetBestellListe];
}
