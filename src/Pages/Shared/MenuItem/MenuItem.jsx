

const MenuItem = ({item}) => {
    const {name,image,price,recipe} =item
    return (
        <div className="flex space-x-2">
            <img className="w-24 rounded-tl-[0px] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px] " src={image} alt="" />
            <div className="">
                <h3 className="uppercase">{name}-------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;