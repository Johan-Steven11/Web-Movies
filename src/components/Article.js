import React from "react";
import '../sass/main.scss';
import Shoping from "./Shoping";
import ReactImageMagnify from 'react-image-magnify';
import ReactImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTruck } from "@fortawesome/free-solid-svg-icons";

export default function Article() {
    const images = [
        {
            id : 1,
            original: "https://moviesshopco.vtexassets.com/arquivos/ids/175241-1600-1600?v=638315248171370000&width=1600&height=1600&aspect=true",
        },
        {
            id: 2,
            original: "https://moviesshopco.vtexassets.com/arquivos/ids/175244-1600-1600?v=638315249159770000&width=1600&height=1600&aspect=true",
        },
        {   id:  3,
            original: "https://moviesshopco.vtexassets.com/arquivos/ids/175245-1600-1600?v=638315249694500000&width=1600&height=1600&aspect=true",
         
        },
    ];
  
    function getContent(id) {
        for (var i = 0; i < images.length; i++) {
            if (images[i].id === id) {
                return images[i].original;
            }
        }
        return null
    }
    var id = 1;
    var image = getContent(id);
    return (
        <div className="ContentArticles">
            <article className="article">
                <div className="imgMain">
                    <ReactImageMagnify className="explorerimg" {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: image
                        },
                        largeImage: {
                            src: image,
                            width: 1000,
                            height: 2000
                        }
                    }} />
                    <div className="imgsecond">
                        <img src="https://moviesshopco.vtexassets.com/arquivos/ids/175246-1600-1600?v=638315249984970000&width=1600&height=1600&aspect=true" className="imgMain"></img>
                    </div>
                </div>
                <div style={{ width: "50vw", margin: "auto" }} className="slider">
                    <ReactImageGallery items={images}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showThumbnails={false}
                        className="sliders"
                    />
                    <p>
                        <FontAwesomeIcon icon={faTruck} /> Envio a toda Colombia <FontAwesomeIcon icon={faClock} /> Tiempo de entrega de 3 a 7 días hábiles.

                    </p>
                </div>
            </article>
            <aside className="Aside">
                <div>
                    <h3 className="TitleProd">
                        CAMISA GÉNERO NEUTRO DE LOS SIMPSON ROSADA MANGA CORTA
                    </h3><br />
                    <p>FOX Ref 237074-097120-M</p><br />
                    <p><span className="descuento"> $ 229.990</span> $160.993</p><br />
                    <p className="availability-count">¡Solo 6 unidades disponibles!</p>
                </div>
                <ul className="sizes-list">
                    <li>
                        <button className="select-size">S</button>
                    </li>
                    <li>
                        <button className="select-size">M</button>
                    </li>
                    <li>
                        <button className="select-size">L</button>
                    </li>
                    <li>
                        <button className="select-size">XL</button>
                    </li>
                    <li>
                        <a className="guide-sizes">Guía de tallas</a>
                    </li>
                </ul>
                <Shoping />
            </aside>
        </div>
    )

}
