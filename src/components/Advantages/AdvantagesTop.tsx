import React from "react";

export const AdvantagesTop = () => {
    return(
        <div className={'advantages'} id={'delivery'}>
            <div className={'advantages_top'}>
                <div className={'payment'}>
                    <h2>Доставка и оплата</h2>
                    <p>Оплата на Р/с по договору. Доставка осуществляется <br/>наемным транспортом или ТК на усмотрение клиента.</p>
                </div>

                <div className={'advantages_top_email'}>
                    <h3>Получить оптовый лист</h3>
                    <p>Оставьте заявку и мы вышлем вам подробный прайс <br/>с ценами на уголь для кальяна из ореховой скурлупы</p>
                    <form action="">
                        <input type="email" placeholder={'Email*'}
                        />
                        <br/>
                        <button type={'submit'}>Оставить заявку</button>
                    </form>

                </div>
            </div>

        </div>

    )
}