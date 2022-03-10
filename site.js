let sharebutton = document.querySelector('.shareButton')
let share = document.querySelector('.Share')
let darkIcon = document.querySelector('.darkIcon')
sharebutton.addEventListener('click', function () {
    if (share.classList.contains("click")) {
        share.classList.remove("click")
        darkIcon.classList.remove("toWhite")
        sharebutton.classList.remove("darken")

    } else {
        share.classList.add("click")
        darkIcon.classList.add("toWhite")
        sharebutton.classList.add("darken")

    }

}
)
