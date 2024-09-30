 let btn = document.querySelector("#btn")
 let content = document.querySelector("#content")
 let voice = document.querySelector("#voice")

 function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text) //in this object what ever text we pass it will speak, SpeechSynthesisUtterance is part of the Web Speech API, which enables speech recognition and speech synthesis in web applications
    text_speak.rate=1
    text_speak.volume=1
    text_speak.pitch=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak);
 }

 function wishMe(){
    let day =new Date()
    let hours= day.getHours()
    if(hours>0&&hours<12){
        speak("Hii Good Morning")
    }else if(hours>=12&&hours<16){
        speak("Hii Good Afternoon")
    }else if(hours>=16&&hours<21){
        speak("Hii Good Evening")
    }else{
        speak("Hii Good Night")
    }
 }
//  window.addEventListener('load', ()=>{ //when our page will load it will call wishme function
//     wishMe()
//  })
 let speecRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
 let recognition =new speecRecognition()
 recognition.onresult=(event)=>{ //when ever we start speak event happen
    let currentIndex= event.resultIndex
    let transcript= event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
 }
 btn.addEventListener("click",()=>{ // when we click on btn recognition start means speaking start this will also give us popup for microphone permisiion
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
 })
 //the above code was to display the content what ever we speak on the button now will make a function to get response of what we speak

 function takeCommand(message){
     btn.style.display="flex"
     voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")||message.includes("hii")){
        speak("hello, how can i help you")
    }
    else if(message.includes("who are you")){
        speak("I am shifra your virtual assistant created by ghanishtha kapoor")
    }
    else if (message.includes("open youtube")){
        speak("Opening youtube")
        window.open("https://www.youtube.com","_blank")
    }
    else if (message.includes("open google")){
        speak("Opening google")
        window.open("https://www.google.com","_blank")
    }
    else if (message.includes("open facebook")){
        speak("Opening facebook")
        window.open("https://www.facebook.com","_blank")
    }
    else if (message.includes("open instagram")){
        speak("Opening instagram")
        window.open("https://www.instagram.com","_blank")
    }
    else if(message.includes("your name")){
        speak("my name is shifra the virtual assistant")
    }
    else if(message.includes("know hindi")){
        speak("namaste muje hindi aati hai ")
    } 
       else if(message.includes("tum kon ho")){
        speak("mera naam shifra hai aur mai tumhari virtual assistant hu")
    }
    else if(message.includes("tum kaha rehti")){
        speak("mai apke laptop mai rehti hu ")
    }
    else if (message.includes("open calculator")){
        speak("Opening calculator...")
        window.open("calculator://")
    }
    else if(message.includes("namaste")){
        speak("namaste")
    }   
     else if (message.includes("open calculator")){
        speak("Opening calculator...")
        window.open("calculator://")
    }  
      else if (message.includes("open whatsapp")){
        speak("Opening whatsapp...")
        window.open("https://www.whatsapp.com","_blank")
    }
    else if (message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if (message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date)
    }
    else{
        let finalText ="this is what i found on internet regarding"+message.replace("shipra","")||message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
    
 }