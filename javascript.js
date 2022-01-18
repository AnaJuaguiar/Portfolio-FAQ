console.log("click!!!!");
const accordion = document.querySelectorAll(".accordion__question");
console.log("click2", accordion);
accordion.forEach((item) => {
  console.log("click2!!!!");
  item.addEventListener("click", (event) => {
    console.log("click3!!!!");
    let accColapse = item.nextElementSibling;

    if (!item.classList.contains("open")) {
      accColapse.style.display = "block";
      let accHeight = accColapse.clientHeight;

      console.log("click4");

      setTimeout(() => {
        accColapse.style.height = accHeight + "px";
        accColapse.style.display = "";
      }, 1);

      accColapse.classList = "accodion__collapse collapsing";

      //item.nextElementSibling.style.height = accHeight + 'px';

      setTimeout(() => {
        accColapse.classList = "accordion__collapse collapse open";
        accColapse.style.height = "";
      }, 300);
    } else {
      accColapse.classList = "accordion__collapse collapsing";
      setTimeout(() => {
        accColapse.classList = "accordion__collapse collapse";
      }, 300);
    }
    item.classList.toggle("open");

    //Add collapsing class to accordeon__collapse
    // Remmove collapsing lass and add open class
    accColapse.classList.toggle("open");
  });
});
