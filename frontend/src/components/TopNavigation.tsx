import { FunctionComponent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import DistributeAidLogo from './branding/DistributeAidLogo'
import DropdownMenu from './DropdownMenu'
import TruckIcon from './icons/TruckIcon'
import PackageIcon from './icons/PackageIcon'
import CogIcon from './icons/CogIcon'
import UserIcon from './icons/UserIcon'
import MobileNavigation from './navigation/MobileNavigation'
import DesktopNavigation from './navigation/DesktopNavigation'

export interface NavLinkItem {
  path: string
  label: ReactNode
  icon?: ReactNode
}

const NAV_LINKS: NavLinkItem[] = [
  {
    path: '/offers',
    label: 'Offers',
    icon: <PackageIcon className="w-5 h-5 mr-2" />,
  },
  {
    path: '/shipments',
    label: 'Shipments',
    icon: <TruckIcon className="w-5 h-5 mr-2" />,
  },
  {
    path: '/admin',
    label: 'Admin',
    icon: <CogIcon className="w-5 h-5 mr-2" />,
  },
]

interface Props {
  /**
   * If true, the user's information and "log out" button will be hidden.
   * Use this prop when you want to show the page header while things are
   * still loading.
   */
  hideControls?: boolean
}

/**
 * A full-width element that sits at the top of the page. It displays the DA
 * branding and a dropdown-menu with some account information.
 */
const TopNavigation: FunctionComponent<Props> = ({ hideControls }) => {
  const { user, logout } = useAuth0()

  return (
    <header className="py-2 bg-da-navy-100 h-nav sticky top-0">
      <div className="max-w-5xl px-4 mx-auto h-full flex items-center justify-between">
        <MobileNavigation navLinks={NAV_LINKS} />
        <div className="flex items-center">
          <Link to="/" className="text-white" aria-label="Go to the home page">
            <DistributeAidLogo className="block h-8" />
          </Link>
        </div>
        <DesktopNavigation navLinks={NAV_LINKS} />
        {!hideControls && (
          <div className="flex items-center text-white">
            <DropdownMenu
              buttonClassname="p-2"
              position="right"
              label={<UserIcon className="w-6 h-6" />}
            >
              <DropdownMenu.Text>
                <div>{user.name}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </DropdownMenu.Text>
              <DropdownMenu.Divider />
              <DropdownMenu.Button onClick={() => logout()}>
                Log out
              </DropdownMenu.Button>
            </DropdownMenu>
          </div>
        )}
      </div>
    </header>
  )
}

export default TopNavigation