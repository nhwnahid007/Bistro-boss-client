import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featurediImg1 from "../../../assets/home/featured.jpg";

import './featuredItem.css'
const Featured = () => {
  return (
    <div className="featured-item bg-gradient-to-b from-gray-700 to-gray-700 bg-gray-300 bg-cover bg-no-repeat
     text-white pt-8 my-20">
      <SectionTitle
        subHeading={"Featured Item"}
        heading={"Check It Out"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center pb-20 pt-12 px-16 bg-slate-500 bg-opacity-30">
          <div className=""><img src={featurediImg1} alt="" /></div>
          <div className="md:ml-10">
            <p>June 29, 2025</p>
            <p className="uppercase">Where can I get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit porro
              veniam voluptatem, distinctio eveniet nesciunt totam possimus,
              adipisci id cumque optio? Blanditiis cum accusantium hic repudiandae
              nihil laboriosam aliquam corrupti atque, consectetur at eum ratione
              natus maxime ullam. Vero eius sit dolorem libero enim adipisci fugiat
              a. Beatae, laboriosam corporis.
            </p>
            <button className="btn btn-outline text-white border-0 border-b-4 mt-4">Order Now</button>
    
          </div>
      </div>
    </div>
  );
};

export default Featured;
