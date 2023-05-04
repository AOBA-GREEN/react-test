/**eslint react-hooks/exhaustive-deps: off */

//Reactのコンポーネントファイルは、拡張子を.jsxとする。（.jsでも動きはする）
//コンポーネント名は必ずパスカルケースにする。(例：NewComponent)

import React, { useEffect, useState } from "react";
//通常エクスポートを使ったコンポーネントは、必ず分割代入でインポートする。
import { ColorfulMessage } from "./components/ColorfulMessage";

//JSX記法：JS内でHTMLタグを作成し、関数からreturnして画面に表示する
//ただし作成するHTMLは、全体が1つのタグで囲まれていないといけない。
//複数行のHTMLを作る場合、<React.Fragment>か<></>で囲む。
const App = () => {
  console.log("first");
  //ステート
  //1つ目に変数名、2つ目にステートを更新する関数名、useStateの引数は変数の初期値
  const [num, setNum] = useState(0);
  const [showFace, setShowFace] = useState(true);

  //ステートの値の切り替え
  const onClickCountUp = () => {
    //setNumの引数が変更後のnumの値。処理内容によって動的にnumを変更できる。
    setNum(num + 1);
  };
  const onClickSwitchShow = () => {
    setShowFace(!showFace);
  };

  //useEffectの第二引数に空の配列を渡すと、最初のロード時1回だけ処理を実行する。
  //第二引数の配列に変数を設定すると、指定した変数の値が変わったときだけ処理を実行する。
  useEffect(() => {
    if (num % 3 === 0) {
      showFace || setShowFace(true);
    } else {
      showFace && setShowFace(false);
    }
  }, [num]);

  //画面のレンダリング
  //return内はHTMLとして認識される。イベント名はキャメルケースになる。
  //{}内はJSとして処理される。
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="green">How are you?</ColorfulMessage>
      <ColorfulMessage color="cyan">I'm happy!</ColorfulMessage>
      <button onClick={onClickCountUp}>CountUp</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShow}>on/off</button>
      {showFace && <p>(◞‸◟)</p>}
    </>
  );
};

//ここで指定した関数は、他のJSで使える。
export default App;

//再レンダリングの条件
//①ステートが更新されたとき
//②受け取るpropsの中身が変わったとき
//③親コンポーネント（カラフルメッセージから見たApp）が再レンダリングされたとき

//Too many re-renders.のエラーが起きたら、再レンダリングを繰り返して無限ループしている場合がある。
//再レンダリングの発生タイミングに注意してコードを見直す必要がある。
