import type { MouseEvent } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'

import { AppTheme } from '@/styles/themes'
import { boxShadow, transition } from '@/components/styles'

export const COLOR = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger',
  WARNING: 'warning',
} as const

export type ColorType = typeof COLOR[keyof typeof COLOR]

export type Props = {
  children: string
  color?: ColorType
  theme?: AppTheme
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const getColors = (theme: AppTheme, color?: ColorType): SerializedStyles => {
  switch (color) {
    case 'secondary':
      return css`
        color: ${theme.font.regular};
      `
    case 'primary':
    case 'danger':
      return css`
        background: ${theme.components[color]};
        color: ${theme.font.button};
      `
    case 'warning':
      return css`
        background: ${theme.components[color]};
        color: ${theme.font.warning};
      `
    default:
      return css``
  }
}

export const Button = styled.button<Props>`
  all: unset;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;
  transition: all 0.4 ease;
  ${({ theme, color }) => getColors(theme, color)};
  &:hover {
    opacity: 0.9;
  }
  ${transition()}
  ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2)}
  &:active {
    ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
  }
`

Button.defaultProps = {
  color: 'primary',
}
