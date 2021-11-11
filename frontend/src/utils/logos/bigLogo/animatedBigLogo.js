import React from 'react';
import { motion } from 'framer-motion';

import './LogoStyles.scss';

const svgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
};

const pathVariants = {
  hidden: {
    // opacity: 0,
    pathLength: 1,
  },
  visible: {
    // opacity: 1,
    pathLength: [1, 0, 1],
    transition: {
      duration: 12,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

const AnimatedBigLogo = () => {
  return (
    <>
      <motion.svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        viewBox='0 0 2540.94 1135.66'
        // style='enable-background:new 0 0 2540.94 1135.66;'
        xmlSpace='preserve'
        width='100%'
        height='100%'
        variants={svgVariants}
        initial='hidden'
        animate='visible'
      >
        <g id='Capa_1'></g>
        <g id='Logo'>
          <g className='st0'>
            <motion.path
              variants={pathVariants}
              className='st1'
              d='M67.15,1212.74c0.11-1.09,0.54-2,1.29-2.71c0.75-0.72,1.69-1.08,2.84-1.08h21.53c2.01,0,3.33,1.09,3.96,3.27
			l30.4,84.74c5.11-14.24,10.23-28.36,15.37-42.37c5.14-14.01,10.23-28.13,15.29-42.37c0.8-2.18,2.12-3.27,3.96-3.27h21.62
			c1.15,0,2.08,0.37,2.8,1.12c0.72,0.75,1.1,1.64,1.16,2.67c2.12,20.15,4.28,40.22,6.46,60.2c2.18,19.98,4.36,40.02,6.55,60.11v0.26
			c0,2.36-1.26,3.53-3.79,3.53h-16.71c-2.58,0-3.93-1.26-4.05-3.79l-8.78-81.47l-28.68,79.23c-0.29,0.8-0.75,1.55-1.38,2.24
			c-0.63,0.69-1.29,1.03-1.98,1.03h-15.5c-0.75,0-1.44-0.33-2.07-0.99c-0.63-0.66-1.09-1.42-1.38-2.28
			c-4.71-13.26-9.45-26.44-14.21-39.53c-4.77-13.09-9.56-26.29-14.38-39.62l-8.78,81.38c0,2.53-1.32,3.79-3.96,3.79H58.02
			c-2.53,0-3.79-1.26-3.79-3.79L67.15,1212.74z'
            />
            <motion.path
              variants={pathVariants}
              className='st1'
              d='M384.16,1284.91c0,4.82,0.69,9.16,2.07,13c1.38,3.85,3.32,7.1,5.81,9.77s5.48,4.71,8.96,6.12
			c3.47,1.41,7.33,2.11,11.58,2.11c4.48,0,8.5-0.75,12.06-2.24c3.56-1.49,6.56-3.6,9-6.33c2.44-2.73,4.31-6,5.6-9.82
			c1.29-3.82,1.94-8.02,1.94-12.62v-72.17c0-1.03,0.37-1.92,1.12-2.67c0.74-0.75,1.69-1.12,2.83-1.12h16.65
			c1.2,0,2.22,0.37,3.05,1.12c0.83,0.75,1.24,1.64,1.24,2.67v73.12c0,8.9-1.43,16.67-4.3,23.3c-2.87,6.63-6.74,12.16-11.62,16.58
			c-4.88,4.42-10.56,7.72-17.04,9.9c-6.48,2.18-13.34,3.27-20.57,3.27s-14.08-1.16-20.57-3.49c-6.48-2.33-12.16-5.73-17.04-10.21
			c-4.88-4.48-8.75-10.02-11.62-16.62c-2.87-6.6-4.3-14.18-4.3-22.74v-73.12c0-0.92,0.33-1.78,0.99-2.58
			c0.66-0.8,1.51-1.21,2.54-1.21h17.57c0.86,0,1.75,0.37,2.67,1.12c0.92,0.75,1.38,1.64,1.38,2.67V1284.91z'
            />
            <motion.path
              variants={pathVariants}
              className='st1'
              d='M629.52,1213.08c0-2.76,1.26-4.13,3.79-4.13h83.02c1.49,0,2.55,0.42,3.19,1.25c0.63,0.84,0.95,1.89,0.95,3.15
			v15.21c0,1.04-0.36,1.96-1.08,2.77c-0.72,0.81-1.79,1.21-3.23,1.21h-61.23v26.09h47.19c1.15-0.11,2.07,0.13,2.76,0.73
			c0.69,0.6,1.03,1.62,1.03,3.06v15.59c0,1.03-0.29,1.95-0.86,2.76c-0.57,0.8-1.49,1.21-2.76,1.21h-47.37v31.26h63.47
			c1.61,0,2.67,0.35,3.19,1.04s0.77,1.76,0.77,3.2v15.73c0,2.42-1.26,3.63-3.79,3.63h-85.26c-1.03,0-1.92-0.29-2.67-0.86
			c-0.75-0.57-1.12-1.49-1.12-2.76V1213.08z'
            />
            <motion.path
              variants={pathVariants}
              className='st1'
              d='M880.65,1213c0-2.7,1.29-4.05,3.87-4.05h53.86c4.99,0,9.68,0.93,14.07,2.8c4.39,1.87,8.2,4.41,11.44,7.62
			c3.24,3.22,5.79,7.01,7.66,11.37c1.86,4.36,2.8,9.07,2.8,14.12c0,4.65-0.83,8.99-2.5,13c-1.67,4.02-3.96,7.55-6.89,10.59
			c2.35,1.72,4.48,3.7,6.37,5.94c1.9,2.24,3.53,4.65,4.89,7.23c1.37,2.58,2.43,5.33,3.19,8.22c0.76,2.9,1.14,5.87,1.14,8.91
			c0,5.11-0.96,9.96-2.89,14.55c-1.92,4.59-4.54,8.64-7.84,12.14c-3.3,3.5-7.19,6.27-11.67,8.31c-4.48,2.04-9.27,3.06-14.38,3.06
			h-59.25c-1.15,0-2.08-0.3-2.8-0.9c-0.72-0.6-1.08-1.54-1.08-2.8V1213z M949.46,1245.29c0-2.18-0.39-4.22-1.17-6.12
			c-0.78-1.89-1.85-3.53-3.23-4.91s-3.04-2.46-4.96-3.23c-1.93-0.78-4.04-1.16-6.34-1.16h-28.22v31.18h27.96
			c2.3,0,4.43-0.4,6.38-1.21c1.96-0.8,3.64-1.91,5.05-3.32c1.41-1.41,2.52-3.07,3.32-5
			C949.05,1249.61,949.46,1247.53,949.46,1245.29z M955.05,1298.08c0-1.95-0.35-3.86-1.04-5.73c-0.69-1.87-1.64-3.54-2.85-5.04
			c-1.21-1.49-2.65-2.74-4.31-3.75c-1.67-1-3.48-1.68-5.44-2.02c-1.15-0.17-2.31-0.33-3.49-0.47c-1.18-0.14-2.37-0.21-3.58-0.21
			h-28.81v34.96h28.81c1.21,0,2.39-0.04,3.54-0.13c1.15-0.09,2.3-0.24,3.45-0.47c1.96-0.29,3.77-0.95,5.44-1.98
			c1.67-1.03,3.12-2.33,4.36-3.88c1.24-1.55,2.2-3.29,2.89-5.21S955.05,1300.21,955.05,1298.08z'
            />
            <motion.path
              variants={pathVariants}
              className='st1'
              d='M1137.8,1212.74c0-1.03,0.34-1.92,1.03-2.67c0.69-0.75,1.66-1.12,2.92-1.12h17.08c1.03,0,1.93,0.33,2.7,0.99
			c0.77,0.66,1.16,1.59,1.16,2.8v100.5h53.91c1.03,0,1.92,0.36,2.67,1.08c0.75,0.72,1.12,1.68,1.12,2.88v15.76
			c0,1.03-0.34,1.94-1.03,2.71c-0.69,0.78-1.61,1.16-2.76,1.16h-75.03c-2.52,0-3.78-1.26-3.78-3.79V1212.74z'
            />
            <motion.path
              variants={pathVariants}
              className='st1'
              d='M1375.58,1213.08c0-2.76,1.26-4.13,3.79-4.13h83.02c1.49,0,2.55,0.42,3.19,1.25
			c0.63,0.84,0.95,1.89,0.95,3.15v15.21c0,1.04-0.36,1.96-1.08,2.77c-0.72,0.81-1.79,1.21-3.23,1.21h-61.23v26.09h47.19
			c1.15-0.11,2.07,0.13,2.76,0.73c0.69,0.6,1.03,1.62,1.03,3.06v15.59c0,1.03-0.29,1.95-0.86,2.76c-0.58,0.8-1.49,1.21-2.76,1.21
			h-47.37v31.26h63.47c1.61,0,2.67,0.35,3.19,1.04s0.78,1.76,0.78,3.2v15.73c0,2.42-1.26,3.63-3.79,3.63h-85.26
			c-1.03,0-1.92-0.29-2.67-0.86c-0.75-0.57-1.12-1.49-1.12-2.76V1213.08z'
            />
            <motion.path
              variants={pathVariants}
              className='st1'
              d='M1626.8,1213c0-2.7,1.26-4.05,3.79-4.05h52.71c5.8,0,11.22,1.09,16.28,3.27c5.05,2.18,9.46,5.14,13.22,8.87
			c3.76,3.73,6.72,8.13,8.87,13.18c2.15,5.05,3.23,10.42,3.23,16.1c0,3.96-0.55,7.75-1.64,11.37c-1.09,3.62-2.61,6.98-4.56,10.08
			c-1.95,3.1-4.28,5.9-6.98,8.4c-2.7,2.5-5.68,4.61-8.96,6.33l22.39,44.18c0.11,0.57,0.31,1.15,0.6,1.72
			c0.29,0.58,0.43,1.18,0.43,1.81c0,1.72-1,2.58-3.01,2.58h-19.98c-2.07,0-3.45-1.06-4.13-3.19l-20.84-41.34
			c-0.92,0-1.91,0.01-2.97,0.04c-1.06,0.03-2.53,0.04-4.39,0.04c-1.87,0-4.31,0-7.32,0c-3.01,0-6.9,0-11.67,0v40.74
			c0,2.47-1.32,3.7-3.96,3.7h-17.31c-1.15,0-2.07-0.3-2.76-0.9c-0.69-0.6-1.03-1.54-1.03-2.8V1213z M1699.4,1250.5
			c0-2.46-0.46-4.85-1.38-7.17c-0.92-2.32-2.21-4.4-3.88-6.23c-1.67-1.83-3.65-3.32-5.94-4.47c-2.3-1.15-4.79-1.8-7.49-1.98
			c-2.01-0.06-3.98-0.1-5.9-0.13c-1.92-0.03-3.92-0.04-5.99-0.04h-16.97v39.96h22.74c1.15,0,2.22,0,3.23,0c1,0,2.08-0.06,3.23-0.17
			c2.7-0.17,5.18-0.8,7.45-1.89c2.27-1.09,4.21-2.53,5.81-4.34c1.61-1.8,2.86-3.87,3.75-6.19
			C1698.95,1255.53,1699.4,1253.08,1699.4,1250.5z'
            />
            <motion.path
              variants={pathVariants}
              className='st1'
              d='M1884.39,1212.74c0-1.03,0.31-1.92,0.94-2.67c0.63-0.75,1.57-1.12,2.83-1.12h17.08
			c0.97,0,1.89,0.34,2.75,1.03c0.86,0.69,1.29,1.61,1.29,2.76v120.31c0,2.53-1.35,3.79-4.03,3.79h-17.08
			c-2.52,0-3.78-1.26-3.78-3.79V1212.74z M1892.57,1172.95c0.46-1.26,1.11-2.18,1.94-2.76c0.83-0.57,1.74-0.86,2.71-0.86h15.33
			c0.92,0,1.56,0.21,1.94,0.65c0.37,0.43,0.56,0.96,0.56,1.59c0,0.46-0.04,0.96-0.13,1.51c-0.09,0.55-0.24,1.08-0.47,1.59
			l-8.18,18.26c-1.09,2.41-2.61,3.62-4.56,3.62h-13.43c-0.98,0-1.61-0.23-1.89-0.69c-0.29-0.46-0.43-1-0.43-1.64
			c0-0.57,0.03-1.15,0.09-1.72c0.06-0.57,0.23-1.18,0.52-1.81L1892.57,1172.95z'
            />
            <motion.path
              variants={pathVariants}
              className='st1'
              d='M2066.36,1333.65c0.29-1.15,0.62-2.21,0.99-3.19c0.37-0.98,0.7-1.87,0.99-2.67l46.42-115.58
			c0.17-0.63,0.65-1.33,1.42-2.11c0.78-0.78,1.82-1.16,3.14-1.16h13.87c1.38,0,2.37,0.34,2.97,1.03c0.6,0.69,1.05,1.29,1.33,1.81
			l2.84,6.72l45.47,113.77c0,0.17,0.04,0.47,0.13,0.9s0.13,0.79,0.13,1.08c0,1.72-1.26,2.58-3.79,2.58h-16.97
			c-1.26,0-2.24-0.26-2.93-0.78c-0.69-0.52-1.26-1.32-1.72-2.41l-1.55-3.96c-1.09-2.76-2.18-5.51-3.27-8.27
			c-1.09-2.76-2.15-5.54-3.19-8.35h-53.14c-1.49,4.02-2.94,7.79-4.35,11.33c-1.41,3.53-2.6,6.62-3.57,9.26
			c-0.81,2.13-2.3,3.19-4.48,3.19h-17.22c-1.09,0-1.97-0.2-2.63-0.6c-0.66-0.4-0.99-1-0.99-1.81
			C2066.28,1334.08,2066.3,1333.82,2066.36,1333.65z M2126.3,1241.76c-3.1,7.92-6.19,16.13-9.26,24.63
			c-3.07,8.5-6.16,16.68-9.26,24.54h36.69L2126.3,1241.76z'
            />
            <motion.path
              variants={pathVariants}
              className='st1'
              d='M2414.98,1243.05c-0.75,0-1.44-0.19-2.07-0.56c-0.63-0.37-1.35-0.88-2.15-1.51l-0.17-0.09
			c-1.09-1.09-2.5-2.3-4.22-3.62c-1.72-1.32-3.65-2.55-5.77-3.7c-2.13-1.15-4.41-2.12-6.85-2.93c-2.44-0.8-4.92-1.21-7.45-1.21
			c-3.22,0-6.06,0.36-8.53,1.08c-2.47,0.72-4.54,1.69-6.2,2.93c-1.67,1.24-2.93,2.68-3.79,4.35c-0.86,1.67-1.29,3.45-1.29,5.34
			c0,2.07,0.65,3.88,1.94,5.43s3.04,2.93,5.25,4.13c2.21,1.21,4.75,2.31,7.62,3.32c2.87,1.01,5.88,2,9.04,2.97
			c3.62,1.09,7.2,2.27,10.76,3.53c3.56,1.26,6.96,2.68,10.21,4.26c3.24,1.58,6.27,3.33,9.09,5.25c2.81,1.92,5.24,4.13,7.28,6.63
			c2.04,2.5,3.64,5.28,4.82,8.35c1.18,3.07,1.77,6.53,1.77,10.38c0,6.26-1.26,11.91-3.79,16.97c-2.53,5.05-6.02,9.37-10.46,12.96
			c-4.45,3.59-9.68,6.34-15.67,8.27c-6,1.92-12.44,2.89-19.33,2.89c-4.42,0-8.81-0.52-13.18-1.55s-8.56-2.5-12.57-4.39
			c-4.02-1.9-7.82-4.18-11.41-6.85c-3.59-2.67-6.79-5.67-9.6-9v0.09l-0.17-0.34c-1.26-1.43-1.89-2.76-1.89-3.96
			c0-0.63,0.17-1.23,0.52-1.81c0.34-0.57,0.86-1.21,1.55-1.89l2.84-2.84c0.86-0.75,1.78-1.58,2.76-2.5c0.98-0.92,1.95-1.75,2.93-2.5
			c0.98-0.75,1.88-1.38,2.71-1.89c0.83-0.52,1.51-0.77,2.02-0.77c0.8,0,1.55,0.26,2.24,0.77c0.69,0.52,1.26,1.01,1.72,1.46
			l0.34,0.34h-0.09c2.01,1.89,4.26,3.7,6.76,5.43c2.5,1.72,5.07,3.26,7.71,4.61c2.64,1.35,5.27,2.41,7.88,3.19
			c2.61,0.78,5.07,1.16,7.36,1.16c3.16,0,6.11-0.4,8.87-1.21c2.76-0.8,5.14-1.94,7.15-3.4c2.01-1.46,3.59-3.23,4.74-5.3
			c1.15-2.07,1.72-4.36,1.72-6.89c0-2.53-0.75-4.69-2.24-6.5s-3.44-3.39-5.86-4.74c-2.41-1.35-5.13-2.51-8.14-3.49
			c-3.01-0.98-6.04-1.89-9.09-2.76c-7.01-2.12-13.13-4.42-18.39-6.89c-5.25-2.47-9.63-5.24-13.13-8.31
			c-3.5-3.07-6.13-6.52-7.88-10.33c-1.75-3.82-2.63-8.11-2.63-12.88c0-5.34,1.08-10.21,3.23-14.6c2.15-4.39,5.21-8.15,9.17-11.28
			c3.96-3.13,8.73-5.57,14.3-7.32c5.57-1.75,11.8-2.63,18.69-2.63c5.22,0,10.54,0.82,15.93,2.46c5.4,1.64,10.39,3.89,14.99,6.76
			c1.38,0.86,2.78,1.84,4.22,2.93c1.43,1.09,2.76,2.2,3.96,3.32c1.21,1.12,2.2,2.21,2.97,3.27c0.78,1.06,1.16,1.97,1.16,2.71
			c0,0.69-0.17,1.39-0.52,2.11c-0.34,0.72-0.78,1.36-1.29,1.94l-2.58,2.76v-0.09c-0.86,0.92-1.75,1.87-2.67,2.84
			c-0.92,0.98-1.84,1.85-2.76,2.63c-0.92,0.78-1.75,1.42-2.5,1.94C2416.13,1242.79,2415.5,1243.05,2414.98,1243.05z'
            />
          </g>
          <g>
            <motion.path
              variants={pathVariants}
              className='st2'
              d='M526.14,72.09c5.28,0,10.05,1.62,14.3,4.84c4.25,3.23,6.67,8.07,7.26,14.52v44.45
			c0,5.87-1.76,10.93-5.28,15.18c-3.52,4.26-8.95,6.38-16.28,6.38H343.04v547.96c0,5.28-1.76,9.98-5.28,14.08
			c-3.52,4.11-8.51,6.16-14.96,6.16h-44.45c-5.28,0-9.98-1.9-14.08-5.72c-4.11-3.81-6.16-8.65-6.16-14.52V157.48H74.12
			c-5.87,0-10.71-1.76-14.52-5.28c-3.82-3.52-5.72-8.95-5.72-16.28V91.46c0-5.87,1.9-10.56,5.72-14.08
			c3.81-3.52,8.65-5.28,14.52-5.28H526.14z'
            />
            <motion.path
              variants={pathVariants}
              className='st2'
              d='M688.54,93.22c0-14.08,6.45-21.13,19.37-21.13h253.96c29.34,0,56.63,5.5,81.86,16.5
			c25.23,11,47.24,25.97,66.02,44.89c18.77,18.93,33.52,41.08,44.23,66.46c10.71,25.38,16.06,52.45,16.06,81.2
			c0,20.54-2.86,40.27-8.58,59.2s-13.72,36.46-23.99,52.6c-10.27,16.14-22.6,30.59-36.97,43.35c-14.38,12.76-30.37,23.4-47.97,31.91
			l116.19,238.11v5.72c0,9.1-5.43,13.64-16.28,13.64h-53.26c-9.1,0-16.14-5.43-21.13-16.28L972.43,487.57
			c-2.35,0.3-4.92,0.44-7.7,0.44c-2.79,0-6.75,0.08-11.88,0.22c-5.14,0.15-11.96,0.22-20.47,0.22c-8.51,0-19.74,0-33.67,0
			c-13.94,0-31.03,0-51.28,0s-44.75,0-73.5,0v217.86c0,12.92-6.75,19.37-20.25,19.37h-45.77c-12.92,0-19.37-6.45-19.37-19.37V93.22z
			 M1085.54,280.27c0-16.13-3.16-31.69-9.46-46.65c-6.31-14.96-14.96-28.17-25.97-39.61c-11-11.44-24.06-20.61-39.17-27.51
			c-15.12-6.89-31.47-10.34-49.07-10.34H773.93v248.23h189.7c17.31,0,33.45-3.37,48.41-10.12c14.96-6.75,27.87-15.84,38.73-27.29
			c10.85-11.44,19.37-24.65,25.53-39.61C1082.46,312.4,1085.54,296.71,1085.54,280.27z'
            />
            <motion.path
              variants={pathVariants}
              className='st2'
              d='M2344.74,214.69c-4.11-2.64-10.86-7.77-20.25-15.4c-9.39-7.63-20.91-15.4-34.55-23.33
			c-13.64-7.92-28.98-15.03-45.99-21.35c-17.02-6.31-35.36-9.46-55.02-9.46c-23.18,0-43.13,2.79-59.86,8.36
			c-16.72,5.58-30.52,12.98-41.37,22.23c-10.86,9.24-18.86,19.66-23.99,31.25c-5.14,11.59-7.7,23.26-7.7,34.99
			c0,16.44,5.43,30.22,16.29,41.37c10.85,11.15,25.23,20.84,43.13,29.05c17.89,8.22,38.22,15.62,60.96,22.23
			c22.74,6.6,45.92,13.58,69.54,20.91c23.62,7.34,46.8,15.56,69.54,24.65c22.74,9.1,43.06,20.4,60.96,33.89
			c17.89,13.5,32.27,29.64,43.13,48.41c10.85,18.78,16.28,41.52,16.28,68.22c0,30.81-6.38,58.76-19.15,83.84
			s-30.22,46.51-52.38,64.26c-22.16,17.76-48.19,31.47-78.12,41.15c-29.93,9.68-62.06,14.52-96.39,14.52c-22.89,0-45.55-2.57-68-7.7
			c-22.45-5.13-44.01-12.61-64.7-22.45c-20.69-9.83-39.98-21.79-57.88-35.87c-17.9-14.08-33.89-30.22-47.97-48.41
			c-3.82-4.69-5.65-9.39-5.5-14.08c0.14-4.69,2.71-9.09,7.7-13.2l34.77-29.05c4.99-4.11,9.83-5.94,14.52-5.5
			c4.69,0.44,8.95,3.01,12.76,7.7l5.72,5.72c12.32,13.8,26.33,25.75,42.03,35.87c15.69,10.12,31.39,18.49,47.09,25.09
			c15.69,6.6,30.73,11.52,45.11,14.74c14.37,3.23,26.55,4.84,36.53,4.84c17.89,0,36.24-2.34,55.02-7.04
			c18.77-4.69,35.94-11.88,51.5-21.57c15.55-9.68,28.31-21.93,38.29-36.75c9.97-14.81,14.96-32.2,14.96-52.16
			c0-16.72-4.92-30.88-14.74-42.47c-9.83-11.59-23.11-21.71-39.83-30.37c-16.72-8.65-36.31-16.43-58.76-23.33
			c-22.45-6.89-46.43-14.15-71.96-21.79c-35.21-10.27-65.43-21.05-90.67-32.35c-25.24-11.29-45.99-23.77-62.28-37.41
			c-16.28-13.64-28.24-28.9-35.87-45.77c-7.63-16.87-11.44-35.87-11.44-57c0-26.7,5.35-51.12,16.06-73.28
			c10.71-22.15,25.89-41.3,45.55-57.44c19.65-16.13,43.35-28.68,71.08-37.63c27.73-8.95,58.76-13.42,93.09-13.42
			c18.49,0,37.7,2.35,57.66,7.04c19.95,4.7,39.39,11.22,58.32,19.59c18.93,8.36,36.67,18.34,53.26,29.93
			c16.57,11.59,30.88,24.43,42.91,38.51c4.11,4.4,6.23,9.02,6.38,13.86c0.14,4.84-2.13,9.46-6.82,13.86l-31.25,29.93
			c-4.7,4.4-9.46,6.46-14.3,6.16C2353.32,221.01,2348.84,218.81,2344.74,214.69z'
            />
          </g>
          <motion.path
            variants={pathVariants}
            className='st3'
            d='M1768.68,73.48h54.93c6.36,0,11.51,5.15,11.51,11.51v313.99c0,46.24-37.49,83.73-83.73,83.73l-378.18,0
		c-46.24,0-83.73-37.49-83.73-83.73l0-313.99c0-6.36,5.15-11.51,11.51-11.51l54.93,0c6.36,0,11.51,5.15,11.51,11.51V266h156.41
		V127.49c0-6.36,5.15-11.51,11.51-11.51h55.5c6.36,0,11.51,5.15,11.51,11.51V265.4h154.82V84.98
		C1757.17,78.63,1762.32,73.48,1768.68,73.48z'
          />
          <motion.path
            variants={pathVariants}
            className='st3'
            d='M1834.83,725.18h-545.07c-0.16,0-0.28-0.13-0.28-0.28v-48.24h545.64v48.24
		C1835.12,725.05,1834.99,725.18,1834.83,725.18z'
          />
          <motion.path
            variants={pathVariants}
            className='st3'
            d='M1803.55,574.85h-482.5v-53.97c0-0.16,0.13-0.28,0.28-0.28h481.93c0.16,0,0.28,0.13,0.28,0.28V574.85z'
          />
          <g>
            <motion.path
              variants={pathVariants}
              className='st2'
              d='M261.91,852.96l-13.83,20.5c-19.87-14.23-44.67-22.75-71.73-22.75c-58.42,0.73-116.6,41.17-118.69,111.65
			c0.82,61.59,50.23,110.23,118.69,111.65c27.06,0,51.86-8.52,71.73-22.75l13.83,20.5c-23.94,16.96-53.58,26.96-85.57,26.96
			c-86.19,0-143.39-61.8-143.39-136.35C32.96,887.8,90.15,826,176.35,826C208.34,826,237.98,836,261.91,852.96z'
            />
            <motion.path
              variants={pathVariants}
              className='st2'
              d='M520.43,832.05l94.86,260.34h-26.13l-25.77-70.72H447.14l-25.77,70.72h-26.13l94.86-260.34H520.43z
			 M456.08,997.12h98.37l-49.19-134.99L456.08,997.12z'
            />
            <motion.path
              variants={pathVariants}
              className='st2'
              d='M902.7,846.92l-12.72,21.08c-18.06-10.24-34.83-16.95-56.17-16.95c-26.66,0-51.82,15.24-51.82,42.04
			c0,34.57,35.04,43.46,59.57,50.82c36.31,10.13,74.84,31.16,76.86,76.6c0,38.96-31.05,78.2-86.37,78.2
			c-24.16,0-53.43-7.07-81.04-25.49l13.29-22.53c19.79,12.58,43.12,20.65,66.77,21.2h0.1h0.1c36.17,0,60.32-23.61,60.32-51.39
			c-0.56-31.54-36.44-46.81-65.15-54.32c-33.07-8.75-71.28-28.28-71.28-73.1c0-37.87,35.16-67.38,78.8-67.38
			C863.93,825.7,883.97,835.89,902.7,846.92z'
            />
            <motion.path
              variants={pathVariants}
              className='st2'
              d='M1146.44,832.05h25.95h94.44v24.62h-95.1v235.72h-24.62V856.67H1052v-24.62H1146.44z'
            />
            <motion.path
              variants={pathVariants}
              className='st2'
              d='M1444.94,832.05v260.34h-24.62V832.05H1444.94z'
            />
            <motion.path
              variants={pathVariants}
              className='st2'
              d='M1622.81,832.05v235.72h147.91v24.62h-172.52V832.05H1622.81z'
            />
            <motion.path
              variants={pathVariants}
              className='st2'
              d='M1948.92,832.05v235.72h147.91v24.62H1924.3V832.05H1948.92z'
            />
            <motion.path
              variants={pathVariants}
              className='st2'
              d='M2503.22,962.24c0,75.21-61.24,136.45-136.45,136.45c-75.21,0-136.45-61.24-136.45-136.45
			c0-75.21,61.24-136.45,136.45-136.45C2441.98,825.79,2503.22,887.03,2503.22,962.24z M2255.07,962.24
			c0,61.83,49.87,111.69,111.7,111.69c61.83,0,111.7-49.86,111.7-111.69c0-61.83-49.87-111.7-111.7-111.7
			C2304.93,850.55,2255.07,900.41,2255.07,962.24z'
            />
          </g>
          <rect
            x='54.32'
            y='1122.91'
            className='st4'
            width='2381.4'
            height='17.13'
          />
          <motion.path
            variants={pathVariants}
            className='st3'
            d='M1820.55,652.88h-516.51v-53.97c0-0.16,0.13-0.28,0.28-0.28h515.94c0.16,0,0.28,0.13,0.28,0.28V652.88z'
          />
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </g>
      </motion.svg>
    </>
  );
};

export default AnimatedBigLogo;