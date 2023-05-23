import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnswerForm from "./answer-form";

// slickNext method goes to next slide 
// slickGoTo(index=null, dontAnimage=false) goes to slide index

const PlayerDeck = ({ onSubmit, value, onChange }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="container">
            <Slider id="slider" {...settings}>
                <AnswerForm 
                    // textKey={'t1'}
                    // submitKey={'s1'}
                    onSubmit={onSubmit}
                    value={value}
                    onChange={onChange}
                />

                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    )
}

export default PlayerDeck