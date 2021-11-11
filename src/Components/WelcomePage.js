import React from 'react';
import "../SCSS/WelcomePage.scss"
import Box from "./Box";

const WelcomePage = () => {
    return <>
        <div className={"welcomePage"}>
            <div className={"welcomePage__boxes"}>
                <Box text={"Większość rezerwacji można odwołać lub zmienić bezpłatnie do 48 godzin przed odbiorem samochodu."} title={"Elastyczne zasady wynajmu"} icon={"far fa-edit"} />
                <Box text={"Wiesz dokładnie, ile płacisz."} title={"Bez ukrytych opłat"} icon={"fas fa-search"} />
                <Box text={"Znalazłeś taką samą ofertę za mniej? Wyrównamy różnicę w cenie"} title={"Gwarancja ceny"} icon={"fas fa-hand-holding-usd"} />
            </div>
        </div>
    </>
};

export default WelcomePage;