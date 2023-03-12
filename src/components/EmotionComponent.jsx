import { css } from '@emotion/react';

const EmotionComponent = () => {

  return (
    <>
      <h2 css={css`color: red;`}>
        Emotionのテスト
      </h2>
    </>
  )
}

export default EmotionComponent;