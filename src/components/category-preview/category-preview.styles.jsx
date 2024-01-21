import styled from 'styled-components'

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;  
  max-width: 1700px;
  margin: 0 auto;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer
  }
`  

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
`
