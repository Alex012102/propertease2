import React from "react";
import { Card } from "../components";

const DataCard = ({ title, data }) => {
  return (
    <div>
      <p>{title}</p>
      <div
        className="bg-gray-200 mb-1"
        style={{ width: "9rem", height: "2px" }}
      />
      <span className="numbers">{data}</span>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h3 className="subtitle">Account Dashboard</h3>
      <div className="flex space-x-4">
        <DataCard title={"Account Balance"} data={"$45,839"} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card title={"Card Title"} color={"subtle-shade"} style={"col-span-2"}>
          this is the card guts.
        </Card>

        <Card title={"Card Title"} color={"subtle-shade"}>
          this is the card guts.
        </Card>

        <Card title={"Card Title"} style={"row-span-2"}>this is the card guts.</Card>

        <Card title={"Card Title"} style={"col-span-2"}>this is the card guts.</Card>

        <Card title={"Card Title"} style={"col-span-2"}>this is the card guts.</Card>

        <Card title={"Card Title"} color={"subtle-shade"} style={"col-span-3"}>
          this is the card guts.
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
