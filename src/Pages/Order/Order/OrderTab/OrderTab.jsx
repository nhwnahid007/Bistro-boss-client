import FoodCard from "../../../../components/FoodCard/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid lg:grid-cols-3 gap-10">
               {
                items.map(item => <FoodCard item={item} key={item.id}></FoodCard>)
               }
          </div>
    );
};

export default OrderTab;