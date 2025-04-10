

// 버블
function bubble() {
    const element = /*#__PURE__*/
    React.createElement("div", { className: "bottom-particles" },
    [...Array(50)].map((i, key) => /*#__PURE__*/
    React.createElement("div", { className: "bubble", key: key })));
  
  
    ReactDOM.render(
    element,
    document.getElementById('bubble'));
  
  }
  
  bubble();

//커서
let btn_yes;
let btn_no;
let cursorItem;
let circle;
let x = 0,
    y = 0;
let mx = 0,
    my = 0;
const wrap01 = document.querySelector('body');
window.onload = function () {

    btn_no = document.querySelector('body .in');

    cursorItem = document.querySelector('.cursorItem');
    circle = cursorItem.querySelector('.cursorItem .circle');



    btn_no.addEventListener('mouseenter', function (e) {
        circle.style.transform = "scale(.3)";
        circle.style.backgroundColor = "Red";
    })
    btn_no.addEventListener('mouseout', function (e) {
        circle.style.transform = "scale(1)";
    })

    window.addEventListener('mousemove', function (e) {
        x = e.clientX;
        y = e.clientY;
        cursorItem.style.transform = "translate(" + x + "px," + y + "px)";
    })


    loop();
}

function loop() {
    mx += (x - mx) * .09;
    my += (y - my) * .09;
    cursorItem.style.transform = "translate(" + mx + "px, " + my + "px )";

    // requestAnimationFrame(loop);
}