function loader(){
    var tl = gsap.timeline();
tl.from(".line h1 , span , .subtext" , {
    y:150,
    stagger:0.3,
    duration:0.3,
    onStart:function(){
        var h5timer = document.querySelector(".linepart h5");
var counter = 0;
setInterval(function(){
    if(counter<100){
    h5timer.innerHTML = counter++;
    }
    else{
        h5timer.innerHTML = counter;
    }
},45)
    }
})
tl.to(".linepart" , {
    opacity: 1,
})
tl.to(".loader", {
    opacity:0,
    duration:0.3,
    // delay:2,
})
tl.from(".page1" , {
    y:1000,
    opacity:0,
    duration:0.9,
})
tl.to(".loader" , {
    display:"none",
})
}
function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

loader();
locomotive();
document.addEventListener("mousemove" , function(dets){
    gsap.to(".cursor" , {
        left:dets.x,
        top:dets.y,
    })
})
function cursoranimation(){
    Shery.mouseFollower({
        skew:true,
        ease:"cubic-bezier(0.23, 1 , 0.320 , 1)",
        duration:1,
    }),
    Shery.makeMagnet(".navcontents h5");}
    var vidcontain = document.querySelector(".vid");
    var video = document.querySelector("video"); 
    vidcontain.addEventListener("mouseenter",function(){
        vidcontain.addEventListener("mousemove" , function(dets){
            gsap.to(".cursor" , {
                opacity:0,
            })
            gsap.to(".vidcursor",{
                left:dets.x -470,
                top:dets.y - 300,
            })
        })
    })
    vidcontain.addEventListener("mouseleave",function(){
        gsap.to(".cursor" , {
            display:"initial"
        })
        gsap.to(".vidcursor" , {
            left:"70%",
            top:"-15%",
        })
    })

    vidcontain.addEventListener("click" , function(){
        var flag = 0;
        if(flag==0){
        document.querySelector(".vid img").style.opacity="0",
        video.play(),
        video.style.opacity="1",
        document.querySelector(".vidcursor").innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="rgba(255,255,255,1)"><path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z"></path></svg>'
        gsap.to(".vidcursor",{
            scale:0.5,
        })
        flag=1
    }
    else{
        video.pause(),
        document.querySelector(".vid img").style.opacity="1",
        video.style.opacity="0",
        document.querySelector(".vidcursor").innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"fill="rgba(255,255,255,1)"><pathd="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path></svg>';
        gsap.to(".vidcursor",{
            scale:1,
        })
        flag=0;
    }
    })
function SheryAnimation(){
    Shery.imageEffect(".imgcontainer",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7967871790976758},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":2.06,"range":[0,10]},"metaball":{"value":0.38,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.53,"range":[0,2]},"noise_scale":{"value":21.37,"range":[0,100]}},
        // debug:true,
        gooey:true,
    })
}
cursoranimation();
SheryAnimation()