import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/PUSH/PC_Hero_3000x1200_NTA_2X._CB599338253_.jpg"/>

            <div class="home__row">
              <Product 
                title="Any Random title" 
                image="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/Shop-all-Deals_PC-CC_1X_withoutstripe._SY304_CB599379717_.jpg" 
                price={30} 
                rating={5}
              />
              <Product 
                title="Laptops" 
                image="https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/AugArt23/AugArtCC/DesktopCC_02._SY304_CB599332264_.jpg" 
                price={300} 
                rating={4}
              />
            </div>

            <div class="home__row">
              <Product 
                title="Laptop Bags" 
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img23/aa23/pdacc/gw/unrec/PC_CC_379x304._SY304_CB599426206_.jpg" 
                price={50} 
                rating={5}
              />
              <Product 
                title="Perfumes & Bags" 
                image="https://images-eu.ssl-images-amazon.com/images/G/31/kindle-content-smeghn/ART/primeday/augart/758x608_op20.5x._SY304_CB599450409_.jpg" 
                price={70} 
                rating={5}
              />
              <Product 
                title="Kitchen" 
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/August_ART/NLB/MOB/Bestoffers/1/sbd/green/1/bau/Desktop_CC021._SY304_CB599069987_.jpg" 
                price={35} 
                rating={3}
              />
            </div>

            <div class="home__row">
              <Product 
                title="Furnishing" 
                image="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" 
                price={230} 
                rating={5}
              />
            </div>
        </div>
    </div>
  )
}

export default Home
