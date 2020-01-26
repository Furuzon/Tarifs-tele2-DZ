import React from 'react'
import Tarifs from './components/Tarifs'
import Paragraph from './components/Paragraph'
export default function App() {
    
    const productInfo = [
        {name: 'Мой онлайн+',  price: 700, priceList: 'месяц', infoMinute: 800, infoText: "на остальные номера России", trafic: 30 },
        {name: 'Везде онлайн',  price: 500, priceList: 'день', infoMinute: 500, infoText: "на остальные номера России", trafic: 40 },
        {name: 'Мой онлайн',  price: 400, priceList: 'месяц', infoMinute: 500, infoText: "на остальные номера России", trafic: 15 },
        {name: 'Мой разговор',  price: 200, priceList: 'месяц', infoMinute: 200, infoText: "на остальные номера России", trafic: 2 },
        {name: 'Мой Tele2',  price: 7, priceList: 'день',  infoText: "", trafic: 5 },
      ];


    return (
        <div className="hanter">
            <Paragraph/>
            <Tarifs name={productInfo[0].name} price={productInfo[0].price} priceList={productInfo[0].priceList} infoMinute={productInfo[0].infoMinute} infoText={productInfo[0].infoText} trafic={productInfo[0].trafic}/>
            <Tarifs name={productInfo[1].name} price={productInfo[1].price} priceList={productInfo[1].priceList} infoMinute={productInfo[1].infoMinute} infoText={productInfo[1].infoText} trafic={productInfo[1].trafic}/>
            <Tarifs name={productInfo[2].name} price={productInfo[2].price} priceList={productInfo[2].priceList} infoMinute={productInfo[2].infoMinute} infoText={productInfo[2].infoText} trafic={productInfo[2].trafic}/>
            <Tarifs name={productInfo[3].name} price={productInfo[3].price} priceList={productInfo[3].priceList} infoMinute={productInfo[3].infoMinute} infoText={productInfo[3].infoText} trafic={productInfo[3].trafic}/>
            <Tarifs name={productInfo[4].name} price={productInfo[4].price} priceList={productInfo[4].priceList}  infoText={productInfo[4].infoText} trafic={productInfo[4].trafic}/>
        </div>
     
    )
}
