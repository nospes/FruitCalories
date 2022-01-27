import styled from 'styled-components'

export const Container = styled.main`
  height: 100%;
  > section {
    padding: 80px 3% 20px;
    height: 100%;
    > .return {
      cursor: pointer;
      display: flex;
      align-items: center;
      margin: 0 0 10px 0;
      > p {
        margin-left: 10px;
        font-size: 12px;
        color: #0000ff
      }
    }
  }
`

export const Card = styled.div`
  background-color:  #146356;
  box-shadow: rgb(32 33 36 / 28%) 0px 1px 6px 0px;
  margin: 20px 0 0 0;
  width: 100%;
  border-radius: 7px;
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
  > .content {
    padding: 20px 10px;
    > h2 {
      color: #FFF1BD;
      font-size: 12px;
      margin: 10px 0 0 0;
      text-transform: uppercase;
    }
    > h3 {
      color: #FFF1BD;
      font-size: 16px;
      text-transform: uppercase;
      margin: 5px 0;
    }
    > p {
      color: #F3C892;
      font-size: 14px;
      text-transform: uppercase;
    }
  }
  > img {
    width: 100%;
    max-height: 400px;
    object-fit: center;
    border-radius: 7px 7px 0 0;
    @media only screen and (min-width: 768px) {
      max-width: 50%;
    }
  }
`
