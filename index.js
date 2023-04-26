//Random message generator

//Message component object
const messageComponents = {
    color: ["Grey", "White", "Black", "Orange", "Brown"],
    size: ["Tiny", "Small", "Big", "Huge", "Fat", "Humongus"],
    activity: ["Eating", "Running", "Sleeping", "Playing", "Snoring", "Climbing"],
    timeOfDay: ["Morning", "Daytime", "Evening", "Sunset"]
}

const generateMessage = () => {
    //Accessing messageComponents object and fetch the color array - Then generate a random number which we will use to get the value of a that correlating index in the color array.
    const colors = messageComponents.color;
    const randomColor = Math.floor(Math.random() * colors.length);

    //Accessing messageComponents object and fetch the size array - Then generate a random number which we will use to get the value of a that correlating index in the size array.
    const size = messageComponents.size;
    const randomSize = Math.floor(Math.random() * size.length);

    //Accessing messageComponents object and fetch the activity array - Then generate a random number which we will use to get the value of a that correlating index in the acitivity array.
    const activity = messageComponents.activity;
    const randomActivity = Math.floor(Math.random() * activity.length);

    //Accessing messageComponents object and fetch the time of day array - Then generate a random number which we will use to get the value of a that correlating index in the time of day array.
    const timeOfDay = messageComponents.timeOfDay;
    const randomTimeOfDay = Math.floor(Math.random() * timeOfDay.length);

    //Connect the random message components from the arrays above to create a funny cat phrase.
    const randomMessage = "The " + size[randomSize].toLowerCase() + " " + colors[randomColor].toLowerCase() + " cat is " + activity[randomActivity].toLowerCase() + " in the " + timeOfDay[randomTimeOfDay].toLowerCase() + ".";

    //Return the random message
    return randomMessage;
}

//Logs the returned random message from the generateMessage function.
console.log(generateMessage());
