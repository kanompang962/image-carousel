import React, { useState } from 'react'
import imageData from '../data/imagesData'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        if (current === 0) {
            setCurrent(imageData.length - 1);
        } else {
            setCurrent(current - 1);
        }
    }
    const nextSlide = () => {
        if (current === imageData.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    }

    return (
        <div className='slider'>
            <AiOutlineLeft className='iconl' onClick={prevSlide} />
            <AiOutlineRight className='iconr' onClick={nextSlide} />
            {imageData.map((item, index) => (
                <div className={index === current ? 'slide active' : 'slide'}
                    key={index}>
                    {index === current && (
                        <div>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                        </div>
                    )}

                </div>
            ))}

        </div>
    )
}

export default ImageSlider