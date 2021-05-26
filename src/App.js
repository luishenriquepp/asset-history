import { useState } from "react";

import "./App.css";
import NewAssetForm from "./components/NewAssetForm";
import AssetHistoryTable from "./components/AssetHistoryTable";

function App() {
  const [assets, setAssets] = useState([]);

  const addAssetHandler = (value) => {
    setAssets((prev) => {
      return [...prev, value];
    });
  };

  return (
    <div className="App">
      <NewAssetForm onCreateAssetHistory={addAssetHandler}></NewAssetForm>
      <AssetHistoryTable assets={assets}></AssetHistoryTable>
    </div>
  );
}

export default App;
