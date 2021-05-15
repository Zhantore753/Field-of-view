const SET_SELECTED_WORDS = "SET_SELECTED_WORDS";
const SET_WORD_COUNT = "SET_WORD_COUNT";
const SET_LETTER_COUNT = "SET_LETTER_COUNT";
const SET_SPEED = "SET_SPEED";
const SET_START_DISTANCE = "SET_START_DISTANCE";
const SET_DISTANCE_INCREASE = "SET_DISTANCE_INCREASE";

interface stateInterface {
  selectedWords: string[],
  wordCount: number,
  letterCount: number,
  speed: number,
  startDistance: number,
  distanceIncrease: number
}

const defaultState: stateInterface = {
  selectedWords: [],
  wordCount: 6,
  letterCount: 8,
  speed: 1,
  startDistance: 25,
  distanceIncrease: 25
}

const main = (state = defaultState, action) => {
  switch(action.type){
    case SET_SELECTED_WORDS:
      return { 
        ...state,
        selectedWords: action.payload
      };
    case SET_WORD_COUNT: 
      return{
        ...state,
        wordCount: action.payload
      }
    case SET_LETTER_COUNT: 
      return{
        ...state,
        letterCount: action.payload
      }
    case SET_SPEED: 
      return{
        ...state,
        speed: action.payload
      }
    case SET_START_DISTANCE:
      return{
        ...state,
        startDistance: action.payload
      }
    case SET_DISTANCE_INCREASE:
      return{
        ...state,
        distanceIncrease: action.payload
      }
    default:
      return {...state};
    }
}

export const setSelectedWords = (words: string[]) => ({type: SET_SELECTED_WORDS, payload: words});
export const setWordCount = (word: number) => ({type: SET_WORD_COUNT, payload: word});
export const setLetterCount = (letter: number) => ({type: SET_LETTER_COUNT, payload: letter});
export const setSpeed = (speed: number) => ({type: SET_SPEED, payload: speed});
export const setStartDistance = (startDistance: number) => ({type: SET_START_DISTANCE, payload: startDistance});
export const setDistanceIncrease = (distanceIncrease: number) => ({type: SET_DISTANCE_INCREASE, payload: distanceIncrease});

export default main;