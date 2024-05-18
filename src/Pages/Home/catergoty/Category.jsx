
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle heading={'Order Online'} subHeading={'From 11.00 AM to 10.00 PM'}></SectionTitle>
            <Swiper
            
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper mb-24"
      >
          <SwiperSlide>
            <img src={img1} alt='slider'/>
            <h3 className='text-3xl text-white -mt-16 text-center'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt='slider'/>
            <h3 className='text-3xl text-white text-center -mt-16'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt='slider'/>
            <h3 className='text-3xl text-white text-center -mt-16'>Pizzas</h3>
        </SwiperSlide>
       
        <SwiperSlide>
            <img src={img4} alt='slider'/>
            <h3 className='text-3xl text-white  text-center -mt-16'>Deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt='slider'/>
            <h3 className='text-3xl text-white  text-center -mt-16'>Salads</h3>
        </SwiperSlide>
      </Swiper> 
        </section>
    );
};

export default Category;