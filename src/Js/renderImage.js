const renderThumbnail = (data) =>{
    let html = '';
    let url = undefined;

    for( let i = 0; i<10; i++)
    {
        url = data[i].url
        html += `
        <div class="test" onClick="renderBigImage('${url}')" data-id=${data[i].id}>
        <img src=${data[i].thumbnailUrl} />
        </div>
        `
    }
    document.getElementById('images').innerHTML = html
}

function renderBigImage (url) {
    let html = `
    <img src=${url} />
    `;
    document.getElementById('bigImage').innerHTML = html
}