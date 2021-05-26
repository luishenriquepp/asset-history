function AssetHistoryTable(props) {
  return (
    props.assets.length > 0 && (
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Asset</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.assets.map((asset) => (
            <tr key={asset.id}>
              <td>{asset.type}</td>
              <td>{asset.asset}</td>
              <td>{asset.price}</td>
              <td>{asset.amount}</td>
              <td>{asset.createdOn.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
}

export default AssetHistoryTable;
