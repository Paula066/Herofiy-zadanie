import styled from 'styled-components'

export const UserList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: white;
  padding: 16px 16px;
  cursor: pointer;
  grid-gap: 20px;
  border: 1px solid white;
  position: relative;
  
  &:hover {
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
  }
  
  span {
    position: absolute;
    right: -100px;
    text-decoration: underline;
    color: white;
  }
 
  
  &:first-child {
    font-size: 16px;
    line-height: 22px;
    text-transform: uppercase;
    margin-bottom: 20px;
    background-color: rgb(251, 143, 32);
    border: 2px solid rgb(251, 143, 32);
    color: white;
    font-weight: 600;
    cursor: initial;
  }
  
  
  .userNameBox {
    display: flex;
    flex-direction: column;
  } 

`

export const ShowMore = styled.div`
    color: white;
    margin-bottom: 20px;
    display: grid;
    cursor: pointer;
    width: 100%;
    border: 1px solid white;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px 0;
    cursor: initial;
    
    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
   
`

export const UserListWrapper = styled.div`
  .header {
    display: flex;
  }
`
