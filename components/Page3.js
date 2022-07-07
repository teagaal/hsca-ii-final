import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getLink } from "../helpers";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

const SingleImage = ({ index }) => {
  return (
    <>
      <div className="single">
        <div className="image-container">
          <video src="/images/Comp1.webm" autoPlay loop className="video">
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </div>
        <motion.div className="back" variants={backVariants}>
          <Link href={getLink(index)}>
            <a>Siguiente parada</a>
          </Link>
        </motion.div>
      </div>
      <style>
        {`
        .single {
            overflow: hidden;
            height: 100vh;
            background-image: url('/images/imagen1.webp');
        }

        .single img {
            max-width: 100%;
            max-height: 100vh;
        }

        .image-container {
            position: absolute;
            top: 55%;
            left: 15%;
            width: 250px;
        }

        .video {
          width: 100%;
        }

        .back {
            position: fixed;
            top: 50px;
            right: 50px;
            font-size: 54px;
            z-index: 1;
            
        }

        .back a {
            text-decoration: none;
            color: rgba(255, 255, 255, .3);
        }
`}
      </style>
    </>
  );
};

export default SingleImage;
