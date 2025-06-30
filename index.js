AOS.init();

const menu = document.getElementById("menu-icon");
const x = document.getElementById("x-icon");
const navbar = document.getElementById("nav-links");

menu.addEventListener("click", function() {
    navbar.classList.add("drag")
})
x.addEventListener("click", function() {
    navbar.classList.remove("drag")
})



const calcPaths = (totalDur) => {
    document.body.classList.add('animated')
  
    const paths = document.querySelectorAll('.autograph__path')
  
    let len = 0
  
    let delay = 0
  
    if (!paths.length) {
      return false
    }
  
    const totalDuration = totalDur || 7
  
    paths.forEach((path) => {
      const totalLen = path.getTotalLength()
      len += totalLen
    })
  
    paths.forEach((path) => {
      const pathElem = path
  
      const totalLen = path.getTotalLength()
  
      const duration = totalLen / len * totalDuration
  
      pathElem.style.animationDuration = `${duration < 0.2 ? 0.2 : duration}s`
      pathElem.style.animationDelay = `${delay}s`
  
      pathElem.setAttribute('stroke-dasharray', totalLen)
      pathElem.setAttribute('stroke-dashoffset', totalLen)
  
      delay += duration + 0
    })
  
    document.body.classList.add('animated')
    return true
  }
 

const navLinks = document.querySelectorAll('.links a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); 
        navLinks.forEach(nav => nav.classList.remove('active'));

        link.classList.add('active');

        const targetId = link.getAttribute('href')
        const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
    });
});

const worksSection = document.getElementById("works")

window.addEventListener('scroll', () => {
    

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    navLinks.forEach(link => {
        const targetId = link.getAttribute('href')
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const sectionTop = targetSection.offsetTop;
            const sectionHeight = targetSection.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});


const reachOutBtn = document.getElementById("reach-out-btn");
const contactBtn =  document.getElementById("contact-btn");
reachOutBtn.addEventListener("click", function(e) {
    e.preventDefault();
    contactBtn.click();
})



var app = document.getElementById('type-writer');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Web Developer')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Content Creator')
    .pauseFor(1500)
    .start();



const section = document.querySelector("#works");

const sectionTop = section.offsetTop;
const sectionHeight = section.offsetHeight;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > sectionTop && window.scrollY < sectionTop + sectionHeight) {
    calcPaths(5)
  }
});


emailjs.init("******");
function restrictInput(a) {
  a.addEventListener("input", function () {
    a.value = a.value.replace(/[^a-zA-Z0-9\u0600-\u06FF\s]/g, "");
  });
}
var nameInput = document.getElementById("name"),
  messageInput = document.getElementById("message");
restrictInput(nameInput), restrictInput(messageInput);

const form = document.getElementById("contact");
form.addEventListener("submit", function (event) {
  sendEmail(event);
});

function sendEmail(event) {
  event.preventDefault();
  const a = document.getElementById("contact");
  $("form").after(`
    <div class="prevent-user"></div>
    `),
    $("#submit").attr("disabled", !0),
    $("#submit").val("Sending.."),
    $("#submit").css("background", "#ff6318"),
    emailjs.sendForm("****", "****", a).then(
      function (response) {
          $("#submit").attr("disabled", !1),
          $("#submit").val("Sent!"),
          $("#submit").css("background", "#2e9f0d"),
          $("#submit").css("opacity", "1"),
          setTimeout(function () {
            $(".prevent-user").remove(),
              $("#submit").val("SUBMIT"),
              $("#submit").css("background", "#b74b4b"),
              $("#submit").css("opacity", "1"),
              a.reset();
          }, 3000);
      },
      function (error) {
          $("#submit").attr("disabled", !1),
          $("#submit").val("Erorr!"),
          $("#submit").css("background", "red"),
          $("#submit").css("opacity", "1"),
          setTimeout(function () {
            $(".prevent-user").remove(),
              $("#submit").val("SUBMIT"),
              $("#submit").css("background", "#b74b4b"),
              $("#submit").css("opacity", "1");
          }, 3000);
      }
    );
}




const workInfo = document.querySelectorAll(".work-info")


workInfo.forEach(element => {
  const workDescription = element.querySelector(".work-description-container");

  element.addEventListener("mouseenter", function() {
    workDescription.classList.add("show");
  });

  element.addEventListener("mouseleave", function() {
    workDescription.classList.remove("show");
  });
});



