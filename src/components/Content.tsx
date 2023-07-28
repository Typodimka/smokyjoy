import React, {SyntheticEvent, useState} from "react";

export const Content = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                console.log('Письмо успешно отправлено!');
            } else {
                console.log('Произошла ошибка при отправке письма.');
            }
        } catch (error) {
            console.log('Произошла ошибка при отправке письма:', error);
        }
    };

    return(
        <div className={'content'}>
            <div className={'container content_center'} >
                <div className={'content_text'}>
                    <h1 >Экологичный уголь для кальяна из <br/>
                        ореховой скорлупы с доставкой <br/>
                        по России и СНГ</h1>
                    <p>
                        Прямые поставки угля для кальяна от производителя<br/>
                        на территории РФ. <br/>
                        100% органический продукт с высокой жароотдачей.
                    </p>
                </div>

                <form className={'form'} onSubmit={handleSubmit}>
                    <h3>Получить оптовый прайс</h3>
                    <p>Оставьте заявку и мы отправим вам оптовый прайс на продукцию</p>
                    <div className={'form_input'} >
                        <p >Имя*</p>
                        <input type="text" placeholder={'Иван'}/>
                    </div>

                    <br />
                    <div className={'form_input'}>
                        <p>Номер телефон*</p>
                        <input type="tel" placeholder={'+79997772244'}/>
                    </div>

                    <br />
                    <div className={'form_input'}>
                        <p >Email*</p>
                        <input type="email" placeholder={'ivanov@mail.ru'}/>
                    </div>

                    <br />
                    <button type={'submit'}>
                        Отправить
                    </button>

                </form>





            </div>



        </div>
    )
}