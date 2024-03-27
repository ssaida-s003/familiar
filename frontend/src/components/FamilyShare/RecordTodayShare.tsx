import * as r from '@components/FamilyShare/style/RecordTodayShareStyle'
import BeforeRecord from '@components/FamilyShare/BeforeRecord'
import Recording from '@components/FamilyShare/Recording'
import AfterRecord from '@components/FamilyShare/AfterRecord'
import { useShareStepStore } from '@stores/familyShare'

const RecordTodayShare = () => {
  const { step } = useShareStepStore()
  return (
    <r.Container>
      {step == 0 && <BeforeRecord />}
      {step == 1 && <Recording />}
      {step == 2 && <AfterRecord />}
    </r.Container>
  )
}

export default RecordTodayShare
