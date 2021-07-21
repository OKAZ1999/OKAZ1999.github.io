const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.3,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'Canon',
            artist: 'dylanf',
            url: 'https://music.163.com/song/media/outer/url?id=478507889.mp3',
            cover: 'https://p2.music.126.net/fL7FAeRby1s7JreBqoOKjg==/109951165175371079.jpg',
        },
    ]
});