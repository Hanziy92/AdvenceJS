(()=>{"use strict";var e=document.querySelector(".btn"),t=document.querySelector(".box"),n=0;function r(){n++,t.style.top=n+"px",t.style.left=n+"px",n<295&&requestAnimationFrame(r)}e.addEventListener("click",(function(){return requestAnimationFrame(r)}));var i=requestAnimationFrame(r);cancelAnimationFrame(i)})();
//# sourceMappingURL=bundle.js.map