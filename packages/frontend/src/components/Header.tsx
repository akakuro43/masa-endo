import Link from 'next/link'
import s from '../sass/modules/layouts/Header.module.sass'

const navItems = [
  {name: 'HOME', url: '/'},
  {name: 'ARTICLE', url: '/article'},
  {name: 'README', url: '/readme'},
];
const stateCurrent = '/'

const Header = () => (
  <header className={`${s.lHeader} fixed z-50 w-full flex items-center`}>
    <div className={`${s.bg} bg-dark1 u-fitParent`}></div>
    <div className="p-inner">
      <ul className="flex">
      {navItems.map(nav => (
        <li className={`${s.navItem} opacity-40 mr-5 ${stateCurrent == nav.url ? s.isCurrent : ''}`}>
          <Link href={`${nav.url}`}>
            <a className={`${s.navLink} py-2.5 font-bold text-light-gray`}>{nav.name}</a>
          </Link>
        </li>
      ))}
      </ul>
    </div>
  </header>
)

export default Header