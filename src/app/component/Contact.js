import React from 'react';
import insta from '../../../public/images/instagram.jpg';
import facebook from '../../../public/images/225129.png'
import twiter from '../../../public/images/225132.png'
import github from '../../../public/images/github.jpeg'
import Image from 'next/image';

function Contact(props) {
    return (
        <div className='contact-seaction'>
            <div className='contact-box'>
                <div className='contact-row'>
                    <div className='contact-container'>
                        
                        <form action=''>
                        <h2 className='contact-h2'>SEND Message US</h2>  
                        <br></br>
                            <ul>

                            <li><input type='text' className='contact-form' name='Name' placeholder='YOUR NAME'required></input></li>
                            <br></br>
                           <li> <input type='email'className='contact-form' name='email' placeholder='Email Id' required></input></li>
                           <br></br>
                           <li> <input type='text' className='contact-form' name='subject' placeholder='Subject' required></input></li>
                           <br></br>
                           <li> <textarea className='contact-message' name='message' rows={5} cols={50} placeholder='Message' required></textarea></li>
                           <br></br>
                            </ul>
                            <button type='submit' className='contact-button'>SEND Message</button>
                        </form>
                    </div>
                    <div className='contact-container2'>
                    <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="contact-title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div className="more-info">
                      <p className="contact-lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                        expedita aperiam aliquid at.
                        Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                        mollitia inventore?
                      </p>
                      <br></br>
                      <ul className="contact-list-ico">
                        <li><span className="bi bi-geo-alt"></span> 110094 DELHI ,INDIA </li>
                        <br></br>
                        <li><span className="bi bi-phone"></span> (+91) 7065490017 </li>
                        <br></br>
                        <li><span className="bi bi-envelope"></span> contact@example.com</li>
                        <br></br>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul className='contact-ul'>
                        <li className='contact-li'><a href=""><span className="ico-circle">Instagram<Image src={insta} className='contact-img'  width={30} height={30} alt='instagram'></Image></span></a></li>
                        <li className='contact-li'><a href=""><span className="ico-circle">Facebook<Image src={facebook} className='contact-img'  width={30} height={30} alt='instagram'></Image></span></a></li>
                        <li className='contact-li'><a href=""><span className="ico-circle">Twiter<Image src={twiter} className='contact-img' width={30} height={30} alt='instagram'></Image></span></a></li>
                        <li className='contact-li'><a href=""><span className="ico-circle">Github<Image src={github} className='contact-img' width={30} height={30} alt='instagram'></Image></span></a></li>
                        
                      </ul>
                    </div>
                  </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;