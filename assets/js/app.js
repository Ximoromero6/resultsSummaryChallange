(function () {
  const container = document.querySelector(".summary_list");

  fetch(
    "https://github.com/Ximoromero6/resultsSummaryChallange/blob/main/data.json"
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        let newItem = document.createElement("li");
        newItem.innerHTML = `
        <img
        src="${item.icon}"
        alt=""
        class="icon__summary"
      />
      <p class="title__summary">${item.category}</p>
      <div class="puntuation_summary">
        <p><small>${item.score}</small><small> / 100</small></p>
      </div>
        `;
        newItem.classList.add("summary_item");

        container.append(newItem);
      });
    });
})();
