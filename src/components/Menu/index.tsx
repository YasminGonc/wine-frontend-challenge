import { useState } from 'react'
import {
  ArrowRight,
  List,
  MagnifyingGlass,
  X,
  CaretRight
} from '@phosphor-icons/react'
import * as S from './styles'

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenCloseMenu = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <List size={20} aria-label="Menu" onClick={handleOpenCloseMenu} />
        <img src="/img/wine-logo.png" alt="Wine logo" />

        <S.MenuNav>
          <S.MenuLink href="#">Clube</S.MenuLink>
          <S.MenuLink href="#">Loja</S.MenuLink>
          <S.MenuLink href="#">Produtores</S.MenuLink>
          <S.MenuLink href="#">Ofertas</S.MenuLink>
          <S.MenuLink href="#">Eventos</S.MenuLink>
        </S.MenuNav>
      </S.MenuWrapper>

      <S.IconsWrapper>
        <MagnifyingGlass size={24} aria-label="Search" />
        <S.UserIcon size={30} aria-label="User profile" />
        <img src="/img/cart-image.png" alt="Cart" />
      </S.IconsWrapper>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <S.MenuHeader>
          <X size={20} aria-label="Close menu" onClick={handleOpenCloseMenu} />
          <S.ProfileWrapper>
            <img src="/img/user-icon.png" alt="User icon" />
            <S.SignInWrapper>
              <p>Acesse sua conta</p>
              <S.SignIn href="#">
                <p>Entrar</p>
                <ArrowRight />
              </S.SignIn>
            </S.SignInWrapper>
          </S.ProfileWrapper>
        </S.MenuHeader>

        <S.MenuOptions>
          <S.MenuLink href="#">
            Clube
            <CaretRight size={20} aria-label="Acessar Clube" />
          </S.MenuLink>
          <S.MenuLink href="#">
            Loja
            <CaretRight size={20} aria-label="Acessar Loja" />
          </S.MenuLink>
          <S.MenuLink href="#">
            Baixe o app
            <CaretRight size={20} aria-label="Download app" />
          </S.MenuLink>
          <S.MenuLink href="#">
            Central de ajuda
            <CaretRight size={20} aria-label="Acessar Central de Ajuda" />
          </S.MenuLink>
        </S.MenuOptions>
      </S.MenuFull>
    </S.Wrapper>
  )
}
