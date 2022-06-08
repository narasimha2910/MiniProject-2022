import Table_Dashboard from "../components/Table_Dashboard";
import React from "react";
import { useEffect } from "react";

const Dashboard = ({ setActive }) => {
  useEffect(() => {
    setActive(2);
  }, [setActive]);

  return (
    <>
      <Table_Dashboard />
    </>
  );
};

export default Dashboard;
