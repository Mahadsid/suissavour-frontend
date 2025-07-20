import React from 'react'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react';
import UsernameMenu from './UsernameMenu';

export default function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className='flex space-x-2 items-center'>
      {isAuthenticated ? <UsernameMenu /> :
      <Button variant="ghost"
    onClick={async () => await loginWithRedirect() }  className='font-bold text-1xl hover:cursor-pointer'>
          Log In
    </Button> }
    </span>
  
  )
}
