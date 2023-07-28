import React from "react";

export const AdvantagesBottom = () => {


    return(
        <div className={'advantages_bottom'} id={'contact'}>
            <div className={'contacts'}>
                <h2>Контакты</h2>
                <p>Офис работает с 8 утра до 8 вечера, <br/>Без выходных.</p>

                <p><b>Адрес:</b> Липецк, ул. 9 мая, д. 144</p>
                <hr/>

                <p><b>Телефон:</b> <a href="tel:+79093437111" > +79093437111</a></p>
                <hr/>

                <p><b>Email:</b> smokyjoy@bk.ru</p>
                <hr/>


            </div>
            <div className={'map'}>
                <div  dangerouslySetInnerHTML={{ __html: '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Acb53864531cb35f1d45069f148947e23117d7e3f3ab37218131cd6860b4810cf&amp;source=constructor" width="100%" height="300" frameborder="0"></iframe>' }} />
            </div>



        </div>

    )
}