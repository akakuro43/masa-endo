import React from 'react'
import { Head } from '~/components/utils/Head'
import { HomePage } from '~/components/pages/HomePage'

type ContainerProps = {
  className?: string
}

type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => {
  return (
    <>
      <Head/>
    </>
  )
}

const Container = ({ ...props }: ContainerProps) => {
  return <Component {...props} />
}

export default Container
