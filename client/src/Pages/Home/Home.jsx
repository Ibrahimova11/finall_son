import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios";
const Home = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
            axios
              .get("http://localhost:8080/api/nitros")
              .then((res) => setCards(res.data));
          }, []);
  return (
    <div>   
   <div className="body">
   <div  className="body__img">
   <div className="body__img__center">
    <div  className="body__name">
  <h1>WELCOME</h1>

   </div>
   <div  className="body__description">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio soluta eius error.</p>
   </div>
   <div  className="body__button">
    <button > Get In Touch</button>
   </div>
   </div>
   </div>
   


   </div>

<div className="section1">
    <div className="section1__head" >
        <h1>About Us</h1> 
    </div>

    </div>
    <div className="section1__box">
        <div className="section1__box__left">
          <img src="https://preview.colorlib.com/theme/nitro/images/hero_1.jpg"/>
        </div>
        <div className="section1__box__right">
            <h1>For the next great business</h1>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.</h6>
              <p>Officia quaerat eaque neque</p>
              <p>Officia quaerat eaque neque</p>
              <p>Officia quaerat eaque neque</p>
        </div>

        
    </div>


    <div className="section2">
    <div className="section2__head" >
        <h1>Our Team</h1> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
    </div>
   <div className="section2__box__container">
         <div className="section2__box__container__cards">
            <div className="section2__box__container__cards__img">
                <img src="https://preview.colorlib.com/theme/nitro/images/person_5.jpg"/>
            </div>
            <div className="section2__box__container__cards__name">
                <h1>Kaiara Spencer</h1>
                <p>PRODUCT MANAGER</p>
            </div>
            <div className="section2__box__container__cards__description"></div>
         </div>




         <div className="section2__box__container__cards">
            <div className="section2__box__container__cards__img">
                <img src="https://preview.colorlib.com/theme/nitro/images/person_5.jpg"/>
            </div>
            <div className="section2__box__container__cards__name">
                <h1>Kaiara Spencer</h1>
                <p>PRODUCT MANAGER</p>
            </div>
            <div className="section2__box__container__cards__description"></div>
         </div>





         <div className="section2__box__container__cards">
            <div className="section2__box__container__cards__img">
                <img src="https://preview.colorlib.com/theme/nitro/images/person_5.jpg"/>
            </div>
            <div className="section2__box__container__cards__name">
                <h1>Kaiara Spencer</h1>
                <p>PRODUCT MANAGER</p>
            </div>
            <div className="section2__box__container__cards__description"></div>
         </div>





         <div className="section2__box__container__cards">
            <div className="section2__box__container__cards__img">
                <img src="https://preview.colorlib.com/theme/nitro/images/person_5.jpg"/>
            </div>
            <div className="section2__box__container__cards__name">
                <h1>Kaiara Spencer</h1>
                <p>PRODUCT MANAGER</p>
            </div>
            <div className="section2__box__container__cards__description"></div>
         </div>





         <div className="section2__box__container__cards">
            <div className="section2__box__container__cards__img">
                <img src="https://preview.colorlib.com/theme/nitro/images/person_5.jpg"/>
            </div>
            <div className="section2__box__container__cards__name">
                <h1>Kaiara Spencer</h1>
                <p>PRODUCT MANAGER</p>
            </div>
            <div className="section2__box__container__cards__description"></div>
         </div>




         <div className="section2__box__container__cards">
            <div className="section2__box__container__cards__img">
                <img src="https://preview.colorlib.com/theme/nitro/images/person_5.jpg"/>
            </div>
            <div className="section2__box__container__cards__name">
                <h1>Kaiara Spencer</h1>
                <p>PRODUCT MANAGER</p>
            </div>
            <div className="section2__box__container__cards__description"></div>
         </div>




         <div className="section2__box__container__cards">
            <div className="section2__box__container__cards__img">
                <img src="https://preview.colorlib.com/theme/nitro/images/person_5.jpg"/>
            </div>
            <div className="section2__box__container__cards__name">
                <h1>Kaiara Spencer</h1>
                <p>PRODUCT MANAGER</p>
            </div>
            <div className="section2__box__container__cards__description"></div>
         </div>



         <div className="section2__box__container__cards">
            <div className="section2__box__container__cards__img">
                <img src="https://preview.colorlib.com/theme/nitro/images/person_5.jpg"/>
            </div>
            <div className="section2__box__container__cards__name">
                <h1>Kaiara Spencer</h1>
                <p>PRODUCT MANAGER</p>
            </div>
            <div className="section2__box__container__cards__description"></div>
         </div>



   </div>


    </div>

<div className="section3">
<div className="section3__head">
    <h1>Our Services</h1>
</div>
<div className="section3__box__container">
{cards.map((card) => {

    return(
<div className="section3__box__container__cards">
            <div className="section3__box__container__cards__logo">
                <img src="https://img1.cgtrader.com/items/2958283/322f75e573/large/airlane-3d-model-obj-fbx-ma-stl.jpg"/>
            </div>
            <div className="section3__box__container__cards__name">
                <h1>{card.name1}</h1>
               
            </div>
            <div className="section3__box__container__cards__description">
                <p>{card.description}</p>

            </div>

            <div className="section3__box__container__cards__name2">
                <p>{card.name2}</p>
               
            </div>


         </div>

    )
})}

</div>


</div>

<div className="section4">
<div className="section4__head">
    <h1>Contact Us</h1>
    <p>Contact Form</p>
</div>
</div>
<div className="section4__form">
    <div className="section4__form__name">
        <p>First Name</p>
        <input type="text"></input>
    </div>
    <div className="section4__form__surname">
    <p>Last Name</p>
    <input type="text"></input>
    </div>
    <div className="section4__form__email">
    <p>Email</p>
    <input type="text"></input>

    </div>
    <div className="section4__form__subject">
    <p>Subject</p>
    <input type="text"></input>
    </div>
    <div className="section4__form__message">
    <p>Message</p>
    <input type placeholder='Write your notes or qustions  here...'></input>
    
    </div>
    <div  className="body__buttonn">
    <button > Send Message</button>
   </div>
    
</div>



    </div>
  )
}

export default Home



