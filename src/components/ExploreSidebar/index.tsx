import * as S from './styles'

export type ExploreSidebarProps = {
  filterName: string
  items: string[]
  onCheck?: (value: string) => void
}

export function ExploreSidebar({
  filterName,
  items,
  onCheck
}: ExploreSidebarProps) {
  const handleValueChange = (value: string) => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <h3>{filterName}</h3>
      <S.RadioGroupRoot onValueChange={(value) => handleValueChange(value)}>
        {items.map((item) => (
          <S.ItemWrapper key={item}>
            <S.RadioGroupItem value={item} id={item}>
              <S.RadioGroupIndicator />
            </S.RadioGroupItem>
            <label htmlFor={item}>{item}</label>
          </S.ItemWrapper>
        ))}
      </S.RadioGroupRoot>
    </S.Wrapper>
  )
}
