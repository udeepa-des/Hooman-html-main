// blending stuff

document.body.addEventListener("mousemove", (evt) => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY,
  });

  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1,
  });
});

//  gsap anim stuff

let hero = gsap;

hero.fromTo(
  "#lumoz-placeholder",
  { opacity: 1 },
  { opacity: 0, duration: 2.5, ease: "expo.inOut" }
);
hero.fromTo(
  "#lumoz-top-base",
  { x: 200 },
  { x: 0, duration: 1, delay: 2.5, ease: "expo.inOut" }
);
hero.fromTo(
  "#lumoz-hero-text-base",
  { y: 200, skewY: 5, opacity: 0 },
  { y: 0, skewY: 0, opacity: 1, duration: 1, delay: 1, ease: "expo.inOut" }
);
hero.fromTo(
  "#lumoz-hero-sub",
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 1.5, ease: "expo.inOut" }
);
hero.fromTo(
  ".lumoz-button",
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2, ease: "expo.inOut" }
);
hero.fromTo(
  "#anim",
  { opacity: 0 },
  { opacity: 0.8, duration: 1, delay: 0.5, ease: "expo.inOut" }
);



var rule = CSSRulePlugin.getRule("#lumoz-hero-blend:after");
hero.fromTo(
  rule,
  {
    cssRule: {
      opacity: 0,
    },
  },
  {
    cssRule: {
      opacity: 0.15,
    },
    duration: 1,
    delay: 2.2,
    ease: "expo.inOut",
  }
);

// lumoz progress stuff

const base = document.getElementById("progress-base");
const progress = document.getElementById("progress");
const logo = document.getElementById("logo");
const up = document.getElementById("up");

let length = progress.getTotalLength();

progress.style.strokeDasharray = length;
progress.style.strokeDashoffset = length;

const animate = (value) => {
  progress.style.strokeDashoffset = length - value;
};

let max =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
let val = length;

window.addEventListener("scroll", (e) => {
  val = (length / max) * window.scrollY;
  animate(val);

  if (val > length - 30) {
    up.style.visibility = "visible";
    logo.style.visibility = "hidden";
  } else {
    up.style.visibility = "hidden";
    logo.style.visibility = "visible";
  }
});

// top scroll

base.addEventListener("click", () => {
  toTop();
});

const toTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// lottie stuff

window.onload = () => {
  animation.stop();
  run();
};

const run = () => {
  setTimeout(() => {
    animation.playSegments([0, 43], true);
    //animation.play();
  }, 1500);
};

let animation = bodymovin.loadAnimation({
  container: document.getElementById("anim"),
  path: "assets/data.json",
  renderer: "canvas",
  loop: false,
  autoplay: false,
});

const triggerAnim = (section, dir) => {
  console.log(section);
  const animbase = document.getElementById("anim");

  switch (section) {
    case "1":
      animbase.style.visibility = "visible";
      animation.playSegments([0, 43], true);
      console.log(0, 23);
      break;

    case "2":
      animbase.style.visibility = "visible";
      animation.playSegments([42, 120], true);
      console.log(23, 45);
      break;

    case "3":
      animbase.style.visibility = "visible";
      animation.playSegments([119, 150], true);
      console.log(23, 45);
      break;
    case "4":
      animbase.style.visibility = "visible";
      animation.playSegments([165, 225], true);
      console.log(23, 45);
      break;
    case "5":
      animbase.style.visibility = "hidden";
  }
};

let observer = new IntersectionObserver((e) => {
  var elem = e.filter((entry) => entry.isIntersecting);
  if (elem.length > 0) {
    elem = elem[0].target;
    triggerAnim(elem.dataset.order);
    console.log(elem.dataset.order);
  }
});

document.querySelectorAll("section").forEach((ele) => observer.observe(ele));

// project scope section

