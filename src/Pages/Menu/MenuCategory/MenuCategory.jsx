import { Link } from "react-router-dom";
import MenuItem from "../../../components/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, coverImg,description }) => {
  return (
    <div className="pt-8">
       { title &&  <Cover img={coverImg} title={title} description={description}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="btn  btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
    </div>
  );
};

export default MenuCategory;
