import React from 'react';
import Button from '../Button/Button';
import './box-detail.scss';
import btnBack from '../../assets/images/btn_back1.png';
import priceIcon from '../../assets/images/price_icon.png';
import btnBuy from '../../assets/images/btn_buy.png';
import arrowBtn from '../../assets/images/arrow_btn.png';

export default function BoxDetail() {
    return (
        <div className="box-detail">
            <div className="box-detail__left">
                <Button backgroundImage={btnBack} className="box-detail__left__btn">
                    BACK
                </Button>
                <div className="box-detail__left__item">
                    <div className="box-detail__left__item__title">PLATINUM BOX # 1957</div>
                    <div className="box-detail__left__item__order">ORDER 1895</div>
                    <div className="box-detail__left__item__img"></div>
                </div>
            </div>
            <div className="box-detail__right">
                <div className="box-detail__right__item">
                    <div className="box-detail__right__item__content">
                        <div className="box-detail__right__item__content__buy">
                            <div className="buy__price">
                                <div className="buy__price__title">PRICE</div>
                                <div className="buy__price__number">
                                    <span>0.05</span>
                                    <img src={priceIcon} alt="" />
                                </div>
                            </div>
                            <Button backgroundImage={btnBuy} className="btn_buy">
                                BUY NOW
                            </Button>
                        </div>
                        <div className="box-detail__right__item__content__detail">
                            <div className="detail__title">
                                <img src={arrowBtn} alt="" />
                                <span>DETAIL</span>
                            </div>
                            <div className="detail__content">
                                <div className="detail__content__left">
                                    <div className="detail__content__title">- START DATE</div>
                                    <div className="detail__content__desc">March 02, 2022 13:38</div>
                                    <div className="detail__content__desc yellow">TXID: 0x2949...be175f6</div>
                                    <div className="detail__content__title">- END IN</div>
                                    <div className="detail__content__desc yellow">14d 11h 37m</div>
                                </div>
                                <div className="detail__content__right">
                                    <div className="detail__content__title">- BIDDER</div>
                                    <div className="detail__content__desc">No current bidder</div>
                                </div>
                            </div>
                        </div>
                        <div className="box-detail__right__item__content__about">
                            <div className="detail__title">
                                <img src={arrowBtn} alt="" />
                                <span>ABOUT</span>
                            </div>
                            <div className="detail__content">
                                <div className="detail__content__left">
                                    <div className="detail__content__title">- OWENER</div>
                                    <div className="detail__content__desc">0xceF...D018F6</div>
                                    <div className="detail__content__desc blue">Metamask: 0xceF...D018F6</div>
                                </div>
                                <div className="detail__content__right">
                                    <div className="detail__content__title">- DATE CREATED</div>
                                    <div className="detail__content__desc">--:--</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
