//Getting data from ajax call (./ajaxCall.js) and rendering 10 image items 
const renderThumbnail = (data) =>{
    let html = ''; //html to render
    let url = null; //big image url 
    let limit = 10; //item limit

    // this loop making long string with data from ajax
    for (let i = 0; i < limit; i++)
    {
        url = data[i].url
        html += `
        <div onClick="renderBigImage('${url}')" data-id=${data[i].id}>
            <img src=${data[i].thumbnailUrl} />
        </div>
        `
    }

    // rendering html inside images div
    document.getElementById('images').innerHTML = html
}

//Getting url when thumbnail click and rendering image
const renderBigImage = (url) => {
    //when thumbnail clicked html to render
    let html = `
    <img src=${url} />
    `;

    //rendering html inside bigImage div
    document.getElementById('big-image').innerHTML = html
}