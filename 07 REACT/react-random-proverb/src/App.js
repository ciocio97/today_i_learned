import logo from './logo.svg';
import './App.css';

function App() {

  const proverbs = [
    "계집 바뀐 건 모르고 젓가락 짝 바뀐 건 안다",
    "고기는 씹어야 맛이요 말은 해야 맛이라",
    "나룻이 석 자라도 먹어야 샌님",
    "거미는 줄을 쳐야 벌레를 잡는다",
    "거지도 손 볼 날이 있다",
    "게으른 선비 책장 넘기기",
    "바늘 도둑이 소도둑 된다",
    "바다는 메워도 사람의 욕심은 다 못 채운다",
    "바보는 죽어야 고쳐진다",
    "밟힌 지렁이 꿈틀한다",
    "겨 묻은 개가 똥 묻은 개를 흉 본다",
    "겨울 바람이 봄 바람 보고 춥다 한다",
    "겨울이 다 되어야 솔이 푸른 줄 안다",
    "고기는 씹어야 맛이 나고 말은 해야 시원하다",
    "고래 싸움에 새우 등 터진다",
    "고사리도 꺾을 때 꺾는다",
    "고생 끝에 낙이 온다",
    "고운 일 하면 고운 밥 먹는다",
    "고쟁이를 열두 벌 입어도 보일 것은 다 보인다",
    "곡식 이삭은 잘 될수록 고개를 숙인다",
    "골 나면 보리 방아 더 잘 찧는다",
    "공든 탑이 무너지랴?",
    "행실을 배우라 하니까 포도청 문고리를 뺀다",
    "호랑이 굴에 들어가야 호랑이 새끼를 잡는다"
  ];

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
