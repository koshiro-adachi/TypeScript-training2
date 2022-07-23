import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
//inlinestyleはstyleをオブジェクトとして書く方法。なのでオブジェクトの{}と
//オブジェクトはjavaScript要素なので{}で{}が二ついる。
//Appの方のcolorなどのprops指定はCSS要素を渡しているので{}がいらない。
//また、color:colorのように同じ文字でCSSを指定する時はcolorだけに省略できる。
