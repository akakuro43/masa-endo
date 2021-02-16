import React from 'react'

import styles from '~/styles/pages/Home.module.sass'


type ContainerProps = {
  className?: string
}

type Props = {} & ContainerProps

// const Component: React.FC<Props> = ({ className }) => {
//   return <div className={className}></div>
// }

// const StyledComponent = styled(Component)``

// const Container: React.FC<ContainerProps> = ({ ...props }) => {
//   return <StyledComponent {...props} />
// }

// export const HomePage = Container

export const HomePage = ({className}) => {
  return (
    <div className={className}>
      <section className={`${styles.pKeyVisual} w-full relative`}>
        <div className={styles.contents}>
          <h1 className={styles.siteName}>Masa-Endo</h1>
          <p className={styles.siteTheme}>Engineering, Tech, PdM</p>
        </div>
        <div className={styles.bg}></div>
      </section>
    </div>
  )
}
