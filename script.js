var menu=document.querySelector(".nav i");var cross=document.querySelector(".full i");function menubar(){var tl=gsap.timeline()
  tl.to(".full",{right:0,duration:0.344,})
  tl.from(".full li",{x:150,opacity:0,duration:0.344,stagger:0.1,})
  tl.from(".full i",{opacity:0,})
  tl.pause()
  menu.addEventListener("click",function(){tl.timeScale(1).play()})
  cross.addEventListener("click",function(){tl.timeScale(1.88).reverse()})
  document.querySelectorAll(".full a").forEach(link=>{link.addEventListener("click",function(e){const target=this.getAttribute("href");tl.timeScale(1.88).reverse();setTimeout(()=>{document.querySelector(target).scrollIntoView({behavior:"smooth"})},400)})})}
  menubar();gsap.registerPlugin(ScrollTrigger);gsap.from(".section2 .service-cards .service-card",{opacity:0,y:50,duration:0.33,scrollTrigger:{trigger:".section2",start:"top 80%",end:"top 30%",}});gsap.registerPlugin(ScrollTrigger);ScrollTrigger.matchMedia({"(min-width: 601px)":function(){gsap.from(".section1 .child2 .animate",{x:-200,opacity:0,duration:0.5,delay:0.233,stagger:0.2,scrollTrigger:{trigger:".child2",start:"top 70%",toggleActions:"play none none none",markers:!1}})},"(max-width: 600px)":function(){gsap.from(".child2 .animate",{x:-200,opacity:0,duration:0.5,delay:0.233,stagger:0.2,scrollTrigger:{trigger:".child2",start:"top 90%",toggleActions:"play none none none",markers:!1}})}});gsap.from(".child1 h1",{y:-100,opacity:0,duration:2,scrollTrigger:{trigger:".child1",start:"top 80%",},})
  function breakTheText(){const h1=document.querySelector('.child1 h1');const h1Text=h1.textContent.trim();const words=h1Text.split(" ");let clutter="";words.forEach(word=>{clutter+=`<span style="display:inline-block; margin-right: 8px;">${word}</span>`});h1.innerHTML=clutter}
  breakTheText();gsap.from(".child1 h1 span",{y:100,duration:0.6,delay:0.5,stagger:0.2,opacity:0,ease:"power4.out"});const scriptURL='https://script.google.com/macros/s/AKfycbwHb5i-3u5b0gTFqv3fcGMPjBCfoRWHGWcTZZar6-iCA5CgZnGPeIlAugGJpWH_6UdXQw/exec'
  const form=document.forms['submit-to-google-sheet']
  const msg=document.getElementById('msg')
  form.addEventListener('submit',e=>{e.preventDefault()
  fetch(scriptURL,{method:'POST',body:new FormData(form)}).then(response=>{msg.innerHTML="Message Sent Successfully!";msg.className="success";setTimeout(()=>{msg.innerHTML="";msg.className=""},3500);form.reset()}).catch(error=>{msg.innerHTML="Message couldn't be sent";msg.className="error";setTimeout(()=>{msg.innerHTML="";msg.className=""},3500);form.reset()})})