import { FC, ChangeEvent, useRef } from 'react'
import styled from '@emotion/styled'

import { boxShadow, transition } from '@/components/styles'
import { AppTheme } from '@/styles/themes'

type StyledProps = {
  theme?: AppTheme
}

const Wrapper = styled.label<StyledProps>`
  font-size: 1.8rem;
  & input {
    display: none;
  }
  & input:checked {
    & ~ label {
      ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
      color: ${({ theme }) => theme.font.regular}
    }
  }
`

const VisiblePart = styled.label<StyledProps>`
  display: inline-block;
  user-select: none;
  cursor: pointer;
  text-align: center;
  border-radius: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  color: rgba(0, 0, 0, 0);
  background: ${({ theme }) => theme.components.background};
  ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2)}
  ${transition()};
  &:hover {
    ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
  }
`

export const Checkbox: FC = () => {
  return <div></div>
}
