document.getElementById('fetchButton').addEventListener('click', fetchComic);

function fetchComic(){
    const randomCom = Math.floor(Math.random() * 3000);
    const url = `https://corsproxy.io/?https://xkcd.com/${randomCom}/info.0.json`;
    fetch(url)
        .then(res => {
            if (res.ok){
                return res.json();
            }else{
                console.log(res);
            }
        }).then(data => {
            document.getElementById('comicTitle').innerText = data.title;
            document.getElementById('comicImage').src = data.img;
            document.getElementById('comicImage').alt = data.alt;
            document.getElementById('comicAlt').innerText = data.alt;
            document.getElementById('comicDate').innerText = `${data.month}/${data.day}/${data.year}`;
        })
        .catch(error => {
            console.error('Fetch Error:', error);
            alert('Failed to generate the comic.');
        });
}
fetchComic();