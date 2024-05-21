
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = UseMenu();
  const popular = menu.filter(item => item.category=== 'popular')

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
