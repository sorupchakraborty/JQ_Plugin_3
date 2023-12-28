
//js

wow = new WOW({
  animateClass: "animated",
  offset: 100,
});
wow.init();

document.getElementById("more").addEventListener("click", function () {
  const section = document.createElement("section");
  section.innerHTML = `
    <section class="wow fadeInDown" data-wow-duration="4s">
      <img src="images/bgpic.jpg" alt="" class="c-image">
    </section>
  `;
  this.parentNode.insertBefore(section, this);
});





//jquery

$(document).ready(function () {
  var arc = function (t) {
    return {
      x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
      y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI),
    };
  };

  $("#text1").curvedText({
    curve: arc,
    domain: [-0.2, 0.2],
    viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 },
  });
})