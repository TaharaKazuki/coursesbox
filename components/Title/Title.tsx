import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { AppTheme } from '@/styles/themes'
import { boxShadow, borderRadius } from '@/components/styles'

const Section = styled.section<Props>`
  ${borderRadius};
  padding: 1vmin 4vmin 4vmin;
  background: ${({ theme }) => theme.components.background};
  color: ${({ theme }) => theme.font.regular};
  ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2)}
`

type Props = {
  children?: ReactNode
  header?: string
  theme?: AppTheme
}

export const Title: FC<Props> = ({ header, children }) => (
  <Section>
    <h2>{header}</h2>
    {children}
  </Section>
)
