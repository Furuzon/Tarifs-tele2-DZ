import React from 'react'


export default function Tarifs(props) {
    return (
            <div className="product-card">
                <div className="tariff-title">
                    <span>{props.name}</span>
                </div>
                <div className="price-wrap">
                    <span>{props.price}</span>
                    <div className="price-list">
                        <p>P</p>
                        <h4>/{props.priceList}</h4>
                    </div>
                </div>
                <div className="info-wrap">
                    <p><strong>безлимит</strong> на Tele2 <br/>России</p>
                    <p><strong>{props.infoMinute}</strong> мин <br/>{props.infoText}</p>
                    <p><strong>{props.trafic}</strong> ГБ интернета</p>
                </div>
                <div className="card-buttons">
                    <p className="btn">Купить SIM</p>
                </div>
            </div>
    )
}
