const getGeolocation = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log("%c Position: ",'background: blue; color: white; padding: 1rem;', {position: position.coords})
        })
    }
}

getGeolocation()