console.log("Fetching songs...");


/*async function main(){
    let a= await fetch("http://127.0.0.1:3000/songs/")
    let response=await a.text();
    console.log(response)
    let div=document.createElement("div")
    div.inneHTML=response;
    let as=div.getElementsByTagName("a");
    let songs=[]
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href)
        }
        
    }
    console.log(songs);

}*/
const songs = [
    { title: "Song 1", src: "Jasmine Whipers - Patrick Patrikios.mp3" },
    { title: "Song 2", src: "C:\Users\SWAPNIL\Desktop\Spotify Clone (HTML,CSS,JS)\Songs\Jasmine Whipers - Patrick Patrikios.mp3" },
    { title: "Song 3", src: "C:\Users\SWAPNIL\Desktop\Spotify Clone (HTML,CSS,JS)\Songs\Sunlit Souk - Patrick Patrikios.mp3"},
    {title: "Song 4",src:"C:\Users\SWAPNIL\Desktop\Spotify Clone (HTML,CSS,JS)\Songs\Temple of treasures - Patrick Patrikios.mp3"}, 
];

const songListElement = document.getElementById('songList');
const audioPlayer = document.getElementById('audioPlayer');

songs.forEach((song, index) => {
    const songElement = document.createElement('div');
    songElement.className = 'song';
    songElement.textContent = song.title;

    songElement.addEventListener('click', () => {
        audioPlayer.src = "Jasmine Whipers - Patrick Patrikios.mp3";
        audioPlayer.src = "C:\Users\SWAPNIL\Desktop\Spotify Clone (HTML,CSS,JS)\Songs\Jasmine Whipers - Patrick Patrikios.mp3".src;
        audioPlayer.play();
    });

    songListElement.appendChild(songElement);
});

