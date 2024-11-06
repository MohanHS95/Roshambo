# Roshambo

Firstly, an HTML document was created and linked to an external Javascript file. 

We first had to generate a random computer choice. The function getComputerChoice was created with min and max parameters. Using the various functionalities of Math including ceil, floor, and random, we are able to generate an integer between 0 and 2 inclusive and assign it to one of rock, scissors, or paper respectively.

From here, a getHumanChoice function is created to prompt the user to make a selection between rock, scissors, and paper. The selection is either lowercased and returned or returned as "not a valid choice" if one of the choices is not selected.

After initializing the humanScore and computerScore variables at 0, we create a new function called playRound. Based off 8 if, else if, if, conditions it determines the winner of a round of roshambo and increments the respective score variable accordingly. It is run after a variable "humanSelection" is set to the function "getHumanChoice" and "computerSelection" is set to the function "getComputerChoice(0,2)."

Finally, we create the function playGame, which has us play the game 5 separate times to determine an overall winner. The playRound function is duplicated 5 times, in lieu of using a loop, and new variables to contain the computer and human selections initialized each time. A final if-else statement determines the winner based off the higher overall score and prints it to the console. The final line of the script calls the playGame function. 