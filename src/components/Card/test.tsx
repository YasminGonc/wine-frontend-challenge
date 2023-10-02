import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/helpers'

import { Card, CardProps } from '.'

const props: CardProps = {
  title: 'Wine',
  wineImage: '/img/wine.png',
  fullPrice: '37,40',
  memberPriceInteger: '30',
  memberPriceCents: '00'
}

describe('<Card />', () => {
  it('should render the card correctly', () => {
    renderWithTheme(<Card {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.wineImage
    )

    expect(screen.getByText('Não sócio R$ 37,40')).toBeInTheDocument()
  })

  it('should render the card with promotional price', () => {
    renderWithTheme(<Card {...props} discountPercentage="60" />)

    expect(screen.getByText('R$ 37,40')).toHaveStyleRule({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('60% OFF')).toHaveStyleRule({
      'background-color': '#F79552'
    })
  })
})
