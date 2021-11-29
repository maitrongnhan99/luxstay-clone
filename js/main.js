const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const moneySelect = $(".select__money")
const infoUser = $("#info-user")
const body = document.body

if(moneySelect) {
    let isSelected = false
    moneySelect.addEventListener("click", function() {
        const select = $("#select__lang-money")

        isSelected = !isSelected
        select.classList.toggle("visible", isSelected)
    })
}


if(infoUser) {
    let isUserInfoVisible = false
    infoUser.addEventListener("click", function() {
        const getInfo = $("#get-info")

        isUserInfoVisible = !isUserInfoVisible
        getInfo.classList.toggle("visible", isUserInfoVisible)
    })
}