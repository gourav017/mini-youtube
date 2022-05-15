const url = " https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=In&key=AIzaSyCZO4lpAKXvAtWdYiwH7TyUww5X1D__WMw"

    //   https://www.youtube.com/embed/4jlacaLPjRo




//trending//

fetch(url)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    appendd(res.items)
    console.log(res.items)
})
.catch((err)=>{
    console.log(err)
});

const appendd = (videoss) => {
    let show_videos = document.getElementById("show_videos");
    show_videos.innerHTML=null;
    

    videoss.map(({snippet:{thumbnails:{medium:{url}}},snippet:{title},id})=>{

        let div = document.createElement("div");
        div.setAttribute("id","divv")
        
       

        let ifram = document.createElement("img");

        ifram.src=url;

        let iframe = document.createElement("iframe")
        iframe.src=`https://www.youtube.com/embed/${id}`
        

        

        let name = document.createElement("h5");
        name.innerText= title;

        div.append(iframe,name);

       
        show_videos.append(div);
        

    });
    
};


// --search------------------------------------------------------------------------------//  
const API= "AIzaSyCZO4lpAKXvAtWdYiwH7TyUww5X1D__WMw";


const searchVideos = async() => {
   try{
    const q = document.getElementById("query").value;

    const res  = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${q}%202&key=${API}`
    );
   
    const data = await res.json();
     append(data.items);
    console.log(data.items);
   }catch(err){
       console.log(err);
   }
};



const append = (videos) => {
    let show_videos = document.getElementById("show_videos");
    show_videos.innerHTML=null;
    

    videos.map(({snippet:{thumbnails:{medium:{url}}},snippet:{title},id:{videoId}})=>{

        let div = document.createElement("div");
        div.setAttribute("id","divv")
        
       

        let ifram = document.createElement("img");

        ifram.src=url;

        

        let name = document.createElement("h5");
        name.innerText= title;

        div.append(ifram,name);

        let data = [{
            title,
            videoId,
        }
    ];

        div.onclick = () =>{
            showVidoes(data);
        };

        show_videos.append(div);

    });
    
};

const showVidoes = (x) =>{
    window.location.href="videos.html";
    localStorage.setItem("videos",JSON.stringify(x));
}


