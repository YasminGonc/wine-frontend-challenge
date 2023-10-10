import { UserCircle } from '@phosphor-icons/react'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xsmall};
    position: relative;

    background-color: ${theme.colors.white};
  `}
`
export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      height: 2.2rem;
    }

    svg {
      color: ${theme.colors.gray400};
      cursor: pointer;
      margin-right: ${theme.spacings.small};

      ${media.greaterThan('large')`
        display: none;
      `}
    }
  `}
`

export const MenuNav = styled.nav`
  ${({ theme }) => css`
    display: none;

    ${media.greaterThan('large')`
      display: flex;
      gap: ${theme.spacings.xlarge};
      margin-left: 8rem;
    `}
  `}
`

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.small};

    svg {
      cursor: pointer;
      color: ${theme.colors.gray400};
    }
  `}
`

export const UserIcon = styled(UserCircle)`
  ${({ theme }) => css`
    color: ${theme.colors.gray400};
    display: none;

    ${media.greaterThan('large')`
      display: block;
    `}
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${theme.colors.background};
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    transform: ${isOpen ? 'translateX(0)' : 'translateX(-2rem)'};
    transition: transform 0.5s ease-in-out;

    svg {
      cursor: pointer;
    }
  `}
`

export const MenuHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxxsmall};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};

    svg:first-child {
      align-self: flex-end;
      color: ${theme.colors.gray400};
    }
  `}
`

export const ProfileWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
  `}
`

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const SignIn = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.extraSmall};

    color: ${theme.colors.pink200};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    text-decoration: none;
    text-transform: uppercase;
  `}
`

export const MenuOptions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xxxsmall};
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.pink200};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    text-decoration: none;
    text-transform: uppercase;

    padding: ${theme.spacings.xsmall} ${theme.spacings.xxxsmall};
    border-top: 1px solid ${theme.colors.border};

    ${media.greaterThan('large')`
      border: none;
      text-transform: none;
      font-weight: ${theme.font.normal}; 

      color: ${theme.colors.gray100};
      font-size: ${theme.font.sizes.large};
      position: relative;

      &:hover {
      color: ${theme.colors.pink100};

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        bottom: -1rem;
        left: 0;
        height: 0.2rem;
        background-color: ${theme.colors.pink100};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
    `}
  `}
`
