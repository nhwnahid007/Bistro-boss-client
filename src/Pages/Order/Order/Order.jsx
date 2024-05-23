import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import "./Order.css";
import UseMenu from "../../../Hooks/UseMenu";

import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ['salad','pizza','dessert','soup','drinks']
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();
  console.log(category);
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover
        img={orderCover}
        title="Order Food"
        description="Order your food now"
      />
      <div className="">
        <Helmet>
          <title>
            Order Food
          </title>
        </Helmet>
      </div>
      <div className="flex justify-center mt-8">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center space-x-4">
            <Tab>Salaad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Dessert</Tab>
            <Tab>Soup</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
