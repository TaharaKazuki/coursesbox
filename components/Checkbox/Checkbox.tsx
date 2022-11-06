import { FC, ChangeEvent, useRef } from 'react'
import styled from '@emotion/styled'

import { boxShadow, transition } from '@/components/styles'
import { AppTheme } from '@/styles/themes'

type WrapperProps = {
  theme?: AppTheme
}

const Wrapper = styled.label<WrapperProps>`
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

export const Checkbox: FC = () => {
  return <div></div>
}
