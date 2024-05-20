import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/menu-bg.png'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <div className="">
                <Helmet><title>Menu</title></Helmet>
            </div>
            <Cover img={menuImg} title='Our Menu'></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;