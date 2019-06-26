//when hash change calling getData function
window.addEventListener('hashchange', getData)

//sending GET request to "https://jsonplaceholder.typicode.com/albums/${albumID}/photos" and handle data
function getData() {
    const albumID = location.hash.replace('#', '');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jsonplaceholder.typicode.com/albums/${albumID}/photos`, true );

    xhr.onload = function(){
        if(this.status === 200){
            let data = JSON.parse(this.responseText);
            renderThumbnail(data);
        }
    }
    xhr.send();
}

