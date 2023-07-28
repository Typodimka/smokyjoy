// Modal.tsx
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const ModalClient: React.FC = () => {
    const [open, setOpen] = React.useState(true);


    const handleClose = () => {
        setOpen(false);
    };

    return (
            <Dialog
            open={open}>
            <DialogTitle id="alert-dialog-title">
                <div className={'dialog_title'}>
                    <h2>SMOKYJOY</h2>
                    <h2>18+</h2>
                </div>
            </DialogTitle>
            <DialogContent>
                <div className={'modal_text'}>
                    <h3 >Для доступа к сайту необходимо подтвердить возраст</h3>
                    <p >Информация на данном сайте не является рекламой, предназначена для ограниченного круга лиц, а именно для совершеннолетних потребителей табачной продукции, для предоставления им достоверной информации об основных потребительских свойствах и качественных характеристик табачной продукции и аксессуарах для курения (ст.10 Закона «О защите прав Потребителя»). Лицам, не достигшим совершеннолетия, пользование Сайтом запрещено (ст. 20 ФЗ №15 «Об охране здоровья граждан»).
                    </p>
                </div>

            </DialogContent>
                <div className={'modal_buttons'}>
                    <button onClick={handleClose} type={"submit"} className={'button_modal button_modal_active'}>Мне есть 18 лет</button>
                    <button  type={"submit"} className={'button_modal button_modal_close'}>
                        Мне нет 18 лет
                    </button>
                </div>


        </Dialog>

    );
};

export default ModalClient;