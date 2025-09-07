import React from "react";
import Footer from "../../components/admin-section/loginPage/LoginFooter.jsx";
import DashboardCard from "../../components/admin-section/Dashboard-Career/DashboardCard.jsx";
import LineGraph from "../../components/admin-section/Dashboard-Career/LineGraph.jsx";

const Dashboard = () => {
  return (
    <div className="min-h-screen mt-10 w-full bg-gradient-to-br from-blue-900 via-blue-500 to-orange-500 py-12 px-6">
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-md text-gray-600  mb-6">
          Welcome to the Zoro Innovations Dashboard. Here's an overview of your
          system performance.
        </p>

        <div className="flex flex-row gap-8 my-12">
          <DashboardCard title="Total Projects" value="25" />
          <DashboardCard title="Active Clients" value="18" />
          <DashboardCard title="Revenue This Quarter" value="$150,000" />
        </div>

        <h2 className="text-xl font-semibold text-white mb-6">
          System Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl">Project Completion Rate</h3>
            <p className="text-3xl font-semibold my-2">85%</p>
            <p className="text-md text-gray-600">
              Last 3 Months{" "}
              <span className="text-green-500 ml-2 font-bold">+5%</span>
            </p>
            <div className="h-32 mt-4 bg-gray-100 rounded">
              <LineGraph />
            </div>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl">Client Satisfaction</h3>
            <p className="text-3xl font-semibold my-2">4.8/5</p>
            <p className="text-md text-gray-600">
              Average{" "}
              <span className="text-green-500 ml-2 font-bold">+0.2</span>
            </p>
            <div className="h-32 mt-4 bg-gray-100 rounded">
              <LineGraph />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
