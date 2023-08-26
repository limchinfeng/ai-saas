import React from 'react'
import { UserButton } from '@clerk/nextjs';
import MobileSidebar from './mobile-sidebar';
import { getApiLimitCount } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

const Navbar = async () => {
  // const apiLimitCount = await getApiLimitCount();
  // const isPro = await checkSubscription();
  const apiLimitCount = 1;
  const isPro = false;

  return (
    <div className='flex items-center p-4'>
        <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
        <div className='flex w-full justify-end'>
            <UserButton signInUrl='/'/>
        </div>
    </div>
  )
}

export default Navbar