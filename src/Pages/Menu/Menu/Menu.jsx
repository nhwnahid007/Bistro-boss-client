import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import bannerImg from '../../../assets/menu/banner3.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UseMenu from "../../../Hooks/UseMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = UseMenu()
    const dessert = menu.filter(item => item.category=== 'dessert') 
    const soup = menu.filter(item => item.category=== 'soup') 
    const salad = menu.filter(item => item.category=== 'salad') 
    const pizza = menu.filter(item => item.category=== 'pizza') 
    const offered = menu.filter(item => item.category=== 'offered') 
    return (
        <div>
            <div className="">
                <Helmet><title>Menu</title></Helmet>
            </div>
            <Cover img={bannerImg} title='Our Menu'></Cover>
            {/* Main cover */}
            <SectionTitle heading='Todays Offer' subHeading="Don't miss  "></SectionTitle>
            {/* Offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Desert  menu items*/}
            <MenuCategory items={dessert} title='Dessert'  coverImg={dessertBg} ></MenuCategory>
            {/* Pizza  menu items*/}
            <MenuCategory items={pizza} title='Pizza'  coverImg={pizzaBg} ></MenuCategory>
            {/* Soup  menu items*/}
            <MenuCategory items={soup} title='Soup'  coverImg={soupBg} ></MenuCategory>
            {/* Salad  menu items*/}
            <MenuCategory items={salad} title='Salad'  coverImg={saladBg} ></MenuCategory>

        </div>
    );
};

export default Menu;