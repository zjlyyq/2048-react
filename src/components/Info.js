const Info = (props) => {
  const { score } = props;
  return (
    <div className="info-board flex-x">
      <div className="mode-info ">2048</div>
      <div className="score-info flex-y">
        <div className="flex-x">
          <div className="score-detail">
            <div>得分</div>
            <div>{score}</div>
          </div>
          <div className="score-detail">
            <div>最得分</div>
            <div>17787</div>
          </div>
        </div>
        <div className="flex-x">
          <div className="op-detail">
            <div>菜单</div>
          </div>
          <div className="op-detail">
            <div>新游戏</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
