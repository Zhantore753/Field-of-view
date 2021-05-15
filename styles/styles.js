import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 10px 5px;
        display: flex;
        justify-content: center;
        background: #F7F9FF;
        min-height: 100%;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 48px;
        line-height: none;
      }

      h5{
        margin: 0;
      }
    `}
  />
);

const tytleStyles = css`
  color: #2B3172;
  text-align: center;
  font-size: 72px;
  margin: 58px 0 0 0;
`;

const settingsStyles = css`
  margin-top: 179px;
  max-width: 1460px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .game-start{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
      background: #FDD207;
      border-radius: 81.5275px;
      width: 390px;
      height: 108px;
      font-size: 48px;
      color: #2B3172;
      border: none;
      outline: none;
      transition: all 0.3s;
      cursor: pointer;

      &:hover{
        opacity: 0.75;
      }
    }
  }
`;

const rangeCardStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 48.2498px;
  max-width: 668px;
  width: calc(50% - 40px);
  margin-bottom: 38px;
  box-sizing: border-box;
  padding: 32px 14px 18px 14px;
  margin-right: 40px;
  &:nth-of-type(even){
    margin-right: 0px;
    width: 50%;
  }

  h5{
    color: #371548;
    font-size: 48px;
    margin-bottom: 14px;
  }

  .range {
    margin-top: 14px;
    display: flex;
    width: 533px;
  }
  
  .range__slider {
    width: 100%;
  }
  
  .form-group {
    display: flex;
    flex-direction: column; 
    justify-content: center;
  }
  
  .range__slider [type="range"] {
    width: 100%;
    -webkit-appearance: none;
    height: 23px;
    border-radius: 14px;
    background: #fff;
    outline: none;
    padding: 0;
    margin: 0;
  }
  
  /* custom thumb */
  .range__slider [type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #0E0C0B;
    border: #FDD207 12px solid;
    cursor: pointer;
    -webkit-transition: all .15s ease-in-out;
    transition: all 0.15s ease-in-out;
  }
  
  .range__slider [type="range"]::-webkit-slider-thumb:hover {
    background: #FDD207;
    border: #0E0C0B 12px solid;
  }
  
  .range__slider [type="range"]::-moz-range-thumb {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 50%;
    background: #0E0C0B;
    border: #FDD207 12px solid;
    cursor: pointer;
    -webkit-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
  }
  
  .range__slider [type="range"]::-moz-range-thumb:hover {
    background: #FDD207;
    border: #0E0C0B 12px solid;
  }
  
  /* remove border */
  input::-moz-focus-inner, input::-moz-focus-outer {
    border: 0;
  }
`;

const rangeNumbersStyles = css`
  padding: 0px 4px;
  max-width: 533px;
  width: 100%;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 38px;
  color: #000000;
`;

const rangeNumberStyles = css`
  max-width: 45px;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
`;

const gameSpeedHeadStyles = css`
  color: #371548;

  input{
    width: 126px;
    height: 60px;
    font-size: 48px;
    padding: 2px auto;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 19.9968px;
    -moz-appearance: textfield;
    text-align: center;
    outline: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const gameSpeedBtnsStyles = css`
  display: flex;

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    cursor: pointer;
    font-weight: 900;
    width: 92px;
    height: 92px;
    background: #FDD207;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 60px;
    line-height: 0;
    &:nth-of-type(1){
      margin-right: 22px;
    }
  }
`;

const gameWrapStyles = css`
  display: flex;
  font-size: 60px;
  align-items: center;
  color: #371548;
  height: calc(100% - 120px);
  span{
    font-size: 130px;
    margin: 0 166px;
  }
`

const endGameStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify:content: center;
`

export const Title = styled.div`${tytleStyles}`;
export const Settings = styled.div`${settingsStyles}`;
export const RangeCard = styled.div`${rangeCardStyles}`;
export const RangeNumbers = styled.div`${rangeNumbersStyles}`;
export const RangeNumber = styled.div`${rangeNumberStyles}`;
export const GameSpeedHead = styled.div`${gameSpeedHeadStyles}`;
export const GameSpeedBtns = styled.div`${gameSpeedBtnsStyles}`;
export const GameWrap = styled.div`${gameWrapStyles}`;
export const EndGame = styled.div`${endGameStyles}`;