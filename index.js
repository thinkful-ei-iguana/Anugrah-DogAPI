/* eslint-disable indent */
//event listener to capture the amount of pics 
let dogNum;
function howMany() {
    $('.getDogs').submit(event => {
        event.preventDefault();
        dogNum = document.getElementById('amount').value;
        getDogImages();
    })
}
//get statement to get the dog picture urls
function getDogImages() {

    fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
    .then(response => response.json())
    .then(responseJson => displayPics(responseJson))
    .catch(error => alert('whoops something went wrong'));
}

//function to populate the dog images in the page

function displayPics(responseJson) {
    let imgArr = responseJson.message;
    $('.picList').empty();
    for (let i=0; i < imgArr.length; i++) {
    $('.picList').append(
        `<li>
            <img src="${imgArr[i]}" class="dogImage">
        </li>`);
    }
    $('.dogs').removeClass('hidden');

}


howMany();