import React from 'react'
import Carousal from '../Components/Carousal'
import Catagories from '../Components/Catagories'
import TrendingProducts from '../Components/TrendingProducts'
import Blogs from '../Components/Blogs'
import ContactForm from '../Components/ContactForm'
import DealsOfTheMonth from '../Components/DealsOfMonths'


function Home() {
    return (
        <div>
            <br />
            <br />
            <br />

            <Carousal />
            <br />
            <br />
            <br />
            <br />
            <Catagories />
            <br />
            <br />
            <br />
            <br />
            <br />
            <TrendingProducts />
            <br />
            <br />
            <DealsOfTheMonth />
            <br />
            <br />
            <br />
            <Blogs />
            <br />
            <br />
            <br />
            <ContactForm />

        </div>
    )
}

export default Home