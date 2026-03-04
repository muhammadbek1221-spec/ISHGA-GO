import React from 'react'
import './App.css'

export default function () {
    return (
        <div className='father'>
            <div className="boy1">
                <h1>
                    Хотите бесплатную консультацию? <br />Оставляйте заявку
                </h1>
                <p className='said'>Оставляйте заявку и наши менеджеры свяжутся с <br /> Вами в ближайшее время </p>
            </div>


            <div className="boy2">
                <div className="kid1">
                    <p className='said'>Ваше имя</p>
                    <input type="text" placeholder='Сергей ' />
                </div>

                <div className="kid2">
                    <p className='said'>Ваш телефон</p>
                    <input type="text" placeholder='Ваш телефон' />
                </div>

                <div className="kid3">
                    <p className='said'>Ваш e-mail</p>
                    <input type="text" placeholder='Ваш e-mail' />
                </div>

                <div className="kid4">
                    <div className="saidyaramas1">
                        <p>Нажимая кнопку вы даете согласие на обработку персональных <br /> данных в соответствии с <span>политикой конфиденциальности</span></p>
                    </div>

                    <div className="saidyaramas2">
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
