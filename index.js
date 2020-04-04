const translate = require('@vitalets/google-translate-api');
const readline = require('readline');

const rl = readline.createInterface({input : process.stdin,
                                    output : process.stdout});
 
 let again = 1;
 while(again < 2){
        translateWords();
        again++
 }
    goAgain();


function translateWords()
{
    rl.question(`Enter what your like to translate \n`,
    (userInput)=>{
        translate(userInput, {to: 'ko'}).then(res => {
            console.log(res.text);
            //=> I speak English
            console.log(res.from.language.iso);
        }).catch(err => {
            console.error(err);
        });
    });
}

function goAgain()
{
    rl.question(`Do you want to translater again? \n`,
        (yesOrNo)=>{
            if (yesOrNo.toLowerCase = "no" ) {
                {
                    console.log("Bye")
                    again = 2;
                    close();
                }
            }
            else if(yesOrNo.toLowerCase = "yes") {
                    again = 1;
            }
            else
            {
                close();
            }
        });
}