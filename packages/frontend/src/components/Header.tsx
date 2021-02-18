import Link from 'next/link'
// import s from '../sass/modules/layouts/Header.module.sass'

const navItems = [
  {name: 'HOME', url: '/'},
  {name: 'ARTICLE', url: '/article'},
  {name: 'README', url: '/readme'},
];
const stateCurrent = '/'

const Header = () => (
  <header className={`h-64px fixed z-50 w-full flex items-center`}>
    <div className={`opacity-0 bg-dark1 inset-0 absoluteolute`}></div>
    <div className="pj-inner">
      <ul className="flex">
      {navItems.map(nav => (
        <li className={`opacity-40 mr-5 ${stateCurrent == nav.url ? 'opacity-100' : ''}`}>
          <Link href={`${nav.url}`}>
            <a className={`text-13px py-2.5 font-bold text-light-gray md:hover:text-key-color`}>{nav.name}</a>
          </Link>
        </li>
      ))}
      </ul>
    </div>
  </header>
)

export default Header