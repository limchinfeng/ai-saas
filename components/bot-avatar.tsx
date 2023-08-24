import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import { useUser } from '@clerk/nextjs'

const BotAvatar = () => {
  const {user} = useUser(); 
  
  return (
    <Avatar>
        <AvatarImage className='h-8 w-8' 
            src='/logo.png'
        />
    </Avatar>
  )
}

export default BotAvatar