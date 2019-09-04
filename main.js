

//excercise 1


// const StringFormatter = function(){

//     const capitalizeFirst = function(string){
//         let str = ""
//         for(let i in string){

//             if(i == 0){
//                 str += string[i].toUpperCase()
//             }
//             else{
//                 str +=  string[i].toLowerCase()
//             }
            
//         }
//         return str
//     }

//     const skewerCase = function(string){
        
//         string = string.split(" ").join("-")
//         return string
//     }

//     return{
//         capitalizeFirst,
//         skewerCase
//     }
// }




// const formatter = StringFormatter()

// console.log(formatter.capitalizeFirst("dorotHy") )
// console.log(formatter.skewerCase("blue box"))




//excercise 3

const SongsManager = function(){

    const songs = {
        sax: "3JZ4pnNtyxQ",

    }

    const addSong = function(name, code){
        songs[name] = code.split("https://www.youtube.com/watch?v=").join("")

    }

    const getSong= function(name){
        console.log("https://www.youtube.com/watch?v=" + songs[name])
    }


    return{
        addSong,
        getSong

    }
}

const songsManager = SongsManager()
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax")
songsManager.getSong("how long")
songsManager.getSong("ain't me")
