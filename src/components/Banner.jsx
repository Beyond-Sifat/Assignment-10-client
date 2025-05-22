import React from 'react';
;
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";


const Banner = () => {
    
    return (
        <div className='mt-10'>
            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className="w-full h-full">

                <SwiperSlide>
                    <div
                        className="w-full h-96 bg-cover bg-center flex flex-col justify-center items-center text-white"
                        style={{ backgroundImage: "url('https://res.cloudinary.com/drogaimmk/image/upload/v1747931445/people-doing-community-gardening-vector-illustration-together-69789418_lpcoio.webp')" }}
                    >
                        <h2 className="text-4xl font-bold mb-2 text-cyan-300">Join Our Green Community</h2>
                        <p className="text-lg font-semibold">Care Your Plants With Us</p>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-full h-96 bg-cover bg-center flex flex-col justify-center items-center text-white"
                        style={{ backgroundImage: "url('https://res.cloudinary.com/drogaimmk/image/upload/v1747931494/graphic-flat-design-drawing-hand-with-can-watering-plant-at-garden-logo-icon-label-symbol-earth-day-save-environment-concept-growing-seedling-forester-planting-cartoon-style-illustration-vector_cacznw.jpg')" }}
                    >
                        <h2 className="text-4xl font-bold mb-2">Proper Watering Schedule</h2>
                        <p className="text-lg">Caring plants made easy with watering schedule</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-full h-96 bg-cover bg-center flex flex-col justify-center items-center text-white"
                        style={{ backgroundImage: "url('https://res.cloudinary.com/drogaimmk/image/upload/v1747931436/still-cb60e94702d5e9b2b875de96ffb206b7_mgilng.webp')" }}
                    >
                        <h2 className="text-4xl font-bold mb-2">Add your New Plants</h2>
                        <p className="text-lg">Add Plants with Water date, health status and more.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;






// const bannerData = [
    //     {
    //         Image: "",
    //         title: "Join Our Green Community",
    //         subtitle: "Care Your Plants With Us",
    //     },
    //     {
    //         Image: "",
    //         title: "Proper Watering Schedule",
    //         subtitle: "Caring plants made easy with watering schedule",
    //     },
    //     {
    //         Image: "",
    //         title: "Add your New Plants",
    //         subtitle: "Add Plants with Water date, health status and more",
    //     }
    // ]