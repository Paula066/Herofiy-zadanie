import styled from 'styled-components'

export const UserList = styled.div`
  display: grid;
  margin-bottom: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: white;
  border: 1px solid #E5EAF4;
  padding: 16px 16px;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
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
    border-bottom: 1px solid white;
    padding-bottom: 5px;
    margin-bottom: 20px;
    display: inline-flex;
    cursor: pointer;
`
