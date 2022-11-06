import React from 'react'

import { render } from '@/test-utils'

import { Title } from './Title'

describe('Title test case', () => {
  it('Title render check', () => {
    const { asFragment } = render(
      <Title header="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris
      </Title>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
