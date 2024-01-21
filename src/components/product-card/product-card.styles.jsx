// .product-card-container {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     height: 350px;
//     align-items: center;
//     position: relative;
  
//     img {
//       width: 100%;
//       height: 95%;
//       object-fit: cover;
//       margin-bottom: 5px;
//     }
  
//     button {
//       width: 80%;
//       opacity: 0.8;
//       position: absolute;
//       top: 255px;
//       display: none;
//     }
  
//     &:hover {
//       img {
//         opacity: 0.8;
//       }
  
//       button {
//         opacity: 0.85;
//         display: block;
//       }
//     }
  
//     .footer {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       font-size: 18px;
//       color: #333;
  
//       .name {
//         margin-bottom: 15px;
//       }
  
//       .price {
//       }
//     }
//   }

import styled from "styled-components"
import Button from "../button/button.component"

export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #333;
`

export const Name = styled.span`
  margin-bottom: 15px;
`

export const Price = styled.span`
`

export const AddToCardButton = styled(Button)`
  width: 80%;
  opacity: 0.8;
  position: absolute;
  top: 255px;
  display: none;
`

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover ${AddToCardButton} {
    opacity: 0.85;
    display: block;
  }

  &:hover ${Image} {
    opacity: 0.8;
  }
`