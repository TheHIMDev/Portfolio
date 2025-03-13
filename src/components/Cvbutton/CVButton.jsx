import React from 'react'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { NavLink } from 'react-router'

function CVButton() {
  return (
    <>
        <NavLink to="" className="btn  md:w-5/12 bg-theme-primary-500 md:bg-transparent gap-2 text-lg  leading-none text md:border rounded-[50px] px-[35px] py-[17px] inline-flex justify-center   md:text-theme-primary-500 md:border-theme-primary-500 hover:bg-linear-to-r from-theme-primary-500  from-0% to-theme-primary-500 to-100% hover:text-theme-color-500  transition-all duration-400 ease-in-out font-medium cursor-pointer "  >
                Donwload CV
                <li className='list-none'>
                    <IoCloudDownloadOutline size="20px"></IoCloudDownloadOutline>
                </li>
        </NavLink>
    </>
  )
}

export default CVButton
