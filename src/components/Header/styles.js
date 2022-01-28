import styled from 'styled-components'

export const Container = styled.header`
  background-color: #f5f5f5;
  position: fixed;
  min-height: 65px;
  width: 100%;
  padding: 0 3%;
  transition: all 0.2s ease 0s;
  box-shadow: rgb(32 33 36 / 28%) 0px 1px 6px 0px;
  display: flex;
  align-items: center;
  > h1 {
    font-size: 18px;
    margin: 0 0 0 20px;
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }

    @media only screen and (min-width: 768px) {
      position: initial;
      height: auto;
      width: auto;
      background: transparent;
      justify-content: flex-start;
      ul {
        display: flex;
        li {
          margin: 0 15px 0 0;
          a {
            color: #333;
            font-size: 16px;
          }
        }
      }
    }
  .openMenu {
    left: 0;
  }
`
