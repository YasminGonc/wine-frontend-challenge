import { useState } from 'react'
import { List, MagnifyingGlass, X } from '@phosphor-icons/react'
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

        {/* <S.MenuNav>
          <S.MenuLink href="#">Clube</S.MenuLink>
          <S.MenuLink href="#">Loja</S.MenuLink>
          <S.MenuLink href="#">Produtores</S.MenuLink>
          <S.MenuLink href="#">Ofertas</S.MenuLink>
          <S.MenuLink href="#">Eventos</S.MenuLink>
        </S.MenuNav> */}
      </S.MenuWrapper>

      <S.IconsWrapper>
        <MagnifyingGlass size={24} aria-label="Pesquisar" />
        <S.UserIcon />
        <img src="/img/cart-image.png" />
      </S.IconsWrapper>

      <S.MenuFull isOpen={isOpen}>
        <p>clube</p>
        <X onClick={handleOpenCloseMenu} />
      </S.MenuFull>
    </S.Wrapper>
  )
}
