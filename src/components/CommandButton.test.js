import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import CommandButton from './CommandButton.vue'
import HelpOutput from './outputs/HelpOutput.vue'

describe('CommandButton', () => {
  it('renders a command and emits its name when clicked', async () => {
    const wrapper = mount(CommandButton, { props: { commandName: 'github' } })

    expect(wrapper.get('button').text()).toContain('github')

    await wrapper.get('button').trigger('click')

    expect(wrapper.emitted('run')).toEqual([['github']])
  })

  it('does not render a button for an unknown command', () => {
    const wrapper = mount(CommandButton, { props: { commandName: 'unknown' } })

    expect(wrapper.find('button').exists()).toBe(false)
  })
})

describe('HelpOutput', () => {
  it('forwards the command button event', async () => {
    const wrapper = mount(HelpOutput)

    await wrapper.get('button').trigger('click')

    expect(wrapper.emitted('run')).toEqual([['commands']])
  })
})
