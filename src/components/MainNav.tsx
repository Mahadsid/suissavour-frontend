import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react';
import UsernameMenu from './UsernameMenu';
import { Link } from 'react-router-dom';

export default function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className='flex space-x-2 items-center'>
      {isAuthenticated ?
        <>
          <Link to="/order-status" className='font-bold hover:text-gray-700 hover:cursor-pointer'>
            Order Staus
          </Link>
          <UsernameMenu />
        </>
         :
      <Button variant="ghost"
    onClick={async () => await loginWithRedirect() }  className='font-bold text-1xl hover:cursor-pointer'>
          Log In
    </Button> }
    </span>
  
  )
}
