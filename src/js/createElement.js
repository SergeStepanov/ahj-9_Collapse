export default function createElem() {
  document.body.innerHTML = `<div class="box js__box">
      <button type="button" class="btn">Collapse</button>
      <div class="collapsible js__collapsible">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ipsa
        doloremque pariatur odio ex aut odit cupiditate ad officia et asperiores
        libero hic eum qui dolorum impedit, porro quas blanditiis. Itaque, vel!
        Possimus quas corporis obcaecati facere alias illo vero maiores esse
        error. Quas, facilis est! Ducimus, animi odit saepe modi, quisquam
        dignissimos provident ad ex excepturi placeat corrupti fugiat. Hic
        excepturi inventore consectetur fugit, saepe quibusdam, maiores quis
      </div>
    </div>
    <div class="copy">Copy</div>
  `;

  console.log('Test: createElem.js!');
}
