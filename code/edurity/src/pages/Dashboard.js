import TableDashboard from "../components/TableDashboard";
import React from "react";
import { useEffect } from "react";

const Dashboard = ({ setActive }) => {
  useEffect(() => {
    setActive(2);
  }, [setActive]);

  return (
    <>
      <TableDashboard />
    </>
  );
};

export default Dashboard;
