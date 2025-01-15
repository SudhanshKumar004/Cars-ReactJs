import plogo from './assets/porschelogo.png'
import turbo from './assets/911ts.png'
import gt3 from './assets/gt3.png'
import car from './assets/718.png'
import flogo from './assets/flogo.png'
import puro from './assets/puro.jpeg'
import roma from './assets/roma.jpeg'
import gtb from './assets/296.jpeg'
import lambo from './assets/lambo.png'
import urus from './assets/urus.png'
import rev from './assets/rev.jpeg'
import huracan from './assets/huracan.png'
import './Cards.css'
import { useNavigate } from 'react-router-dom'
const Cards = () =>{

    let nav = useNavigate()
    function bookit()
    {
        nav('/book')
    }

    return(
        <>
        <img className='plogo' src={plogo}  />
        <div className="cards1">
            <div className='card1'>
                <img src={turbo} />
                <hr />
                <h1>Porsche 911 Turbo S</h1>
                <p>Fast and Furious with turbo engine with raw power</p>
                <h2>3.35 Cr</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
            <div className='card1'>
                <img src={gt3} />
                <hr />
                <h1>Porsche 911 GT3 RS</h1>
                <p>Track Beast made for tricky tracks with unreal aerodynamics</p>
                <h2>3.51 Cr</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
            <div className='card1'>
                <img src={car} />
                <hr />
                <h1>Porsche 718 Boxter</h1>
                <p>A Convertable car with great power and lot of fun</p>
                <h2>2.74 Cr</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
        </div>



        <img  className="flogo" src={flogo} />
        <div className="cards1">
            <div className='card1'>
                <img src={puro} />
                <hr />
                <h1>Ferrari Purosangue</h1>
                <p>Fast and Furious with turbo engine with raw power</p>
                <h2>10.50 Cr</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
            <div className='card1'>
                <img src={roma} />
                <hr />
                <h1>Ferrari Roma</h1>
                <p>Track Beast made for tricky tracks with unreal aerodynamics</p>
                <h2>3.76 Cr</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
            <div className='card1'>
                <img src={gtb} />
                <hr />
                <h1>Ferrari 296 GTB</h1>
                <p>A Convertable car with great power and lot of fun</p>
                <h2>5.40 Cr</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
        </div>


        <img  className="llogo" src={lambo} />
        <div className="cards1">
            <div className='card1'>
                <img src={urus} />
                <hr />
                <h1>Lamborghini Urus</h1>
                <p>Fast and Furious with turbo engine with raw power</p>
                <h2>4.57 Cr</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
            <div className='card1'>
                <img src={rev} />
                <hr />
                <h1>Lamborghini revuelto</h1>
                <p>Track Beast made for tricky tracks with unreal aerodynamics</p>
                <h2>8.89 Cr</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
            <div className='card1'>
                <img src={huracan} />
                <hr />
                <h1>Lamborghini Huracan</h1>
                <p>A Convertable car with great power and lot of fun</p>
                <h2>3.22 Cr</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
        </div>
        </>
    )
}

export default Cards