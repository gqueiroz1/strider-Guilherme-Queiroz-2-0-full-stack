import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import PosterrButton from '../components/PosterrButton.vue'

describe('Posterr Button props', () => {
  test('label prop', () => {
    const button = mount(PosterrButton, {
      props: {
        label: 'Click Me'
      }
    })

    // testing label prop and text rendering
    expect(button.props().label).toBe('Click Me')
    expect(button.text()).toBe('Click Me')
  })

  test('bgColor prop', () => {
    const button = mount(PosterrButton, {
      props: {
        bgColor: 'red'
      }
    })

    // testing bgColor prop and background class on the element
    expect(button.props().bgColor).toBe('red')
    expect(button.classes()).toContain('bg-red')
  })

  test('textColor prop', () => {
    const button = mount(PosterrButton, {
      props: {
        textColor: 'white'
      }
    })

    // testing textColor prop and color on the element
    expect(button.props().textColor).toBe('white')
    expect(button.classes()).toContain('text-white')
  })

  //flat prop should set the element with transparent background
  test('flat prop', () => {
    const button = mount(PosterrButton, {
      props: {
        flat: true
      }
    })

    // testing flat prop and background color on the element
    expect(button.props().flat).toBe(true)
    expect(button.classes()).toContain('bg-transparent')
  })

  // dense prop renders a narrower button
  test('dense prop', () => {
    const button = mount(PosterrButton, {
      props: {
        dense: true
      }
    })

    // testing dense prop and padding rendered on the element
    expect(button.props().dense).toBe(true)
    expect(button.classes()).toContain('p-1')
  })

  // icon prop should pass the icon name and also make the element render an icon on the screen
  test('icon prop', () => {
    const button = mount(PosterrButton, {
      props: {
        icon: 'search'
      }
    })

    // testing icon prop and the conditional rendering of the PosterrIcon component when the button has an icon prop
    expect(button.props().icon).toBe('search')
    const iconComponent = button.findComponent({ name: 'PosterrIcon' })
    expect(iconComponent.exists()).toBe(true)
  })

  // iconColor should set the fill color on the icon component
  test('iconColor prop', () => {
    const button = mount(PosterrButton, {
      props: {
        iconColor: 'white',
        icon: 'search'
      }
    })

    // testing the iconColor prop and the fill class passed to the PosterrIcon component
    expect(button.props().iconColor).toBe('white')
    const iconComponent = button.findComponent({ name: 'PosterrIcon' })
    expect(iconComponent.classes()).toContain('fill-white')
  })
})