import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-weight: ${theme.font.bold};
    width: 25.6rem;

    ${media.lessThan('small')`
      width: 15.6rem;
    `}
  `}
`

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 39.7rem;

    margin-bottom: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxxsmall}
      ${theme.spacings.xsmall};

    background-color: ${theme.colors.white};
    box-shadow: ${theme.colors.shadow};

    ${media.lessThan('small')`
      min-height: 34.8rem;  
      border-radius: ${theme.border.radius};
      margin-bottom: ${theme.spacings.xxsmall};
    `}
  `}
`

export const ImageWrapper = styled.div`
  position: relative;
`

export const PromoTagImage = styled.img`
  position: absolute;
  top: 12rem;
  left: 15rem;

  ${media.lessThan('small')`
    top: 14rem;
    left: 3rem;
    right: 10rem;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray400};
    text-align: center;
    margin: ${theme.spacings.xxxsmall} 0;

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`

export const PromotionWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.extraSmall};

    font-size: ${theme.font.sizes.xsmall};

    ${media.lessThan('small')`
      font-weight: ${theme.font.normal};
    `}
  `}
`

export const FullPrice = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray300};
    text-decoration: line-through;

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xxsmall};
    `}
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

export const WineMemberText = styled.p`
  ${({ theme }) => css`
    ${media.lessThan('small')`
      color: ${theme.colors.gray100};
      font-weight: ${theme.font.light};
      font-size: ${theme.font.sizes.xxsmall};
      text-align: center;
      width: 3.2rem;
    `}
  `}
`

export const WineMemberPrice = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.pink200};
    font-size: ${theme.font.sizes.xlarge};

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.medium};
    `}

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

    ${media.lessThan('small')`
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.xxsmall};
    `}
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
    box-shadow: ${theme.colors.shadow};

    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    cursor: pointer;

    ${media.lessThan('small')`
      text-transform: none;
    `}
  `}
`
