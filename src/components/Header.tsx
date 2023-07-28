import React from "react";



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
                        <img src="img/vk.svg" alt="VK" title="VK"/>
                    </a>
                    <a href="https://t.me/smokyjoy63">
                        <img src="img/tg.png" alt="Telegram" title="Telegram"/>
                    </a>

                    <a href="viber://chat?number=79093437111">
                        <img src="img/viber.svg" alt="viber" title="Viber"/>
                    </a>

                    <a href="https://wa.me/79093437111">
                        <img src="img/watsapp.svg" alt="whatsapp" title="Whatsapp "/>
                    </a>

                </div>
                <a href="tel:+79030286080" className={'number'}><img src="img/tel.svg" alt=""/></a>
                <div className={'adress'}>
                    <a href="tel:+79093437111">+79093437111</a>
                    <p>г.Липецк, ул.9 мая, д.14а</p>
                </div>
            </div>






        </header>
    )
}
