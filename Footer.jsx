import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video(2).mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore } from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

        // Lets create a react hooks to add a scroll animation....
        useEffect(() =>{
            Aos.init({duration: 2000})
        }, [])


  return (
    <section className="footer">
        <div className="videoDiv">
            <video src={video2} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className="secContent container">
            <div className="contactDiv flex">
                <div 
                data-aos="fade-up" 
                className="text">
                <small>KEEP IN TOUCH</small>
                <h2>Travel with us</h2>
                </div>

              <div className="inputDiv flex">
              <input data-aos="fade-up" 
              type="text" placeholder="Enter Email Address"/>
              <button data-aos="fade-up" 
              className="btn flex" type="submit">
                SEND<FiSend className="icon"/>
              </button>
              </div>
            </div>

            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#" className="logo flex">
                            <MdOutlineTravelExplore className="icon"/> Travel.
                        </a>
                    </div>

                    <div data-aos="fade-up" 
                    className="footerparagraph">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo enim cumque earum commodi error 
                      voluptatum fuga numquam delectus! Id molestias, dolores voluptas at
                    totam neque numquam accusantium repellat corrupti minima?
                    </div>

                    <div data-aos="fade-up" 
                    className="footerSocials">
                        <AiOutlineTwitter className="icon"/>
                        <AiFillYoutube className="icon"/>
                        <AiFillInstagram className="icon"/>
                        <FaTripadvisor className="icon"/>
                    </div>

                </div>

                {/* group one */}
                <div className="footerLinks grid">
                    <div data-aos="fade-up" 
                    data-aos-duration="3000"
                    className="linkGroup">
                        <span className="groupTitle">
                          OUR AGENCY  
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Services
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Insurance
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Agency
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Tourism
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Payment
                        </li>

                    </div>

                    {/* group two */}

                    <div className="linkGroup">
                        <span data-aos="fade-up" 
                        data-aos-duration="3000"
                        className="groupTitle">
                         PARTNERS
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Booking
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Rentcars
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            HostelWorlds
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Trivago
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            TripAdvisor
                        </li>

                    </div>

                    {/* group three */}

                    <div data-aos="fade-up" 
                    data-aos-duration="3000"
                    className="linkGroup">
                        <span className="groupTitle">
                          LAST MINUTE  
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Landon
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            California
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Indonesia
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Europe
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Oceania
                        </li>

                    </div>


                </div>

                <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE THEME</small>
                    <small>COPYRIGHTS RESERVID - INRATECH 2022</small>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
