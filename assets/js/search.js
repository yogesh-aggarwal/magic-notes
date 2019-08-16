function startEvent() {
  let search = document.getElementById("search-box");
  search.addEventListener("input", function() {
    let cards = document.getElementById("cards").getElementsByClassName("card");
    console.log(cards);

    Array.from(cards).forEach(element => {
      let content = element.getElementsByClassName("card-text")[0].innerText;
      if (content.includes(search.value.toLowerCase())) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  });
}

function search() {
  let query = document.getElementById("search-box").value;
}
