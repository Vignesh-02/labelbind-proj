import React, { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}


const SidebarRow = ({Icon,title} : Props ) => {
  return (
    <div className='group max-w-fit flex items-center space-x-2 rounded-full px-4 py-2 transition-all duration-200 cursor-pointer hover:bg-gray-100 '>
      <Icon className='h-5 w-5'/>
      <p className='group-hover:text-orange-300'>{title}</p>
    </div>
  )
}

export default SidebarRow