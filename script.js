// Select the elements
const containerDetails = document.querySelector('.container-details')
const ratingResult = document.querySelector('.rating-result')
const ratings = document.querySelectorAll('.ratings')
const ratingText = document.querySelector('.rating-text')
const submitBtn = document.getElementById('submit-btn')


ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        console.log(rating.textContent)
        ratingText.textContent = `You selected ${rating.textContent} out of 5`
    })
})

submitBtn.addEventListener('click', () => {

    containerDetails.style.display = 'none'
    ratingResult.style.display = 'block'

})
