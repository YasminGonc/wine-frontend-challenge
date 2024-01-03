import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/helpers'

import { ExploreSidebar, ExploreSidebarProps } from '.'

const props: ExploreSidebarProps = {
  filterName: 'filter by',
  items: ['first', 'second']
}

describe('<ExploreSidebar />', () => {
  it('should render Sidebar correctly', () => {
    const { debug, container } = renderWithTheme(<ExploreSidebar {...props} />)

    debug(container)

    expect(
      screen.getByRole('heading', { name: props.filterName })
    ).toBeInTheDocument()

    const firstLabel = screen.getByText('first')
    expect(firstLabel).toBeInTheDocument()

    // userEvent.hover(firstLabel)
    //expect(firstLabel).toHaveStyleRule({ color: '#1D1D1B' })
    // fireEvent.click(firstLabel)
    //expect(firstLabel).toHaveStyle({ color: '#1D1D1B' })

    // const secondLabel = screen.getByText('second')
    // expect(secondLabel).toBeInTheDocument()
    // expect(secondLabel).toHaveStyleRule({ color: '#1D1D1B' })

    // hover state
    // checked state
  })
})
