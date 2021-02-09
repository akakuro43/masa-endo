import Link from 'next/link'
import styles from '../../styles/modules/components/Header.module.sass'

const navItems = [
  {name: 'HOME', url: '/'},
  {name: 'ARTICLE', url: '/article'},
  {name: 'README', url: '/readme'},
];
const stateCurrent = '/'

const Header = () => (
  <header className={styles.cHeader}>
    <div className={styles.bg}></div>
    <div className="sInner">
      <ul className={styles.navList}>
      {navItems.map(nav => (
        <li className={`${styles.navItem} ${stateCurrent == nav.url?styles.isCurrent:''}`}>
          <Link href={`${nav.url}`}>
            <a className={styles.navLink}>{nav.name}</a>
          </Link>
        </li>
      ))}
      </ul>
    </div>
  </header>
)

export default Header
