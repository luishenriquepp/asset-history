import { useState } from "react";

function NewAssetForm(props) {
  const [formValues, setForm] = useState({
    id: 0,
    type: "BUY",
    asset: "BTC",
    amount: "",
    price: "",
    createdOn: new Date(),
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    formValues.id = Math.random() * 100;
    formValues.createdOn = new Date();

    props.onCreateAssetHistory(formValues);
  };

  const handleUpdate = (event) => {
    setForm((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <select
          id="type"
          name="type"
          value={formValues.type}
          onChange={handleUpdate}
        >
          <option value="BUY">Buy</option>
          <option value="SELL">Sell</option>
        </select>
      </div>
      <div className="form-control">
        <select
          id="asset"
          name="asset"
          value={formValues.asset}
          onChange={handleUpdate}
        >
          <option value="BTC">Bitcoin</option>
          <option value="ETH">Ethereum</option>
          <option value="ADA">Cardano</option>
          <option value="DOT">Polkadot</option>
        </select>
      </div>
      <div className="form-control">
        <input
          type="text"
          id="amount"
          name="amount"
          value={formValues.amount}
          onChange={handleUpdate}
          placeholder="Amount: "
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          id="price"
          name="price"
          value={formValues.price}
          onChange={handleUpdate}
          placeholder="Price: "
        />
      </div>
      <div>
        <input type="submit" value="Add" />
      </div>
    </form>
  );
}

export default NewAssetForm;
