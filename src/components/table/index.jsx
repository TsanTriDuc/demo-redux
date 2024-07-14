import "./index.scss";

function Table({ columns = [], dataSource = [] }) {
  /*
    {
        title: "Ho va Ten",
        dataIndex: "name",
    }
*/
  return (
    <table border={1}>
      <thead>
        {columns.map((column) => (
          <th key={columns.dataIndex}>{column.title}</th>
        ))}
      </thead>
      <tbody>
        {dataSource.map((item, index) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={column.dataIndex}>
                {/* TH1: => show value */}
                {/* TH2: => show customize render*/}
                {column.render
                  ? column.render(item, index)
                  : item[column.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
