import styled from 'styled-components'

export const AddTodoListModalWrapperOverlay = styled.div`
position: fixed;
    top: -25%;
    left: 0;
    bottom: 0;
    right: 0;
    height: 125%;
    width: 100%;
    will-change: opacity;
    z-index: 1002;
    display: block;
    opacity: .9;
    background: #697180;
`

export const AddTodoListModalWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fafafa;
    margin: auto;
    overflow-y: auto;
    will-change: top,opacity;
    max-width: 700px;
    width: 90%;
    max-height: 90%;
    color: black;
    height: auto;
    z-index: 1003;
    opacity: 1;
    box-shadow: 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%), 0 11px 15px -7px rgb(0 0 0 / 20%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    border-radius: 20px;
    
    p {
      color: rgb(251,143,32);
    }
    
    input, button {
      outline: none;
      border: none;
      background-color: transparent;
    }
    
    button {
      color: rgb(251,143,32);
      text-transform: uppercase;
      font-size: 15px;
      width: 100%;
      text-align: right;
      margin-top: 20px;
      cursor: pointer;
     
    }
    
    input {
        border-bottom: 1px solid #9e9e9e;
        height: 3rem;
        width: 100%;
        font-size: 16px;
        box-shadow: none;
        box-sizing: content-box;
    }
    
`;

