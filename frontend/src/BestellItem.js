export default function BestellItem({ item, add, remove }) {
    return (
        <tr>
            <td>
                <p style={{ fontSize: "20px" }}>{item.item}</p>
            </td>
            <td>
                <button onClick={() => remove(item)} className="secondary">
                    <b>-</b>
                </button>
            </td>
            <td>
                <button onClick={() => add(item)}>
                    <b>+</b>
                </button>
            </td>
        </tr>
    );
}
