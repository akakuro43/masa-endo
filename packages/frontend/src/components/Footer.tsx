import s from '../styles/components/Footer.module.sass'

const Footer = () => (
  <footer className={`${s.cFooter} relative z-10 w-full`}>
    <div className={`bg-dark1 ps-fitParent`}></div>
    <div className="sInner">
      <p className={`${s.copyright} absolute top-8 right-0 opacity-70 text-light-gray`}>Masa-Endo © 2021</p>
    </div>
  </footer>
)

export default Footer
