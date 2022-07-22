export const Todo = (props) => {
  const { title, userid } = props;
  return <p>{`${title}(ユーザー名${userid})`}</p>;
};
