import React from "react";
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
                        <img src="/img/icon/ecology.png" alt=""/>
                        <p>Экологически чистый продукт</p>
                    </div>
                    <div>
                        <img src="/img/icon/packaging.png" alt=""/>
                        <p>Удобные варианты фасовки</p>
                    </div>
                    <div>
                        <img src="/img/icon/form.png" alt=""/>
                        <p>Идеальная форма и плотность</p>
                    </div>

                    <div>
                        <img src="/img/icon/fire.png" alt=""/>
                        <p>Отличная жароотдача</p>
                    </div>

                    <div>
                        <img src="/img/icon/smells.png" alt=""/>
                        <p>Отсутствие запахов</p>
                    </div>

                </div>
            </div>


            <div className={"catalog_production"} id={'catalog'}>
                <h1 >Каталог продукции</h1>
                <div className={'container catalog_image '}>
                    <div className={'catalog_image_cart'}>
                        <img src='./img/catalog1.svg' alt=""/>
                        <p>Zip-пfкет 1кг.</p>
                    </div>

                    <div className={'catalog_image_cart'}>
                        <img src="./img/catalog2.svg" alt=""/>
                        <p>Шоу бокс 36 стиков по 6 шт. (216 шт.)</p>
                    </div>


                </div>
            </div>
        </div>
    )
}