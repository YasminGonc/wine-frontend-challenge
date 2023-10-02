import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-weight: ${theme.font.bold};
    width: 25.6rem;
  `}
`

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 39.7rem;

    margin-bottom: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxxsmall}
      ${theme.spacings.xsmall};

    background-color: ${theme.colors.white};
    box-shadow: ${theme.colors.shadow};
  `}
`

export const ImageWrapper = styled.div`
  position: relative;
`

export const PromoTagImage = styled.img`
  position: absolute;
  top: 12rem;
  left: 15rem;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray400};
    text-align: center;
    margin: ${theme.spacings.xxxsmall} 0;
  `}
`

export const PromotionWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.extraSmall};

    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const FullPrice = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray300};
    text-decoration: line-through;
  `}
`

export const DiscountFlag = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.orange};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    padding: ${theme.spacings.extraSmall};
  `}
`

export const WineMemberWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.extraSmall};
    font-size: ${theme.font.sizes.xsmall};
    text-transform: uppercase;
    margin: ${theme.spacings.xxxsmall} 0;
  `}
`

export const WineMemberPrice = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.pink200};
    font-size: ${theme.font.sizes.xlarge};

    span {
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const NotMemberInfo = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray300};
    font-size: ${theme.font.sizes.xsmall};
    text-transform: uppercase;
  `}
`

export const AddToCardButtom = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: '100%';
    height: ${theme.spacings.large};
    padding: ${theme.spacings.xxsmall} 0;
    border: none;
    border-radius: ${theme.border.radius};

    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    cursor: pointer;
  `}
`
