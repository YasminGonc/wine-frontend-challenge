import { UserCircle } from '@phosphor-icons/react'
import styled, { css } from 'styled-components'

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
    }
  `}
`

export const MenuNav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xlarge};
    margin-left: 8rem;
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-size: ${theme.font.sizes.large};
    text-decoration: none;
    position: relative;

    &:hover {
      color: ${theme.colors.pink100};

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        bottom: -3rem;
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
  display: none;
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
    //height: 100vh;
    background-color: ${theme.colors.background};
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
  `}
`
