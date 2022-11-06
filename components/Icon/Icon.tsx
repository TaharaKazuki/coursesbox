import { FC, SVGProps } from 'react'
import styled from '@emotion/styled'

import { AppTheme } from '@/styles/themes'
import { Icons } from './Icons'

export type AvailableIcons = keyof typeof Icons

type WrapperProps = {
  size?: string
  theme?: AppTheme
}

type Props = {
  name: AvailableIcons
} & WrapperProps &
  SVGProps<SVGSVGElement>

const Wrapper = styled.div<WrapperProps>`
  color: ${({ theme }) => theme.font.regular};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export const Icon: FC<Props> = ({ name, size = '2rem', ...rest }) => {
  const Icon = Icons[name]
  const sizes = { width: size, height: size }
  return (
    <Wrapper size={size}>
      <Icon {...sizes} {...rest} />
    </Wrapper>
  )
}
