import * as S from './styles'

export type CardProps = {
  title: string
  wineImage: string
  fullPrice: string
  discountPercentage?: string
  memberPriceInteger: string
  memberPriceCents: string
}

// acessibilidade (alt text)

export function Card({
  title,
  wineImage,
  fullPrice,
  discountPercentage,
  memberPriceInteger,
  memberPriceCents
}: CardProps) {
  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <S.ImageWrapper>
          <img src={wineImage} alt={title} />
          {discountPercentage && <S.PromoTagImage src="/img/promoTag.png" />}
        </S.ImageWrapper>

        <S.Title>{title}</S.Title>

        {discountPercentage && (
          <S.PromotionWrapper>
            <S.FullPrice>R$ {fullPrice}</S.FullPrice>
            <S.DiscountFlag>{discountPercentage}% OFF</S.DiscountFlag>
          </S.PromotionWrapper>
        )}

        <S.WineMemberWrapper>
          <p>Sócio Wine</p>
          <S.WineMemberPrice>
            <span>R$ </span>
            {memberPriceInteger}
            <span>,{memberPriceCents}</span>
          </S.WineMemberPrice>
        </S.WineMemberWrapper>

        <S.NotMemberInfo>Não sócio R$ {fullPrice}</S.NotMemberInfo>
      </S.InfoWrapper>
      <S.AddToCardButtom>Adicionar</S.AddToCardButtom>
    </S.Wrapper>
  )
}
