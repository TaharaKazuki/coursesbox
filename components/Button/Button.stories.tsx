import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Controls/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (arg) => <Button {...arg} />

export const BasicButton = Template.bind({})

BasicButton.args = {
  children: 'Button',
}
