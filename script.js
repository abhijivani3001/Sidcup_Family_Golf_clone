var crsr=document.querySelector("#cursor");
var blurcrsr=document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
  // console.log(dets);
  crsr.style.left=dets.x-20/2+"px"; // 25=width & height of cursor 
  crsr.style.top=dets.y-20/2+"px";
  blurcrsr.style.left=dets.x-300/2+"px"; // 300=width & height of cursor-blur
  blurcrsr.style.top=dets.y-300/2+"px";
})

gsap.to("#nav",{
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1 // used to change effects according to scrolling, int value is used to make effects smoother(as value is increased, the animation is slower)
  }
})

gsap.to("#main",{
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -25%",
    end: "top -60%",
    scrub: 3
  }
})