import React, { useState, useEffect } from 'react'

import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import { sliderData } from './Slider-data';
import './Slider.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide - 1);
  };
  
  useEffect(() => {
    setCurrentSlide(0);
  }, []);


  useEffect(() => {
    if(autoScroll){
        const auto = () => {
            slideInterval = setInterval(nextSlide, intervalTime);
        };
        auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, slideInterval, autoScroll]);

  return (
    <div className='slider' >
        <AiOutlineArrowLeft className='arrow prev' onClick = {prevSlide}/>
        <AiOutlineArrowRight className='arrow next' onClick = {nextSlide} />
        {
            sliderData.map( (slide, i) => {
                const {image, heading, desc} = slide;
                return (
                    <div key = {i} className = {i === currentSlide ? "slide current" : "silde"}>
                        {
                            i === currentSlide && (
                                <>
                                    <img src={image} alt="slide" width="100px"/>
                                    <div className='content'>
                                        <h2>{heading}</h2>
                                        <p>{desc}</p>
                                        <hr />
                                        <a href="#product" className='--btn --btn-primary'>
                                            Shop Now
                                        </a>
                                    </div>
                                </>
                            )
                        }
                    </div>
                );
            })
        }
    </div>
  )
}

export default Slider;