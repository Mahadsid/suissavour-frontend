import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet'
import { CircleUserRound, Menu } from 'lucide-react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import MobileNavLinks from './MobileNavLinks'



export default function MobileNav() {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
      <Sheet>
          <SheetTrigger className='hover: cursor-pointer'>
              <Menu className='text-black'/>
          </SheetTrigger>
          <SheetContent>
              <SheetTitle className=' text-center text-1xl mt-4'>
                  {isAuthenticated ?
                      <span className='flex font-bold items-center  gap-2'>
                          <CircleUserRound className='text-black' />
                          {user?.email}
                      </span>
                      :
                      <span>SUISSAVOUR</span>}
              </SheetTitle>
              <Separator />
              <SheetDescription className='flex flex-col gap-4'>
                  {isAuthenticated ?
                      <MobileNavLinks />
                      :
                      <Button className='flex-1 font-bold bg-gray-800 hover:bg-black' onClick={() => {loginWithRedirect()}}>Log In</Button>}  
              </SheetDescription>
          </SheetContent>
    </Sheet>
  )
}
