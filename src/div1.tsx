import React from 'react'

function Div1() {
    return (
        <div className='absolute top-40 items-center flex-col flex  w-full '>
            <div className='justify-center text-center flex'> <img src="../img/2.jpeg" className='reltaive' alt="" />
                <h1 className='font-primary absolute top-4 text-black'>New Notifications</h1></div>

            <div className='absolute top-40  w-[900px]'>
                <li className='text-black text-xl'>
                    <a href="" className='text-black font-mono hover:text-[#795321]'>Notification regarding  withdrawn & postponed  of datesheet of all Post Graduate Courses keeping in view the current natural calamity in the State due to heavy rainfall & harsh weather</a>
                </li>
            </div>
            <img src="../img/2.jpeg" className='' alt="" />
            <div className='w-full mt-10 ml-0 flex space-x-20 justify-center'>
                <img src="../img/3.png" className='h-fit ' alt="" />
                <p className='w-fit font-mono space-y-10'><b>Update4u </b>Provide the new notification from All the universities <br />
                    (A State Government University Accredited with 'A' grade by NAAC) <br />The Himachal Pradesh Legislative Assembly passed an act on July 22, <br /> 1970, creating the Himachal Pradesh University in response to the needs <br />and aspirations of the Union Territory, which was preparing to become a <br />
                    full state within the Indian Union on January 25, 1971. It is the only <br />
                    multi-faculty residential and affiliated university in the State that <br />offers formal and distance learning to urban, rural, and tribal communities.
                   <br />
                   <button className='bg-inherit border-none cursor-pointer hover:shadow-inner'><img src="../img/5.png" className='relative' alt="" />
                   <h3 className='absolute bottom-12 w-[230px] text-black'>Read More</h3>
                   </button>
                </p>
            </div>
          

        </div>
    )
}

export default Div1