import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

type ContainerProps = {
  className?: string
  href: string
}

type Props = {
  handleClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
} & ContainerProps

const Component: React.FC<Props> = (props) => {
  return (
    <a
      className={props.className}
      href={props.href}
      onClick={props.handleClick}
    >
      {props.children}
    </a>
  )
}

const StyledComponent = styled(Component)`
  position: fixed;
  top: 50px;
  left: 42px;
  width: 146px;
  height: 41px;
`

const Container: React.FC<ContainerProps> = ({ ...props }) => {
  const router = useRouter()
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()
      router.push(props.href)
    },
    []
  )

  const componentProps = {
    handleClick,
  }

  return <StyledComponent {...props} {...componentProps} />
}

export const CustomLink = Container
