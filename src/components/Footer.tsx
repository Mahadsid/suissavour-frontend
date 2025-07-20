import React from 'react'

export default function Footer() {
  return (
      <div className='bg-black py-10'>
          <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
              <span className='text-2xl text-white font-bold tracking-tight'>
                  suissavour
              </span>
              <span className='text-white font-bold tracking-tight flex gap-4'>
                  <span>Privacy Policy</span>
                  <span>Terms of Service</span>   
              </span>
          </div>
    </div>
  )
}
