import styled from 'styled-components';

const UserDetailsWrapper = styled.div`

   color: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
  

  .name {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .arrowBack {
    position: absolute;
    left: 40px;
    top: 40px;
    cursor:pointer;
    padding: 10px;
  }
  
  .addTodoList {
    position: absolute;
    right: 40px;
    bottom: 40px;
  }
  
  .todoList {
    display: inline-flex;
    flex-direction: column;
    height: calc(100vh - 100px);
    overflow: scroll;
    
    &__delete {
      cursor:pointer;
      padding: 0 10px;
    }
    
    &__box {    
      background-color: transparent;
      border: 2px solid rgb(251,143,32);
      border-radius: 20px;
      margin-bottom: 20px;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 20px;
      position: relative;
      box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%), inset 0 -1px 0 rgb(0 0 0 / 7%);
      
      button {
        display: inline-flex;
      }
    }
    
    &__titleBox {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      
      > div {
        align-items: center;
        display: flex;
      }
      
      span {
        margin-right: 5px;
      }
    }
    
  }
`

export default UserDetailsWrapper;
