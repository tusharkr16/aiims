"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const content = [
  {
    imgSrc: img1,
    text: "t is with great ntific programinspired, empowered, and enriched with new knowledge and connections. The Organizing Committee is dedicated to ensure that every aspect of the conference exceeds your expectations, from the scientific program to the hospitality. We are confident that APCON 2025 will leave you inspired, empowered, and enriched with new knowledge and connections. the 73rd Annual Conference of the Indian Association of Pathologists & Microbiologists (IAPM) and International Academy of Pathologists -Indian Division (IAP-ID), to be held from 3rd to 7th December 2025 in the historic and scenic city of Jammu.",
    imgFirst: true,
  },
  {
    imgSrc: img2,
    text: "This year’s conference, st advancements and innovations shaping the field of pathology. With an exciting blend of plenary lectures by distinguished experts, hands-on Pre-Conference workshops, and interactive panel discussions, APCON 2025 promises to be an academic feast for all the participants. From exploring cutting-edge molecular techniques to understanding their implications in clinical practice, the conference will offer invaluable insights and opportunities for professional growth.",
    imgFirst: false,
  },
  {
    imgSrc: img3,
    text: "APCON 2025 will notct of the conference exceeds your expectations, from the scientific program to the hospitality. We are confident that APCON 2025 will leave you inspired, empowered, and enriched with new knowledge and connections. academic extravaganza but also a platform for fostering collaboration, networking, and camaraderie among pathologists and microbiologists from across the nation and beyond. Whether you are a seasoned expert or an early-career professional, the conference will provide a vibrant space to exchange ideas, share experiences, and shape the future of pathology together.",
    imgFirst: true,
  },
];

const AlternatingSections = () => {
  return (
    <div className="container mx-auto py-10 px-10 space-y-10">
      {content.map((item, index) => (
        <div
          key={index}
          className={`${
            index < 2 ? "block md:flex" : "hidden md:flex"
          } flex-col md:flex-row items-center ${
            item.imgFirst ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <motion.div
            initial={{ x: item.imgFirst ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <Image
              src={item.imgSrc}
              alt="Section Image"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ x: item.imgFirst ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 p-6"
          >
            <p className="text-lg text-gray-800">{item.text}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default AlternatingSections;
