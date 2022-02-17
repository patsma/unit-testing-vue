import AppHeader from '@/components/AppHeader'
import {mount} from '@vue/test-utils'

describe('AppHeader', () => {
  test('If user not logged in, dont show the button',()=> {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('If user logged in, show the button',async()=> {
    const wrapper = mount(AppHeader)
    await wrapper.setData({loggedIn: true})
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})