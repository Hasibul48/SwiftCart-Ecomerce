import React from 'react'

import { Carousel } from "flowbite-react";
function Carousal() {
    return (
        <div className="container mx-auto mt-10 shadow-xl rounded-lg">
            <div className="h-80 sm:h-96 xl:h-[500px] 2xl:h-[600px]">
                <Carousel pauseOnHover>
                    <img src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                    <img src="https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                    <img src="https://images.pexels.com/photos/787929/pexels-photo-787929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                    <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600" alt="..." />
                </Carousel>
            </div>
        </div>
    )
}

export default Carousal