import React from "react";

import "./styles/styles.css";

import BestellItem from "./BestellItem";

import { data } from "./data";

const styles = {
    width: "60%"
};

export default function Bestellung({ add, remove }) {
    return (
        <div style={styles}>
            <table>
                <tbody>
                {data.map((item) => {
                    return <BestellItem item={item} add={add} remove={remove} />;
                })}
                </tbody>
            </table>
        </div>
    );
}
