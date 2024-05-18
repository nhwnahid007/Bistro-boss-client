import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle heading={'Testimonials'} subHeading={'What our clients say'} />

      <Swiper
      loop={true}
        pagination={{ type: 'fraction' }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="p-4 bg-gray-100 rounded-md shadow-md">
           <div className="flex justify-center">
                <Rating
          style={{ maxWidth: 180 }}
          value={review.rating}
          readOnly
        />

           
           </div>
<FaQuoteLeft className="mx-auto my-4 text-5xl" />
                  <p className="mb-4 px-20 text-center text-lg italic">&quot;{review.details}&quot;</p>
              <h3 className="text-2xl pb-5 text-center text-orange-400 font-semibold">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
