import styled, { css } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Wrapper = styled.div``

export const ItemWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxxsmall};
  `}
`

export const RadioGroupItem = styled(RadioGroup.Item)`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    cursor: pointer;

    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.gray300};
    border-radius: 100%;

    &[data-state='checked'] {
      border-color: ${theme.colors.pink200};
    }
  `}
`

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: ${theme.colors.pink200};
    }
  `}
`
