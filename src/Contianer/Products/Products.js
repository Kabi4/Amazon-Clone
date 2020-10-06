import React, { Component } from 'react'

import classes from './Products.css';

import p1 from './../../Assets/Photos/Product1.jpg';
import p2 from './../../Assets/Photos/Product2.jpg';
import p3 from './../../Assets/Photos/Product3.jpg';
import p4 from './../../Assets/Photos/Product4.jpg';
import p5 from './../../Assets/Photos/Product5.jpg';
import p6 from './../../Assets/Photos/Product6.jpg';

import Product from '../../Components/Product/HomeProduct/Product';

export default class Products extends Component {
    render() {
        return (
            <div className={classes.products}>
                <div className={classes.products__row}>
                    <Product source={p1} id="ED3GAG" name="Echo Dot (3rd Gen) – Smart speaker with Alexa (Grey)" rating={4.3} price="₹4,499" />
                    <Product source={p3} id="OPN5GO" name="OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage)" rating={4} price="₹27,999" />
                </div>
                <div className={classes.products__row}>
                    <Product source={p2} id="BR255W" name="boAt Rockerz 255 Sports Wireless Headset with Super Extra Bass, IPX5 Water & Sweat Resistance, Qualcomm Chipset and Up to 6H Playback (Solid Black)" rating={4.6} price="₹1,499" />
                    <Product source={p6} id="LGHFWG" name="Logitech G 402 Hyperion Fury Wired Gaming Mouse, 4,000 DPI, Lightweight, 8 Programmable Buttons, Compatible with PC/Mac - Black" rating={4.5} price="₹2,345" />
                    <Product source={p4} id="AWSWHI" name="Attire White Smart watch phone 01A Smartwatch  (White Strap)" rating={3} price="₹899" />
                </div>
                <div className={classes.products__row}>
                    <Product source={p5} id="MITV80" name="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver" rating={3.5} price="₹13,499" />
                </div>
            </div>
        )
    }
};
