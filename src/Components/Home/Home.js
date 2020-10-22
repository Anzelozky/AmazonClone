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
                price={25}
                rating={3}
                />
                <Product
                id="1"
                title="Cámara cannon 1era Generación 3 lentes, obturador 5 dimensiones"
                image="https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512"
                price={25}
                rating={3}
                />
            </div>

            <div className="home__row">
                <Product
                id="1"
                title="Cámara cannon 1era Generación 3 lentes, obturador 5 dimensiones"
                image="https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512"
                price={25}
                rating={3}
                />
                <Product
                id="1"
                title="Cámara cannon 1era Generación 3 lentes, obturador 5 dimensiones"
                image="https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512"
                price={25}
                rating={3}
                />
                <Product
                id="1"
                title="Cámara cannon 1era Generación 3 lentes, obturador 5 dimensiones"
                image="https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512"
                price={25}
                rating={3}
                />
            </div>

            <div className="home__row">
                <Product
                id="1"
                title="Cámara cannon 1era Generación 3 lentes, obturador 5 dimensiones"
                image="https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512"
                price={25}
                rating={3}
                />
            </div>
        </div>
    )
}

export default Home
