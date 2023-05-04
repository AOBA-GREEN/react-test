import React from "react";

//引数を指定すると、prppsをオブジェクトとして受け取れる。
export const ColorfulMessage = (props) => {
  //オブジェクトの分割代入で変数名を短縮
  const { color, children } = props;

  const contentStyle = {
    //JSでCSSのスタイルを設定するときは、プロパティに""をつける。
    color: color,
    fontSize: "18px"
  };
  //コンポーネントのタグの中身をprops.childrenで受け取れる。
  return <p style={contentStyle}>{children}</p>;
};

//デフォルトエクスポートは、1つのコンポーネントで1つしか使えない。
//export default ColorfulMessage;
