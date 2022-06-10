import TableDashboard from "../components/TableDashboard";
import React from "react";
import { useEffect } from "react";
import getRecordsOfOwner from "../web3/getRecordsOfOwner";

const Dashboard = ({ setActive, connectToWallet, address }) => {
  useEffect(() => {
    setActive(2);
    connectToWallet();
    getRecordsOfOwner(address);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TableDashboard />
    </>
  );
};

export default Dashboard;
