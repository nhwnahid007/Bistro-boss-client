import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import './Order.css'
import UseMenu from "../../../Hooks/UseMenu";

import OrderTab from "./OrderTab/OrderTab";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
    const [menu] = UseMenu()
    const dessert = menu.filter(item => item.category=== 'dessert') 
    const soup = menu.filter(item => item.category=== 'soup') 
    const salad = menu.filter(item => item.category=== 'salad') 
    const pizza = menu.filter(item => item.category=== 'pizza') 
    const drinks = menu.filter(item => item.category=== 'drinks') 
  return (
    <div>
      <Cover
        img={orderCover}
        title="Order Food"
        description="Order your food now"
      />
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
