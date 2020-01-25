import React from 'react'
import Tarifs from './components/Tarifs'
import Paragraph from './components/Paragraph'
export default function App() {
  
    return (
        <div className="hanter">
            <Paragraph/>
            <Tarifs name="Мой онлайн+" price="700" priceList="месяц" infoMinute="800" infoText="на остальные номера России" trafic="30"/>
            <Tarifs name="Везде онлайн" price="500" priceList="день" infoMinute="500" infoText="на остальные номера России" trafic="40"/>
            <Tarifs name="Мой онлайн" price="400" priceList="месяц" infoMinute="500" infoText="на остальные номера России" trafic="15"/>
            <Tarifs name="Мой разговор" price="200" priceList="месяц" infoMinute="200" infoText="на остальные номера России" trafic="2"/>
            <Tarifs name="Мой Tele2" price="7" priceList="день"  infoText="" trafic="5"/>
        </div>
     
    )
}
