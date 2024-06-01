import { useState } from "react";
import { DataContext } from "./DataContext";

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
        loading,
        setLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
