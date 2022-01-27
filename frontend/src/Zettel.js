export default function Zettel({ zettel, removeZettel }) {
    const zettelStyle = {
        maxWidth: "400px",
        margin: "20px"
    };

    return (
        <div style={{ display: "flex" }}>
            {zettel.map((zettelItem) => {
                return (
                    <div style={zettelStyle}>
                        <p>
                            <b>Bestellung: #{zettelItem.nummer}</b>
                        </p>

                        <table>
                            <tbody>
                            {zettelItem.bestellung.map((bestellItem) => {
                                return (
                                    <tr>
                                        <td>{bestellItem.name}:</td>
                                        <td>{bestellItem.count}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>

                        <div
                            style={{
                                borderBottom: "solid 2px var(--color)",
                                margin: "10px 0"
                            }}
                        />

                        <table role="grid">
                            <tbody>
                            {zettelItem.components.map((comp) => {
                                return (
                                    <tr>
                                        <td>{comp.name}</td>
                                        <td>{comp.count}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>

                        <p style={{ marginTop: "20px" }}>
                            <mark>
                                <b>Preis: {zettelItem.price}</b>
                            </mark>
                        </p>
                        <button
                            onClick={() => removeZettel(zettelItem.nummer)}
                            className="outline contrast"
                        >
                            Done
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
