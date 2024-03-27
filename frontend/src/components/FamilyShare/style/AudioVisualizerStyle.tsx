import styled from 'styled-components'

export const VisualizerContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 4px;
`

export const Bar = styled.div.attrs<{ height: number }>(({ height }) => ({
  style: {
    height: `${height}%`,
  },
}))<{ height: number }>`
  background-color: black;
  min-height: 10px;
  width: 3px;
  transition: height 0.05s ease-in-out;
  border-radius: 1rem;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
`
