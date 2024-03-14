import { useEffect, useState } from 'react'
import * as t from '@components/Home/style/ThirdPageContentStyle'

const ThirdPageContent = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  console.log(scrollY)

  return (
    <t.Container>
      <t.TitleContainer>
        <t.Title>가족들의 일상까지 싱싱하게 보관하는</t.Title>
        <t.Title>
          <b>FAMILY</b> HUB BESPOKE
        </t.Title>
      </t.TitleContainer>
      <t.ImgContainer>
        <t.Refrigerator src="public/icon/icon_refrigerator.png" scrollY={scrollY} />
      </t.ImgContainer>
    </t.Container>
  )
}

export default ThirdPageContent
