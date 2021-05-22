const Controller = () => (
  <div class="ops">
    <div class="direction UP" onclick="userTurn('UP')"></div>
    <div class="dir_container">
      <div class="direction LEFT" onclick="userTurn('LEFT')"></div>
      <div class="direction RIGHT" onclick="userTurn('RIGHT')"></div>
    </div>
    <div class="direction DOWN" onclick="userTurn('DOWN')"></div>
  </div>
);

export default Controller;
