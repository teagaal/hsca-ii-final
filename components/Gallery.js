import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { images } from "../constants";

const radius = 300;
const imgs = 9;
const containerWidth = 600;
const containerHeight = 600;
let angle = 0;
const step = (2 * Math.PI) / imgs;

const transition = { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 1.1 },
};

const Thumbnail = ({ id, i, x, y }) => (
  <>
    <motion.div
      className="thumbnail"
      variants={thumbnailVariants}
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <motion.div
        className="frame"
        whileHover="hover"
        variants={frameVariants}
        transition={transition}
      >
        <Link href="/circulo/[index]" as={`/circulo/${i}`} scroll={false}>
          <motion.img
            src={id}
            alt=""
            variants={imageVariants}
            transition={transition}
          />
        </Link>
      </motion.div>
    </motion.div>
    <style>
      {`
            .thumbnail {
                position: absolute;
                width: 150px;
                height: 150px;
                border-radius: 100%;
                flex: 1 0 33%;
                margin: 10px;
                cursor: pointer;
                
            }

            .frame {
                overflow: hidden;
                width: 100px;
                height: 100px;
                border-radius: 100%;
                box-shadow:
                0.9px 0.6px 1.2px hsl(0deg 0% 0% / 0.11),
                3.1px 1.9px 4.1px -0.8px hsl(0deg 0% 0% / 0.11),
                7.7px 4.7px 10.1px -1.7px hsl(0deg 0% 0% / 0.11),
                18.7px 11.5px 24.7px -2.5px hsl(0deg 0% 0% / 0.11);
            }

            .frame:hover {
              -webkit-filter: invert(.9);
              filter: invert(.9);
              transition: 1s;
            }

            .thumbnail img {
                width: 100%;
                height: 100%;
            }
        `}
    </style>
  </>
);

const Gallery = () => (
  <>
    <h1>draculizaciones</h1>
    <div className="gallery">
      {images.map((id, i) => {
        let x = Math.round(
          containerWidth / 2 + radius * Math.cos(angle) - 100 / 2
        );
        let y = Math.round(
          containerHeight / 2 + radius * Math.sin(angle) - 100 / 2
        );
        angle += step;
        return <Thumbnail key={id} id={id} i={i} x={x} y={y} />;
      })}
    </div>
    <style>
      {`
        h1 {
            font-size: 150px;
            font-family: cursive;
            text-align: center;
            text-shadow:
		            -1px -1px 1px rgba(255, 255, 255, 0.30),
		            1px 1px 1px rgba(0, 0, 0, 0.20);
            position: fixed;
            top: -120px;
            z-index: 1;
            color:  rgba(43,7,0,1);
            left: 50%;
            transform: translateX(-50%);
            pointer-events: none;
        }

        .gallery {
            border: 1px solid rgba(255, 255, 255, .2);
            border-radius: 100%;
            padding: 40px;
            margin: 0 auto;
            width: 600px;
            height: 600px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .thumbnails {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
        }
        `}
    </style>
  </>
);

export default Gallery;
