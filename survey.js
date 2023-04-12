const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = []; //array to save all answers i.e user inputs

//nested callbacks
rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  console.log(`Thank you for your valuable feedback: ${name}`);
  answers.push(name); //pushing user input to array

  rl.question('What\'s an activity you like doing? ', (activity) => {
    console.log(`Oh you love:  ${activity}`);
    answers.push(activity);

    rl.question('What do you listen to while doing that? ', (music) => {
      console.log(`That's great taste:  ${music}`);
      answers.push(music);

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        console.log(`Mine too:  ${meal}`);
        answers.push(meal);

        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          console.log(`I love it:  ${food}`);
          answers.push(food);

          rl.question("Which sport is your absolute favourite? ", (sport) => {
            console.log(`Amazing:  ${sport}`);
            answers.push(sport);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at\! ", (power) => {
              console.log(`Wowza:  ${power}`);
              answers.push(power);

              console.log(answers);

              console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]},
               devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, 
               and is amazing at ${answers[6]} `);

              // close app when you want to exit after all questions
              rl.close();
            });
          });
        });
      });
    });
  });
});


// Devani loves listening to Ludovico Einaudi while coding, 
// devouring Yak Momos for brunch, prefers Tennis over any other sport, 
// and is amazing at dropping mad puns at inopportune times