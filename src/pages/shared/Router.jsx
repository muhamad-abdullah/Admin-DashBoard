import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayOut from "../mainLayout/MainLayOut";
import DashBoard from "../dashBoard/DashBoard";
import Team from "../team/Team";
import Contacts from "../contacts/Contacts";
import Invoices from "../invoices/Invoices";
import AddUserForm from "../profile/AddUserForm";
import Calender from "../calendar/Calender";
import Faq from "../faq/Faq";
import BarChartScreen from "../barChartScreen/BarChartScreen";
import PieChartScreen from "../pieChart/PieChartScreen";
import LineChartScreen from "../lineChart/LineChartScreen";
import GeographyChartScreen from "../geography/GeographyChartScreen";
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayOut />}>
      <Route index element={<DashBoard />} />
      <Route path="/profile" element={<AddUserForm />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/calendar" element={<Calender />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/bar" element={<BarChartScreen />} />
      <Route path="/pie" element={<PieChartScreen />} />
      <Route path="/line" element={<LineChartScreen />} />
      <Route path="/geography" element={<GeographyChartScreen />} />
      <Route path="*" element={<div>Not found</div>} />
    </Route>
  )
);

const MainRouter = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default MainRouter;
