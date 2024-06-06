"use strict";

document.addEventListener("DOMContentLoaded", () => {
    let toggle = document.getElementById('toggle');
    let toggle_btn = document.querySelector('.toggle_btn');
    let menu_collap = document.querySelector('.menu');
    let btn1 = document.getElementById("btn1");
    let see_more = document.querySelector(".seemore");
    let btn = document.getElementById("btn");
    let loremText = document.getElementById('lorem-text');
    let dot = document.querySelectorAll(".dots");
    let share_div = document.querySelector(".share");
    let navlinks = document.querySelectorAll(".wrap-1 ul li a");

    // Toggle menu
    toggle.addEventListener("click", () => {
        menu_collap.classList.toggle('menu_side');
        toggle_btn.classList.toggle('active');
    });

    // Close menu on nav link click
    navlinks.forEach((link) => {
        link.addEventListener("click", () => {
            menu_collap.classList.remove('menu_side');
            toggle_btn.classList.remove('active');
        });
    });

    // Toggle 'see more' content
    if (btn1 && see_more) {
        btn1.addEventListener("click", () => {
            see_more.classList.toggle('more');
        });
    }

    // Toggle 'Lorem ipsum' text
    if (btn && loremText) {
        btn.addEventListener('click', function() {
            if (loremText.style.display === 'none') {
                loremText.style.display = 'inline';
            } else {
                loremText.style.display = 'none';
            }
        });
    }

    // Toggle share section
    if (dot.length > 0) {
        dot.forEach((el) => {
            el.addEventListener("click", (e) => {
                const gapElement = e.target.closest(".gap");
                if (gapElement) {
                    const shareDiv = gapElement.querySelector(".share");
                    if (shareDiv) {
                        shareDiv.classList.toggle("share2");
                    }
                }
            });
        });
    }
});

