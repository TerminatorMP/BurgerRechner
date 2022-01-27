import {useEffect, useState} from "react";

import { data } from "../data";
import {addOrder, allOrder, removeOrder} from "../api/orderApi";

export function useZettel() {
    const [zettel, setZettel] = useState([]);

    useEffect(() => {
        updateZettel();
        setInterval(updateZettel, 10000);

        return () => clearInterval(updateZettel);
    }, [])

    const updateZettel = () => {
        console.log("refresh started");
        allOrder().then(orders => setZettel(orders));
    }

    const getIngridients = (itemName) => {
        const ing = data.find((item) => item.item === itemName).ingridients;
        return ing;
    };

    const getPrice = (itemName) => {
        return data.find((item) => item.item === itemName).price;
    };

    const addZettel = (bestellungen) => {
        const allComponents = [];
        let sumPrices = 0;

        bestellungen.forEach((element) => {
            let ingridients = getIngridients(element.item);
            sumPrices += getPrice(element.item) * element.count;

            ingridients.forEach((ing) => {
                const found = allComponents.find((comp) => comp.name === ing.name);
                if (found) {
                    found.count += ing.count * element.count;
                } else {
                    allComponents.push({
                        name: ing.name,
                        count: ing.count * element.count
                    });
                }
            });
        });

        const newZettel = {
            nummer: Math.round(Math.random() * (1000 - 0)),
            price: sumPrices,
            bestellung: bestellungen.map((item) => {
                return { name: item.item, count: item.count };
            }),
            components: allComponents,
            open: true,
        };
        addOrder(newZettel);
        updateZettel();
    };

    const removeZettel = (nummer) => {

        removeOrder(nummer);
        updateZettel();
    };

    return [zettel, addZettel, removeZettel, updateZettel];
}
