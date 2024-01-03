import styled, { css } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

// checar hover state

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};

    h3 {
      color: ${theme.colors.gray200};
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
    }
  `}
`

export const RadioGroupRoot = styled(RadioGroup.Root)`
  ${({ theme }) => css`
    color: ${theme.colors.gray400};
    font-size: ${theme.font.sizes.small};

    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`

export const ItemWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxxsmall};

    &:hover {
      color: ${theme.colors.pink100};
    }

    label {
      cursor: pointer;
    }
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

    &:hover {
      border-color: ${theme.colors.pink100};
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
