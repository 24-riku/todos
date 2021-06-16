import "./styles.css";

const onClick = () => {
  const inputText = document.getElementById("add-text").value;

  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    delteFromIncompleteList(completeButton.parentNode.parentNode);
    const addTarget = completeButton.parentNode.parentNode;
    const text = addTarget.firstElementChild.firstElementChild.innerText;
    addTarget.firstElementChild.textContent = null;

    const p = document.createElement("p");
    p.innerText = text;

    const button = document.createElement("button");
    button.innerText = "戻す";

    addTarget.firstElementChild.appendChild(p);
    addTarget.firstElementChild.appendChild(button);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    delteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);

  const delteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

  document.getElementById("add-text").value = "";
};

document
  .getElementById("add-bottun")
  .addEventListener("click", () => onClick());
