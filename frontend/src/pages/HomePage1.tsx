import * as h from '@pages/style/HomePageStyle1.tsx'
import { Animator, batch, Fade, MoveOut, ScrollContainer, ScrollPage, Sticky } from 'react-scroll-motion'
import FirstPageContent from '@components/Home/FirstPageContent'

const HomePage1 = () => {
  return (
    <h.Container>
      <ScrollContainer snap="mandatory">
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(-200, -200))}>
            <FirstPageContent />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </h.Container>
  )
}

export default HomePage1
