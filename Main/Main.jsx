import React, {useEffect}from 'react'
import './main.css'

// import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'


// import the image so we dont have this error on the browser
import img from '../../Assets/img1.jpg'
import img2 from '../../Assets/imgs.jpg'
import img3 from '../../Assets/img3s.jpg'
import img4 from '../../Assets/img4s.jpg'
import img5 from '../../Assets/img5s.jpg'
import img6 from '../../Assets/img6s.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8s.jpg'
import img9 from '../../Assets/img9s.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'


// The array named data

const Data = [
    {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    Location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },

     {
         id:2,
         imgSrc: img2,
         destTitle: 'Machu Picchu',
         Location: 'Peru',
         grade: 'CULTURAL RELAX',
         fees: '$600',
         description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular. '
     },

     {
         id:3,
        imgSrc: img3,
         destTitle: 'Great Barrier Reef',
         Location: 'Australia',
         grade: 'CULTURAL RELAX',
         fees: '$700',
         description:'One of the most remarable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place'
     },

    {
         id:4,
         imgSrc: img4,
         destTitle: 'Cappadocia',
         Location: 'Turkey',
         grade: 'CULTURAL RELAX',
         fees: '$800',
         description:'According to the Worls Tourisn Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities.'
     },

     {
         id:5,
         imgSrc: img5,
         destTitle: 'Guanajuato',
         Location: 'Mexico',
         grade: 'CULTURAL RELAX',
         fees: '$1100',
         description:'A city in central Maxico, GuanaJuato is known for its history of silver minig and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'
     },

     {
         id:6,
         imgSrc: img6,
         destTitle: 'Cinque Terre',
         Location: 'Italy',
         grade: 'CULTURAL RELAX',
         fees: '$840',
         description:'The vibrant hues of the houses are its banchmarks and explain the beaty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!'
     },
    
     {
         id:7,
         imgSrc: img7,
         destTitle: 'Angkar Wat',
         Location: 'Cambodia',
         grade: 'CULTURAL RELAX',
         fees: '$700',
         description:'Angkot wat represents the entire range of Art.'
     },

     {
         id:8,
         imgSrc: img8,
         destTitle: 'Taj Mahal',
         Location: 'India',
         grade: 'CULTURAL RELAX',
         fees: '$900',
         description:'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and sdventurous activities. '
     },

     {
         id:9,
         imgSrc: img9,
         destTitle: 'Bali Island',
         Location: 'Indonesia',
         grade: 'CULTURAL RELAX',
         fees: '$500',
         description:'Bali is an Indonesian Island and one of the best holiday destinations.'
     },
]


const Main = () => {

        // Lets create a react hooks to add a scroll animation....
        useEffect(() =>{
            Aos.init({duration: 900})
        }, [])

  return (
    <section className="main container section">

        <div className="secTitle">
            <h3 dataa-aos="fade-right"></h3>
            <h3 className="title">
                Most visited destinations
            </h3>
        </div>

        <div className="secContent grid">
            {/* Here we are going to use high ordfer array method(map).
            to do that we shall use a list object in one array. I'm going to
            create an array named data and from that we shall .map() array to 
            fetch each destination at once. I hope this will make sence to you! 
            */}

         {
            Data.map(({id, imgSrc, destTitle, Location, grade, fees, description}) =>{
                return(
                    <div key = {id}
                     data-aos="fade-up"
                      className="singleDestination">
                       {/* Here it will return single id from the mao array*/}

                       <div className="imageDiv">
                        <img src={imgSrc} alt={destTitle}/>
                       </div>

                        <div className="cardInfo">
                           <h4 className="destTitle">{destTitle}</h4>
                           <span className="continent flex">
                            <HiOutlineLocationMarker className="icon"/>
                            <span className="name">{Location}</span>
                           </span>

                           <div className="fees flex">
                            <div className="grade">
                                <span>{grade}<small>+1</small></span>
                            </div>
                            <div className="price">
                                <h5>{fees}</h5>
                            </div>
                            </div>

                            <div className="desc">
                                <p>{description}</p>
                            </div>

                            <button className="btn flex">
                                DETAILS<HiOutlineClipboardCheck className="icon"/>
                            </button>
                        </div>
                       
                    </div>   
                    )
                })

            }
        </div>
    
       

    </section>
  )
}

export default Main
