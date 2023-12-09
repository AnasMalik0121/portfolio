import React from 'react';
import openimg from '../../../public/images/Screen Scratch - scratch.jpg'
import Image from 'next/image';

function Service(props) {
    return (
        <div className='service-seaction'>   
        <div className='service-heading'>
        <h3 class="title-a">
                Services
              </h3>
              
        </div>
          <div className='sevice-box'>
            <div className='service-Row'>
            <div className='service-container'>

            <div className='service-colum'>
            <div className='service-box1'>
                <div className='service-img1'>
                    {/* <Image src=  {openimg} alt='image' height={100} width={100} /> */}
                </div>
                <div className='service-text1'>
                    <h2 className='text-service-h2'>
                    WEB DESIGN
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            </div>
            <div className='service-colum'>
            <div className='service-box1'>
                <div className='service-img2'>
                    {/* <Image src=  {openimg} alt='image' height={100} width={100} /> */}
                </div>
                <div className='service-text1'>
                    <h2 className='text-service-h2'>
                        WEB DEVLOPER
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            </div>
            <div className='service-colum'>
            <div className='service-box1'>
                <div className='service-img3'>
                    {/* <Image src=  {openimg} alt='image' height={100} width={100} /> */}
                </div>
                <div className='service-text1'>
                    <h2 className='text-service-h2'>
                    RESPONSIVE DESIGN
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            </div>
            <div className='service-colum'>
            <div className='service-box1'>
                <div className='service-img4'>
                    {/* <Image src=  {openimg} alt='image' height={100} width={100} /> */}
                </div>
                <div className='service-text1'>
                    <h2 className='text-service-h2'>
                    GRAPHIC DESIGN
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            </div>
            <div className='service-colum'>
            <div className='service-box1'>
                <div className='service-img5'>
                    {/* <Image src=  {openimg} alt='image' height={100} width={100} /> */}
                </div>
                <div className='service-text1'>
                    <h2 className='text-service-h2'>
                    MARKETING SERVICES
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            </div>
            <div className='service-colum'>
            <div className='service-box1'>
                <div className='service-img6'>
                    {/* <Image src=  {openimg} alt='image' height={100} width={100} /> */}
                </div>
                <div className='service-text1'>
                    <h2 className='text-service-h2'>
                    PHOTOGRAPHY
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                </div>
            </div>
            </div>
           
             </div>
             </div>
          </div>
        </div>
    );
}

export default Service;