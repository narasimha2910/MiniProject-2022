import React from "react";
import  { useEffect } from "react";

const Dashboard = ({ setActive }) => {
  useEffect(() => {
    setActive(2);
  }, [setActive]);

  return <div>Dashboard</div>;
};

export default Dashboard;
