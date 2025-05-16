setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("banner-loader").style.display = "block";
    document.getElementById("backdrop").style.display = "block";
    document.getElementById("main-content").classList.add("blur"); // Background blur hoga

    setTimeout(() => {
        document.getElementById("banner-loader").style.top = "50%"; // Top se center me aayega
    }, 100);
}, 1000);

if (document.getElementById("close-btn")!=null) {
    document.getElementById("close-btn").addEventListener("click", function () {
        document.getElementById("banner-loader").style.display = "none";
        document.getElementById("backdrop").style.display = "none";
        document.getElementById("main-content").classList.remove("blur");
        truncateText("#text", 10);
   
});
}
function truncateText(selector, wordLimit) {
    let element = document.querySelector(selector);
    let fullText = element.innerText;
    let words = fullText.split(" ");

    if (words.length > wordLimit) {
        let truncatedText = words.slice(0, wordLimit).join(" ") + " ...";
        element.innerHTML = truncatedText;
    }
}

 
//=============================preloader end===================================

document.addEventListener("DOMContentLoaded", function () {
    
    // ===========nav bar================
    let menu = document.querySelector('.menu');
    let openMenuBtn = document.querySelector('.open-menu-btn');
    let closeMenuBtn = document.querySelector('.close-menu-btn');
    [openMenuBtn, closeMenuBtn].forEach((btn) => {
        btn.addEventListener('click', () => {
            menu.classList.toggle('open');
            menu.style.transition = "transform 0.5s ease";
        })
    });

    menu.addEventListener("transitionend", function () {
        this.removeAttribute("style")
    });

    function closeAllDropdowns(except = null) {
        menu.querySelectorAll(".dropdown.active").forEach((dropdown) => {
            if (dropdown !== except && !except?.contains(dropdown)) {
                dropdown.classList.remove("active");
            }
        });
    }

    menu.querySelectorAll(".dropdown > a, .dropdown > i").forEach((dropdownToggle) => {
        dropdownToggle.addEventListener("click", function (e) {
            e.preventDefault();
            let parent = this.closest(".dropdown");

            if (parent.classList.contains("active")) {
                parent.classList.remove("active");
            } else {

                parent.classList.add("active");
            }
        });
    });
   
    
});





// ================ card coursels =================

$(document).ready(function () {

    $('.owl-carousel').owlCarousel({

        loop: true,
        margin: 10,
        nav: true,
        autoplayTimeout: 3000,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })

})

// =================================
document.addEventListener("DOMContentLoaded", function() {
 
    const counters = document.querySelectorAll('.counter-number');
    const speed = 100; // Adjust speed (lower is faster)
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 40);
            } else {
                counter.innerText = target + "+"; // Ensuring final number with +
            }
        };

        updateCount();
    }); 
   
});

// =============courses html========================
window.onload(showDetails('course1', 'img_url', 0));
function showDetails(courseId, img_url, index) {
    document.querySelectorAll('.course-details').forEach(detail => {
        detail.style.display = 'none';
    });
    document.getElementById(courseId).style.display = 'block';
    console.log(document.getElementsByClassName(img_url).length);
    if (index > 0) {
        document.getElementsByClassName(img_url)[index].style.height = "230px";

    }
    if (document.getElementsByClassName("course-active").length > 0) {
        document.getElementsByClassName("course-active")[0].classList.add('list-group-item');
        document.getElementsByClassName("course-active")[0].classList.remove('course-active');
    }
    document.getElementsByClassName("list-group-item")[index].classList.add('course-active');
    document.getElementsByClassName("course-active")[0].classList.remove('list-group-item');

}