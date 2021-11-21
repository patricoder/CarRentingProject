import React from 'react';
import "../SCSS/WelcomePage.scss"
import Box from "./Box";
import Slider from "./Slider";

const WelcomePage = () => {
    return <>
        <Slider/>
        <div className={"welcomePage "}>
            <div className={"welcomePage__boxes container"}>
                <Box
                    text={"Większość rezerwacji można odwołać lub zmienić bezpłatnie do 48 godzin przed odbiorem samochodu."}
                    title={"Elastyczne zasady wynajmu"} icon={"far fa-edit"}/>
                <Box text={"Wiesz dokładnie, ile płacisz."} title={"Bez ukrytych opłat"} icon={"fas fa-search"}/>
                <Box text={"Znalazłeś taką samą ofertę za mniej? Wyrównamy różnicę w cenie"} title={"Gwarancja ceny"}
                     icon={"fas fa-hand-holding-usd"}/>
            </div>
        </div>

        <div className={'welcomePage__newsletter'}>
            <div className={"container newsletter"}>
                <div className={'newsletter__title'}>
                    Sign up for our newsletter
                </div>
                <div className={'newsletter__form'}>
                    <form>
                        <input type={'text'}/>
                        <button>Sign up</button>
                    </form>
                </div>
            </div>

        </div>
    </>
};

export default WelcomePage;