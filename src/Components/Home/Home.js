import React from 'react'
import Product from '../Product/Product'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img
            className="home__image"
            alt="product"
            src="https://images-na.ssl-images-amazon.com/images/G/33/kindle/journeys/NzYwZDRmZWEt/NzYwZDRmZWEt-M2JiMjFkOGMt-w1500._CB418716744_.jpg"
            />

            <div className="home__row">
                <Product
                id="1"
                title="Cámara cannon 1era Generación 3 lentes, obturador 5 dimensiones, 4 high end resolutions"
                image="https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512"
                price={3500}
                rating={5}
                />
                <Product
                id="2"
                title="Cable adaptador USB C a HDMI 4K, WAVLINK USB tipo C (compatible con Thunderbolt 3) a HDMI para Samsung Galaxy S10/S9/S8/Note 8/9, MacBook Pro/MacBook"
                image="https://images-na.ssl-images-amazon.com/images/I/51ijmmd-xSL._AC_SL1000_.jpg"
                price={150}
                rating={5}
                />
            </div>

            <div className="home__row">
                <Product
                id="3"
                title="Monitor BenQ Gamer 28 pulgadas 4K HDR  (EL2870U), Tiempo de respuesta 1ms, UHD, Panel TN, Free-Sync, Eye-Care, Anti reflejante, Brightness Intelligence Plus, HDMI, DP, Bocinas integradas"
                image="https://images-na.ssl-images-amazon.com/images/I/61nUa9LW4WL._AC_SL1000_.jpg"
                price={8500}
                rating={5}
                />
                <Product
                id="4"
                title="Asus Laptop Gamer TUF 15.6', GeForce GTX 1650, Core i5 9300H, 8GB RAM, 512 GB SSD, FX505GT-BQ018T"
                image="https://images-na.ssl-images-amazon.com/images/I/819aV%2BAvCmL._AC_SL1500_.jpg"
                price={25000}
                rating={5}
                />
                <Product
                id="5"
                title="AVEDISTANTE Webcam con Micrófono, Webcam PC 1080P Cámara Web de Alta Definiciócon Reductor de Ruido y corrección de iluminación automática Web CAM de USB Plug and Play"
                image="https://images-na.ssl-images-amazon.com/images/I/61bNG0TriML._AC_SL1454_.jpg"
                price={318}
                rating={3}
                />
            </div>

            <div className="home__row">
                <Product
                id="6"
                title="Control Alámbrico para Xbox One"
                image="https://images-na.ssl-images-amazon.com/images/I/51WqEaZn10L._AC_SL1200_.jpg"
                price={914.23}
                rating={3}
                />
            </div>
        </div>
    )
}

export default Home
