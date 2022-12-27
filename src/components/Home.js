import React from 'react';
import BusImage from "../assets/Bus.png"
import service1 from "../assets/Group 25.png";
import service2 from "../assets/Group 501.png";
import service3 from "../assets/Group 509.png";
import service4 from "../assets/Group.png";


const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 ml-4 md:ml-2 mr-4 md:mr-0'>
            <div className='services'>
                <div className="service">
                    <div className="grid grid-cols-1 md:grid-cols-3 my-12 mx-5 gap-5">
                        <div className='flex items-end md:mb-16'>
                            <div className='singleService'>
                                <div className="flex justify-center">
                                    <img className='h-[100px]' src={service2} alt="" />
                                </div>
                                <h4 className='text-sm font-bold mt-3.5 text-primary text-center'>Bus Picker Request, and Tracker Your Bus</h4>
                            </div>
                        </div>
                        <div>
                            <div className='singleService'>
                                <div className="flex justify-center">
                                    <img className='h-[100px]' src={service4} alt="" />
                                </div>
                                <h4 className='text-sm font-bold mt-3.5 text-primary text-center'>Inter-District bus E-Ticketing Service</h4>
                            </div>
                            <div className='singleService mt-5'>
                                <div className='flex justify-center'>
                                    <img className='h-[100px]' src={service3} alt="" />
                                </div>
                                <h4 className='text-sm font-bold mt-3.5 text-primary text-center'>Now Hotel Booking Smartly & Easy</h4>
                            </div>
                        </div>
                        <div className='singleService sm:mt-16'>
                            <div className="flex justify-center">
                                <img className='h-[100px]' src={service1} alt="" />
                            </div>
                            <h4 className='text-sm font-bold mt-3.5 text-primary text-center'>Ride Sharing and Rental Service</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-5 pt-8'>
                    <div className="col-span-4 md:col-span-3 text-center">
                        <h3 className='text-2xl font-extrabold text-primary mb-3'>Why we are for you</h3>
                        <p className='text-xs font-semibold text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laboriosam, voluptate quos cum maiores incidunt omnis distinctio officiis aliquid porro similique accusantium magni aspernatur placeat is reiciendis ad totam in perferendis debitis ab quas rem voluptatibus.</p>
                    </div>
                    <div className="col-span-1 md:col-span-2"></div>
                </div>
                <div className='flex justify-end mt-5'>
                    <img className='w-[98%]' src={BusImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;