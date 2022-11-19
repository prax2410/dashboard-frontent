import React, { useState } from "react";

import Cake from '../../assets/cake.png';
import './step2.css';

const Step2 = props => {
    const [selectedChoice, setSelectedChoice] = useState("");

    if (props.currentStep !== 2) {
        return null;
    }

    const handleClick = e => {
        if (!e.target.checked) {
            setSelectedChoice(selectedChoice.filter((name) => name !== e.target.value));
        } else {
            setSelectedChoice(selectedChoice.concat(e.target.value));
        }
    };

    return (
        <>
            <div className="step-one--container">
                <label>Choose the Product <span className="step-one--header-span">{"(Step 2 of 4)"}</span></label>
                <hr />
                <div className="step-one--options-grid">
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="product"
                                id="blueberryCakeWithRawToppings"
                                value="Blueberry cake with raw toppings"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <img className="step-two--image" src={Cake} alt='Cake' />
                                <div>
                                    <p><strong>Blueberry cake with raw toppings</strong></p>
                                    <p>Rs: 2290</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="product"
                                id="chocolateTruffleCake"
                                value="Chocolate truffle cake"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <img className="step-two--image" src={Cake} alt='Cake' />
                                <div>
                                    <p><strong>Chocolate truffle cake</strong></p>
                                    <p>Rs: 2190</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="product"
                                id="browineCakeFluffyCream"
                                value="Browine cake with fluffy cream"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <img className="step-two--image" src={Cake} alt='Cake' />
                                <div>
                                    <p><strong>Browine cake with fluffy cream</strong></p>
                                    <p>Rs: 1222</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="product"
                                id="ferroRocherCake"
                                value="Ferro rocher cake"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <img className="step-two--image" src={Cake} alt='Cake' />
                                <div>
                                    <p><strong>Ferro rocher cake</strong></p>
                                    <p>Rs: 1234</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="product"
                                id="custurdMixedWithFruitCake"
                                value="Custurd mixed with fruit cake"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <img className="step-two--image" src={Cake} alt='Cake' />
                                <div>
                                    <p><strong>Custurd mixed with fruit cake</strong></p>
                                    <p>Rs: 2456</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="product"
                                id="bestRawToppingChocoCake"
                                value="Best raw topping choco cake"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <img className="step-two--image" src={Cake} alt='Cake' />
                                <div>
                                    <p><strong>Best raw topping choco cake</strong></p>
                                    <p>Rs: 2345</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="product"
                                id="greenCupCakes"
                                value="Green cup cakes"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <img className="step-two--image" src={Cake} alt='Cake' />
                                <div>
                                    <p><strong>Green cup cakes</strong></p>
                                    <p>Rs: 1234</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="product"
                                id="blueberryToppingCakes"
                                value="Blueberry topping cakes"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <img className="step-two--image" src={Cake} alt='Cake' />
                                <div>
                                    <p><strong>Blueberry topping cakes</strong></p>
                                    <p>Rs: 2456</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="step-one--options">
                        <label>
                            <input
                                type="radio"
                                name="product"
                                id="strawberryCakesWithBlueberry"
                                value="Stawberry cakes with blueberry"
                                onClick={(e) => handleClick(e)}
                                onChange={props.handleChange}
                            />
                            <span className="step-one--options-span">
                                <img className="step-two--image" src={Cake} alt='Cake' />
                                <div>
                                    <p><strong>Stawberry cakes with blueberry</strong></p>
                                    <p>Rs: 2345</p>
                                </div>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step2;
