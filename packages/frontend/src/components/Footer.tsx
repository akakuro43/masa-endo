import s from '../sass/modules/layouts/Footer.module.sass'

const Footer = () => (
  <footer className={`${s.lFooter} relative z-10 w-full`}>
    <div className={`bg-dark1 u-fitParent`}></div>
    <div className="p-inner">
      <p className={`${s.copyright} absolute top-8 right-0 opacity-70 text-light-gray`}>Masa-Endo © 2021</p>
    </div>
  </footer>
)

export default Footer
