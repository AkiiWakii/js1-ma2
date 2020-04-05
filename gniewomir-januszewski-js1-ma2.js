// Question1
const myFunctionExpression = function(){
    console.log("Gniewomir");
  };
  
  //Question 2
  const inputClick = document.querySelector(".btn");
  
  function logOnClick(){
    console.log("I was clicked");
  };
  
  inputClick.addEventListener("click", logOnClick);
  
  //Question 3
  const inputFirstName = document.querySelector("#firstName");
  
  function keyPressed(){
    console.log("Key was pressed");
  }
  inputFirstName.addEventListener("keydown",keyPressed);
  
  
  //Question 4
  const button = document.querySelector("button");
  for(let i = 0; i < button.length; i++){
    button[i].addEventListener("mouseover", function(){
      this.setAttribute("class", "hover");
    });
  };
  
  //Question 5
  const buttonDog = document.querySelector("[data-animal= 'dog']");
  for(let i = 0; i < buttonDog.length; i++){
    button[i].addEventListener("mouseout", function(){
      this.removeAttribute("class", "hover");
    });
  };
  
  //Question 6
  const allOfLi = document.querySelectorAll("li");
  for(let i = 0; i < allOfLi.length; i++){
      allOfLi.addEventListener("mouseover", function(){
          console.dir(allOfLi[i].dataset);
      });
  };
  
  //Question 7
  const animal = "cow";

  switch(animal){
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default :
        console.log("Harrumph");
    
  };
  
  //Question 8 
  const sheep = ["Malcolm", "Anders", "Marie"];
  sheep.forEach(function(name){
      console.log(name)
  });
  
  //Question 9
  function logHello(){
      console.log("Hello");
      
      if(counter === 5){
        clearInterval(intervalId)
    }
    counter++
  };
  let counter = 0;
  let intervalId = setInterval(logHello,500);

  //Question 10
  const div = document.querySelector("div.container");
  function updateDiv(){
      div.innerHTML = "Text Updated";
  }
  setTimeout(updateDiv,2000);
