"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "../Navbar";
import Image from "next/image";

import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"


const slides = [
    {
        image: img1,
        heading: "73rd Annual Conference of IAPM & IAP-ID",
        text: "Discover the best services tailored for you.",
    },
    {
        image: "/img2.jpg",
        heading: "73rd Annual Conference of IAPM & IAP-ID",
        text: "We provide top-notch solutions for your needs.",
    },
    {
        image: "/img3.jpg",
        heading: "73rd Annual Conference of IAPM & IAP-ID",
        text: "Start your journey with us and explore the possibilities.",
    },
];

const Hero = () => {
    return (
        <div className="relative w-full h-screen">
            <Navbar />


            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-screen flex items-center justify-start">
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={slide.image}
                                    alt={slide.heading}
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                    priority
                                    className="brightness-55"
                                />
                            </div>


                            {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}


                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="relative z-10 text-white max-w-lg ml-10"
                            >
                                <h2 className=" text-4xl lg:text-7xl  font-bold mb-4">{slide.heading}</h2>
                                <p className="lg:text-3xl">{slide.text}</p>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
