import React, {useEffect, useState} from 'react';
import {collection, getDocs} from "firebase/firestore";
import {db} from "../Firebase/firebase";
import "../SCSS/Slider.scss"

const Slider = () => {
    const [images, setImages] = useState([])
    const [current, setCurrent] = useState(0);
    const length = images.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current)
    }
    const getCars = async () => {
        const data = await getDocs(collection(db, "cars"));
        data.forEach(car => {
            setImages(prev => [...prev, car.data()])
        })
    }

    useEffect(() => {
        getCars();
    }, [])
    return (
        <div className="slideshow-container">
            {images.map((image, index) => {
                return <>
                    <div className={"mySlides1"}
                         key={index}
                    >
                        {index === current && (
                            <img src={image.image} alt='image'/>
                        )}
                    </div>
                </>
            })}
            <a className="prev" onClick={prevSlide}>&#10094;</a>
            <a className="next" onClick={nextSlide}>&#10095;</a>
        </div>
    );
};

export default Slider;