import React from "react";

const Footer = ()=>{
    return(
        <div className={'footer'}>
         <div className="row">
             <div className={'col-6'}>
                 <h4>О Нас</h4>
                 <p className={'p'}>
                     В самом сердце Кракова расположилось уникальное кафе, которое стало истинным приютом для тех, кто ищет уюта и вдохновения. "Краковское Приютливое Кафе" приглашает своих гостей в атмосферу тепла и радушия, воплощенную в каждой детали интерьера и внимательном обслуживании.
                 </p>
             </div>
             <div className="col-6">

                 <nav>
                     <a href="#">Контакты</a>
                     <a href="#">Карта</a>
                     <a href="#">Отзывы</a>
                 </nav>
             </div>
         </div>
        </div>
    )
}
export default Footer