import React from 'react'

const DashboardCard = ({title, value}) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 w-48 sm:w-1/3'>
        <h3 className='text-gray-900 text-md font-medium'>{title}</h3>
        <p className='text-2xl font-bold mt-1 text-gray-800'>{value}</p>
    </div>
  )
}

export default DashboardCard


