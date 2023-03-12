import styled from  'styled-components';

// 変数(アッパーキャメル)で定義する。
// styled.タグ名 `CSSの内容`

const Wrapper = styled.div`
  border: 1px solid red;
`
const BaseTitle = styled.h1`
  color: blue;
`
const Title = styled(BaseTitle)`
  background-color: lightgray;
`

const StyledComponent = () => {
  return (<>
    <Wrapper>
      <Title>ここに文字が入ります</Title>
    </Wrapper>
  </>)
}

export default StyledComponent;