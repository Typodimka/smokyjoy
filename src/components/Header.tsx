import React from "react";
import vk from '../assets/img/vk.svg'
import tg from '../assets/img/tg.png'
import viber from '../assets/img/viber.svg'
import watsapp from '../assets/img/watsapp.svg'
import tel from '../assets/img/tel.svg'

export const Header = () => {


    return(
        <header className={'container header'}>

            <a href="/" className={'logo'}>SMOKYJOY</a>
            <div className={'navigation'}>
                <a href="#catalog">Каталог</a>
                <a href="#advantages">Преимущество угля</a>
                <a href="#delivery">Доставка</a>
                <a href="#contact">Контакты</a>
            </div>

            <div className={'contacts'}>
                <div className={'img_icon'}>
                    <a href="https://vk.com/smokyjoy163">
                        <img src={`${vk}`} alt="VK" title="VK"/>
                    </a>
                    <a href="https://t.me/smokyjoy63">
                        <img src={`${tg}`} alt="Telegram" title="Telegram"/>
                    </a>

                    <a href="viber://chat?number=79093437111">
                        <img src={`${viber}`} alt="viber" title="Viber"/>
                    </a>

                    <a href="https://wa.me/79093437111">
                        <img src={`${watsapp}`} alt="whatsapp" title="Whatsapp "/>
                    </a>

                </div>
                <a href="tel:+79030286080" className={'number'}><img src={`${tel}`} alt=""/></a>
                <div className={'adress'}>
                    <a href="tel:+79093437111">+79093437111</a>
                    <p>г.Липецк, ул.9 мая, д.14а</p>
                </div>
            </div>






        </header>
    )
}
