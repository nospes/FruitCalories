import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #146356;
  border-radius: 7px;
  margin: 0 0 10px 0;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    box-shadow: rgb(32 33 36 / 28%) 0px 1px 6px 0px;
  }
  > .description {
    padding: 20px 10px;
    > h3 {
      color: #F3C892;
      font-size: 16px;
    }
    > p {
      color: #FFF1BD;
      font-size: 13px;
    }
  }
  img {
    max-width: 100px;
    border-radius: 7px;
    height: 100%;
  }
`
