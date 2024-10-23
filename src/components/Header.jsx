import "./Header.css";

const Header = () => {
  const nowDate = new Date();
  let year = nowDate.getFullYear();
  let month = nowDate.getMonth() + 1;
  let date = nowDate.getDate();

  return (
    <div className="Header">
      <h3>오늘은 📅</h3>
      <h1>{`${year}년 ${month}월 ${date}일`}</h1>
    </div>
  );
};

export default Header;
