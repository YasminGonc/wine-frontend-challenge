import * as S from './styles'
import * as RadioGroup from '@radix-ui/react-radio-group'

export function ExploreSidebar() {
  return (
    <RadioGroup.Root>
      <S.ItemWrapper>
        <S.RadioGroupItem value="default" id="default">
          <S.RadioGroupIndicator />
        </S.RadioGroupItem>
        <label htmlFor="default">Default</label>
      </S.ItemWrapper>
    </RadioGroup.Root>
  )
}
