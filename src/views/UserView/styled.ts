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
  color: #5c6169;
  
  @media (max-width: 800px) {
      grid-template-columns: initial;
    }
  
  &:hover {
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
  }
  
  .list {
    
     @media (max-width: 800px) {
      display: flex
    }
  }
  
  span {
    margin-right: 20px;
    display: none;
    
    @media (max-width: 800px) {
      display: inline-block;
    }
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
    
     @media (max-width: 800px) {
      display: none;
    }
    
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
    box-sizing: border-box;
    
      @media (max-width: 500px) {
          grid-template-columns: initial;
          justify-content: center;
      }
    
    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        @media (max-width: 500px) {
         margin-bottom: 20px;
      }
    }
   
`

export const UserListWrapper = styled.div`
  .header {
    display: flex;
  }
`
