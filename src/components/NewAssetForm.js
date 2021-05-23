import { useState } from "react";

function NewAssetForm() {
  const [formValues, setForm] = useState({ amount: "0,21", price: "10" });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleUpdate = (event) => {
    setForm({ [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="text"
          id="amount"
          name="amount"
          value={formValues.amount}
          onChange={handleUpdate}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          id="price"
          name="price"
          value={formValues.price}
          onChange={handleUpdate}
        />
      </div>
      <div>
        <input type="submit" value="Add" />
      </div>
    </form>
  );
}

export default NewAssetForm;
