$(document).ready(function(){


const projects = [
  Feedbag = {
    title: "Feedbag",
    cssclass: "Feedbag",
    about: "A react built food finding app, Feedbag allows users to search for restaurants and recipes based on cuisine, and save their favorites. In the future, users will be able to modify their saved choices",
    github: "https://github.com/ScruffyLookingNerfHerder/Feedbag",
    deployed: "https://foodcodingstarsfeedbag.herokuapp.com/"

  },
  MyFood = {
    title: "MyFood",
    cssclass: "MyFood",
    about: "The evolution of Feedbag 1, MyFood is a food app designed to allow users to find and favorite restaurants and reicpes based on cuinsine and price",
    github: "https://github.com/ScruffyLookingNerfHerder/myfood"
  },
  Trains = {
    title: "Make it Train",
    cssclass: "MakeItTrain",
    about: "An app running on moment.js with a firebase backend allowing users to create a fake train schedule that updates in real time per minute",
    github: "https://github.com/ScruffyLookingNerfHerder/TrainSchedule",
    deployed: "https://scruffylookingnerfherder.github.io/TrainSchedule/"
  },
  FeedbagOne = {
    title: "Feedbag 1",
    cssclass: "FeedbagOne",
    about: "An app designed to hit 2 apis and bring back both restaurants and recipes for users based on cuisine and price preference",
    github: "https://github.com/ScruffyLookingNerfHerder/Project_1",
    deployed: "https://scruffylookingnerfherder.github.io/Project_1/"
  },
  BobsBurgers = {
    title: "Bob's Burgers",
    cssclass: "BobsBurgers",
    about: "An app using handlebars and paying homage to the Bob's Burgers tv show, allows users to create Burgers of the Day and devour them.",
    github: "https://github.com/ScruffyLookingNerfHerder/BobsBurgers",
    deployed: "https://evening-hollows-56359.herokuapp.com/"
  },
  Giftastic = {
    title: "GIFted",
    cssclass: "GIFted",
    about: "An app designed to let users search for GIFs and populate a gif city with them",
    github: "https://github.com/ScruffyLookingNerfHerder/giftastic_project",
    deployed: "https://scruffylookingnerfherder.github.io/giftastic_project/"
  }
]

const projectul = $("#projectul");
populate = () => {
for (var i = 0; i < projects.length; i++){
  var projectdiv = $("<li class='alex-project " + projects[i].cssclass +"'>");
  var title = "<h1 class='insidetext'>" + projects[i].title + "</h1>";
  var about = "<p class='insidetext'>" + projects[i].about + "</p>";
  var github = "<a class = 'projectlink insidetext' target='_blank' href = '" + projects[i].github + "'> Github</a>";
  var deployed = projects[i].deployed ?  "<a class = 'projectlink insidetext' target='_blank' href = '" + projects[i].deployed +"'> Deployed Site</a>" : "<p class='insidetext'> Deployment in progress! </p>";
  projectdiv.prepend(title);
  projectdiv.append(about);
  projectdiv.append("<p></p>")
  projectdiv.append(github);
  projectdiv.append("<p></p>")
  projectdiv.append(deployed);
  console.log(projectdiv)
  projectul.append(projectdiv);
}

}

populate();

});
