import { CircleUserRound } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu'
import { useAuth0 } from '@auth0/auth0-react'
import { DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

export default function UsernameMneu() {
    const { user, logout } = useAuth0();
  return (
      <DropdownMenu>
          <DropdownMenuTrigger className='flex items-center px-3 font-bold hover:text-black hover:cursor-pointer  gap-2'>
              <CircleUserRound className='text-black' />
              {user?.email}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
              <DropdownMenuItem>   
              <Link to="/manage-restaurant" className='font-bold hover:text-black'>
                  Manage Restaurant
              </Link>
              </DropdownMenuItem>
              <Separator className='my-2'/>
              <DropdownMenuItem>   
              <Link to="/user-profile" className='font-bold text-gray-600'>
                  User Profile
              </Link>
              </DropdownMenuItem>
              <Separator className='my-2'/>
              <DropdownMenuItem>
                  <Button className='flex flex-1 font-bold bg-white text-black hover:bg-gray-700 hover:text-white' onClick={() => logout()}>
                      Log Out
                  </Button>
              </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
  )
}
