import "./styles/styles.css";

const listStyle = {
    border: "solid 1px grey",
    borderRadius: "5px",
    width: "30%",
    marginLeft: "40px",
    padding: "20px"
};

export default function Auflistung({ bestellListe }) {
    return (
        <div style={listStyle}>
            <table>
                <tbody>
                {bestellListe.map((item) => {
                    return (
                        <tr>
                            <th>{item.item}</th>
                            <th>
                                <b>{item.count}x</b>
                            </th>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