const scope = {
  intro: `<span class="text-highlight">HOOMAN, </span> When it comes to online dating, the person we like can be a psychopath or worse even though from the first impression to be the most honest and innocent person. But if we can get to know this person to some extent the risks can be mitigated, so using some advanced features with dating sites will help users to be more careful and to pick a decent person to spend the rest of their life, such as having a personality test using an algorithm, the system calculates the personality of the user and suggests mutual users same as the user’s personality, but this is not enough if the users are more matured with the system. `,

  background: `In society there are two types of people some are introverts and extroverts. Introverts prefer not to be socialized much and could be shy to talk to people, but in the end, we are all humans we all need someone to be with not to be lonely, so at a point in their life they need a mate to live with, so they could date or marry someone, some of the introverts don’t know how to start a conversation even if they do most of the time they would feel awkward when having a conversation, to overcome this new advanced series of features have been added. Using a profile matcher with a series of questions shows what would be their personality and by grading them, users who have the same grades will be matched. 
  <span class="text-highlight"></span>  `,

  gap: `When it comes to the evolution of media with technology, filming cameras, projectors, and distributing systems come to our minds in the very first place. </br>  It was never a small journey as it took around 4 decades from 1890 to 1930 to bring these technological solutions up to improve the media sector. The media sector grew and gained new opportunities to broadcast their content in a much clearer way using audio-video technology. </br> Currently, video technology has advanced up to the point of displaying visual objects with real-world objects in augmented space. </br>  
  Our product enables the content creators to embed AR and 3D technologies in a live streaming environment. </br>  It allows users easy access to these technologies and <span class="text-highlight">LUMOZ</span>  provide an effective business plan for the users. It is an efficient tool with simple UI and with that, the learning curve is less. Because of it any non-technical user can easily adjust and use this tool. 
  `,
  problem: `In all those dating websites, there are some patches and huge gaps that needs to be filled, such as,​
          <ul>
          <li>How to bond with people</li>

          <li>How users know these people are right for them.</li>

          <li>Contact the people that oneself consider has the same personality as them</li>

          <li>Finally, how to talk with a person fluently, confidently and kindly</li>
          </ul>

          In real life these comes up with a great price, with the solution is to contacting a therapist and understanding your problem and moving on, but with this website we helps the users to understand the people in a very basic manner`,
  objectives: `Main objective of this research is to provide a platform for the live content creators to easily create high graphical effects in their live production.
  <span class="text-highlight">LUMOZ</span> supports for the following sub-objectives.</br></br>
  <ul>
  <li>Identifying the positions and points where the 3D objects should be placed.</li>
 <li> Adjusting the 3D object position and size according to the camera movement.</li>
 <li> Providing manual 3D object manipulations with functions like zooming and rotating.</li>
 <li> Controlling the 3D object with pre-defined hand gestures. </li>
 <li> Providing a 3D object library where the user can either add and use their own 3D objects or buy available 3D objects from the library. </li> 
 <li> Create 3D data visualization objects and use them in real time. </li>
  </ul>
  `,
};

document.querySelector("#project-scope").innerHTML = scope.intro;

const setContent = (i) => {
  switch (i) {
    case "1":
      document.querySelector("#project-scope").innerHTML = scope.intro;
      break;

    case "2":
      document.querySelector("#project-scope").innerHTML = scope.background;
      break;

    case "3":
      document.querySelector("#project-scope").innerHTML = scope.gap;
      break;
    case "4":
      document.querySelector("#project-scope").innerHTML = scope.problem;
      break;
    case "5":
      document.querySelector("#project-scope").innerHTML = scope.objectives;
      break;
  }
};

document.querySelectorAll("#scope-nav").forEach((item) => {
  item.addEventListener("click", () => {
    setContent(item.dataset.tab);
    removeActive();
    item.classList.add("tab-active");
  });
});

const removeActive = () => {
  document.querySelectorAll("#scope-nav").forEach((item) => {
    item.classList.remove("tab-active");
    hero.fromTo(
      "#project-scope",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "expo.inOut" }
    );
  });
};


// documents



document.querySelectorAll("#doc-i").forEach((item) => {
  item.addEventListener("click", () => {
    removeDocActive();
    item.classList.add("doc-active");
    if(item.dataset.doc == '1'){
     
      docActive()
      
    }else{
      
      proposalActive()
    }
   
  });
});



const docActive = ()=>{
  gsap.to("#m2", {
    
    display: 'none',
    stagger: -0.1,
    duration: 0.2, delay: 0.1
  });

  

  gsap.to("#m1", {

    display: 'flex',
    stagger: -0.1,
    duration: 0.2, delay: 0.1
  });
}


const proposalActive = ()=>{
  gsap.to("#m1", {
   
    display: 'none',
    stagger: -0.1,
    duration: 0.2, delay: 0.1
  });

  gsap.to("#m2", {
   
    display: 'flex',
    stagger: -0.1,
    duration: 0.2, delay: 0.1
  });
}

const removeDocActive = () => {
  document.querySelectorAll("#doc-i").forEach((item) => {
    item.classList.remove("doc-active");
   
  });
};

docActive();


// mobile navigation

let open = false;

document.getElementById('nav-mob').addEventListener('click',()=>{
open = !open;
if(open){
  gsap.to(
    "#mob-nav",
    {autoAlpha: 1, duration: 1, ease: "expo.inOut" }
  );
}else{
  gsap.to(
    "#mob-nav",
    {autoAlpha: 0,duration: 1, ease: "expo.inOut" }
  );
}
})


// mob nav close when click items

document.querySelectorAll("#mob-nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    gsap.to(
      "#mob-nav",
      {autoAlpha: 0,duration: 1, ease: "expo.inOut" }
    );
   
  });
});

//  cta action

document.getElementById('cta').addEventListener('click',()=>{
  window.location.replace('#lumoz-section-1')
})

// custom navigation

const navigate = (url)=>{
  window.location.href = url;
}