
let tripPlace = document.querySelector(".trip-place");
let startDate = document.querySelector(".start-date")
let endDate = document.querySelector(".end-date");
let result= document.querySelector(".result");
let submit = document.querySelector(".submit");
// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAI } from "@google/generative-ai";
        
// Fetch your API_KEY
const API_KEY = "AIzaSyDkeW9qzMNdIpZbcJvD2DfQG1BQZHTbFK0";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


async function fetchData(){
    
const prompt = `Plan a trip from tirupur to ${tripPlace.value} dated from ${startDate.value} to ${endDate.value}` ;
    const result = await model.generateContent(prompt);
    
    return await result.response.text();
}




submit.addEventListener("click" ,() =>{
    // console.log(startDate.value);
    // console.log(tripPlace.value);
    // console.log(endDate.value);
 console.log(result.hasChildNodes())
     result.innerHTML = "Loading..."
   fetchData().then((data) =>{
    console.log(data);
   
    displayOnUI(data);
   }).catch((error) =>{
    console.log(error);
   })
});

function displayOnUI(data){

 result.innerText = "";
  let p = document.createElement("p");
  p.innerText = data;
  result.appendChild(p);
}

