document.addEventListener("DOMContentLoaded", () => {
  const buttonList = document.getElementById("buttonList");
  const previewFrame = document.getElementById("previewFrame");
  const goButton = document.getElementById("goButton");

  for (let i = 1; i <= 10; i++) {
    const folder = String(i).padStart(2, '0');
    const path = `${folder}/${folder}.html`;

    // 카드 생성
    const card = document.createElement("div");
    card.className = "button-card";

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = `${folder}'s Style`;

    const button = document.createElement("button");
    button.className = "button-link";
    button.textContent = `${folder} | Hello!`;

    button.addEventListener("click", () => {
      previewFrame.src = path;
      goButton.href = path;
    });

    card.appendChild(label);
    card.appendChild(button);
    buttonList.appendChild(card);
  }
});