import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:-2/3 text-gray-600'>
                Excepteur ea nostrud consectetur veniam id cupidatat mollit aliqua laborum exercitation duis.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>
                    COMPANY
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li >Home</li>
                    <li >About us</li>
                    <li >Delivery</li>
                    <li >Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>
                    GET IN TOUCH
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-817-555-9032</li>
                    <li>contactus@forever.com</li>
                </ul>
            </div>
            <div>
                <hr/>
                <p className='py-5 text-sm text-center '>
                    Copyright 2024@ Fovever.com -All Rights Reserved
                </p>
            
            </div>

        </div>
    </div>
  )
}

export default Footer