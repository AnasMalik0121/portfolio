import React from 'react';
import Image from 'next/image';
import aboutimg from '../../../public/images/okx.jpg'; 

function About(props) {
  return (
    <div className='seaction'>
      <div className='container'>
        <div className='box'>
        <div className='box1'>
            <div className='imgbox'>
              <p className='about-hold'>Double click and hold</p>
               <Image src={aboutimg} className='about-img' alt='ANAS MALIK' width={150}  height={150} /> 
               
               </div>
           
                      <div className="about-info">
                        <p className='info'><span className="title-s">Name: </span> <span>Anas Malik</span></p>
                        <p className='info1'><span className="title-s">Profile: </span> <span>full stack developers</span></p>
                        <p className='info1'><span className="title-s">Email: </span> <span>Anasmalik01210@gmail.com</span></p>
                        <p className='info1'><span className="title-s">Phone: </span> <span>(91+)7065490017</span></p>
                      </div>
                    
          </div>

          <div className='box2'>
          <h2 className='imgtext'>Skill</h2>
            
          <span>HTML 85%</span>
          <progress className="progress progress-info w-56" value="85" max="100"></progress>
          <span>css 75%</span>
          <progress className="progress progress-info w-56" value="75" max="100"></progress>
         <span>python 50%</span>
         <progress className="progress progress-info w-56" value="50" max="100"></progress>
          <span>JAva script 65%</span>
          <progress className="progress progress-info w-56" value="65" max="100"></progress>
          </div>
                               
   
        </div>
        <div className="Box3">
                    <div className="title-box-2">
                      <h5 classNames="title-left">
                        About me
                      </h5>
                    </div>
                    <p className="lead">
                      Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                      imperdiet et, porttitor
                      at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                      porttitor accumsan tincidunt.
                    </p>
                    <p className="lead">
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                      porttitor volutpat. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                    </p>
                    <p className="lead">
                      Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      Nulla porttitor accumsan
                      tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    </p>
                  </div>
      </div>
    </div>
  );
}

export default About;
