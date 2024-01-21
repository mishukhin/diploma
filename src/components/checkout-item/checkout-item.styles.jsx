import styled from 'styled-components'

export const CheckoutItemContainer = styled.tr`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  justify-content: space-between;
  align-items: center;
  
  .image-container {
    img {
      width: 100%;
      height: 100%;
    }
  }

.quantity {
    display: flex;
    justify-content: center;
    align-items: center;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    cursor: pointer;
  }
`