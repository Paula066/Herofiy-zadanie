import styled from 'styled-components'

const heightButton = 30;

const CloseButtonWrapper = styled.div`
    width: ${heightButton}px;
    height: ${heightButton}px;
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
    padding: 5px;
  
    .box {
        height: ${heightButton}px;
        width: 2px;
        margin-left: 12px;
        background-color: black;
        transform: rotate(45deg);
        Z-index: 1;
      
    > div {
        height: ${heightButton}px;
        width: 2px;
        background-color: black;
        transform: rotate(90deg);
        Z-index: 2;
    }
 }

   
`

export default CloseButtonWrapper;
