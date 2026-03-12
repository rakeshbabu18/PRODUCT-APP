import React from 'react'

function Footer() {
  return (
    <footer className='bg-gray-600 text-white py-8'>
      <div className='container mx-auto px-4'>
        {/* Links Section */}
        <div className='flex flex-wrap justify-center md:justify-between items-center mb-6'>
          <div className='flex space-x-4'>
            <a href='#' className='hover:text-gray-300'>Facebook</a>
            <a href='#' className='hover:text-gray-300'>Twitter</a>
            <a href='#' className='hover:text-gray-300'>Instagram</a>
          </div>
        </div>
        {/* Copyright */}
        <div className='text-center border-t border-gray-500 pt-4'>
          <p>&copy; 2026 Product App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer