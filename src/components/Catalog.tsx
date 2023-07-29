import React from "react";

import eco from '../assets/img/icon/ecology.png'
import pack from '../assets/img/icon/packaging.png'
import form from '../assets/img/icon/form.png'
import fire from '../assets/img/icon/fire.png'
import smells from '../assets/img/icon/smells.png'

import catalog1 from '../assets/img/catalog1.svg'
import catalog2 from '../assets/img/catalog2.svg'


export const Catalog = () => {
    return(
        <div className={'catalog'}>
            <div className={'container'} id={'advantages'}>
                <h2>Уголь для кальяна SMOKYJOY - ЭТО:</h2>
                <p>Уголь, являющийся 100% органическим продуктом без токсичных соеденений. <br/>
                    Наша команда квалифицированных сотрудников долго занималась рпазработкой для кальяна, который будет альтернативой кокосовому без
                    <br/>потери качества, сохранив при этом все свои преимущества.
                    <br/>В результате был рожден новый продукт Smokyjoy.</p>

                <div className={'advantages_icon'}>
                    <div>
                        <img src={`${eco}`} alt=""/>
                        <p>Экологически чистый продукт</p>
                    </div>
                    <div>
                        <img src={`${pack}`} alt=""/>
                        <p>Удобные варианты фасовки</p>
                    </div>
                    <div>
                        <img src={`${form}`} alt=""/>
                        <p>Идеальная форма и плотность</p>
                    </div>

                    <div>
                        <img src={`${fire}`} alt=""/>
                        <p>Отличная жароотдача</p>
                    </div>

                    <div>
                        <img src={`${smells}`} alt=""/>
                        <p>Отсутствие запахов</p>
                    </div>

                </div>
            </div>


            <div className={"catalog_production"} id={'catalog'}>
                <h1 >Каталог продукции</h1>
                <div className={'container catalog_image '}>
                    <div className={'catalog_image_cart'}>
                        <img src={`${catalog1}`} alt=""/>
                        <p>Zip-пакет 1кг.</p>
                    </div>

                    <div className={'catalog_image_cart'}>
                        <img src={`${catalog2}`} alt=""/>
                        <p>Шоу бокс 36 стиков по 6 шт. (216 шт.)</p>
                    </div>


                </div>
            </div>
        </div>
    )
}