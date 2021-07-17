
var readlineSync =  require("readline-sync");

const chalk = require("chalk");



var score = 0;

console.log(chalk.redBright.bgWhite("Note: I know you won't make it but still  \nTest Your common sense here:)\n"))

console.log(chalk.blue.bgWhite("\nIts Just for FUN"))

var userName = readlineSync.question(chalk.cyanBright("Enter your NAME: "));

console.log(chalk.red("\nhaaa!") +("Whatever, who wants your name. \nAnyway lets start"))


console.log(("\nEnter '")+chalk.green("a")+("' or '")+chalk.green("b")+("' or '")+chalk.green("c")+("' as your answer \n"))
console.log(("You will get")+chalk.greenBright(" 1 point ")+ ("for each ")+chalk.greenBright("right answer \n"))
console.log(("You will losse")+chalk.redBright(" 1 point ")+ ("for each ")+chalk.redBright("wrong answer \n"))


function play(question,answer){
  var userAnswer =readlineSync.question(question);
  if (userAnswer === answer){
    console.log( chalk.green("You are right!"))
    score = score + 1
    console.log("Your score: " + chalk.green(score ))
  }else{
    console.log(chalk.redBright("You are wrong!"))
    score = score - 1
    console.log("Your score: " + chalk.red(score ))
  }
  
  console.log("\n----------------------\n")
}
play(chalk.cyanBright("1.Who is the bai of bombay?") +("\na.SalmanBai\nb.SharukBai\nc.Mumbai\n"),"c")

play(chalk.cyanBright("2.How many minars does charminar have?")+("\na.Ek\nb.Char\nc.teen\n"),"b")

play(chalk.cyanBright("3.What is the Capital of India?")+("\na.I\nb.Delhi\nc.INDIA \n"), "b")

play(chalk.cyanBright("4.Taj Mahal is In ?")+("\na.Taj Hotel\nb.TajMahal TeaAd\nc.TajBanjara \n"),"b")

play(chalk.cyanBright("5.Golden Temple is madeup of?")+("\na.Gold\nb.Rold Gold\nc.Plastic Gold\n"),"a")

play(chalk.cyanBright("6.How many gates does Indian Gate had?")+("\na.So Many\nb.Not Many\nc.I don't know\n"),"c")

play(chalk.cyanBright("7.Red Fort is in What color?")+("\na.Red\nb.RRed\nc.green\n"),"a")

play(chalk.cyanBright("8.What is in Lip Stick?")+("\na.Lips\nb.Stick\nc.Taste\n"),"c")

play(chalk.cyanBright("9.Where is India ?")+("\na.India\nb.Asia\nc.Earth\n"),"c")

play(chalk.cyanBright("10.Earth is in?")+("\na.Maths-Textbook\nb.Biology-TextBook\nc.Social-TextBook\n"),"c")

console.log("Your score: " + score + "\n")

console.log( chalk.red("Sandeep ")+("scored:") +chalk.green("9"))
console.log( chalk.red("Kishor ")+("scored:") + chalk.green("8"))
console.log( chalk.red("Prasad  ")+("scored:") +chalk.green("7\n" ))

if(score > 9){
  console.log("You scored 10 That's Great.\n You have beated Sandeep.\nSend me screen shot I will Updated Your score\n")
}else if(score > 8){
  console.log(chalk.cyan("You scored: ") + chalk.green(score) +("You have beaten Kishor. \nSend me screen shot I will Updated Your score " ))
}else if(score >7){
  console.log(chalk.cyan("You scored: ") + chalk.green(score) + (" You have beaten Prasad. Send me screen shot I will Updated Your score"))
}else{
  console.log(chalk.cyan("You scored: ") +chalk.green(score) + (" Better Luck Next Time "))
}
 
if(score>7){
  console.log(("Hoo! ") +chalk.cyan(userName) + (" You have some common sense"))
}else{
  console.log(("Don't feel bad ") + chalk.green(userName) +(" One day God will get you some common sense"))
}








console.log("Share this to your friends and let them check there common sense\n")
console.log(chalk.cyan("Instagram ID:")+chalk.green(" 17_sunny_"))







