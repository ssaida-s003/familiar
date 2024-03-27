import styled from 'styled-components'

export const VisualizerContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 2px;
`

export const Bar = styled.div.attrs<{ height: number }>(({ height }) => ({
  style: {
    height: `${height}%`,
  },
}))<{ height: number }>`
  background-color: red;
  width: 5px;
  transition: height 0.05s ease-in-out;
  border-radius: 1rem;
`
