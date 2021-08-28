var tl = new TimelineMax({onUpdate:updatePercentage});
tl.from('#name', .5, {x:200, opacity: 0});
tl.from('span', 1, { width: 0}, "=-.5");
tl.from('#office', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
tl.from('#building', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

function updatePercentage() {
            //percent.innerHTML = (tl.progress() *100 ).toFixed();
            tl.progress();
            console.log(tl.progress());
          }