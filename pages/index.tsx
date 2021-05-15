import { Settings, Title } from '../styles/styles';
import Range from '../components/Range';
import GameSpeed from '../components/GameSpeed';
import {data} from '../data/words';
import { setDistanceIncrease, setLetterCount, setSelectedWords, setSpeed, setStartDistance, setWordCount } from '../redux/mainReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import RangeInputsInit from '../utils/RangeInput';

const Home = () => {
  const router = useRouter();
  const wordCount = useSelector((state: RootState) => state.main.wordCount);
  const letterCount = useSelector((state: RootState) => state.main.letterCount);
  const speed = useSelector((state: RootState) => state.main.speed);
  const startDistance = useSelector((state: RootState) => state.main.startDistance);
  const distanceIncrease = useSelector((state: RootState) => state.main.distanceIncrease);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedWords([]));
    RangeInputsInit();
  }, []);

  const gameStartHander = async () => {
    const filteredData: string[] = data.filter((word: string) => word.length === letterCount);

    let wordCounted: number = wordCount;
    if(wordCount > filteredData.length){
      wordCounted = filteredData.length - 1;
      if(filteredData.length < 1){
        alert('Нет слов по заданным настройкам, попробуйте изменить настройки');
        return;
      }
      alert(`Не удалось найти ${wordCount} слов, было взято максимально близкое число ${wordCounted}`);
    }

    filteredData.sort(() => Math.random() - 0.5);

    if(filteredData.length > wordCounted){
      filteredData.splice(wordCounted);
    }

    dispatch(setSelectedWords(filteredData));
    router.push('/game');
  }

  return(  
    <div>
      <Title>Тренажер «Поле зрения»</Title>
      <Settings>
        <Range state={wordCount} setState={setWordCount} title="Сколько слов" min={1} max={10} step={1}/>
        <Range state={startDistance} setState={setStartDistance} title="Стартовое расстояние" min={5} max={40} step={5}/>
        <Range state={letterCount} setState={setLetterCount} title="Сколько букв в словах" min={3} max={16} step={1}/>
        <Range state={distanceIncrease} setState={setDistanceIncrease} title="Увеличение расстояния" min={5} max={40} step={5}/>
        <GameSpeed speed={speed} setSpeed={setSpeed}/>
        <div className="game-start">
          <button onClick={gameStartHander}>СТАРТ</button>
        </div>
      </Settings>
    </div>
  )
}

export default Home;