#Javascript collection
Collection of Javascript exercises for practice.

##Exercises

### Leaderboard
The NFL is trying to make a hip, lean, up-to-date-with-a-vengeance web stack... and, as a result, they're switching to Javascript. Can you help them again?

The NFL has tasked you with building a program that tracks game results as the season progresses. In this assignment, you will build a JS application that prints a leaderboard when your code runs. (For the non-sports fans, a leaderboard is a scoreboard that shows the name, number of wins, and number of losses for each team in the league.) First, define a constructor in JS that returns an object with the following properties:

- Name
- Rank (based on wins)
- Wins (total number of wins)
- Losses (total number of losses)

Then, using the data defined in `leaderboard.js`, create an array containing these objects corresponding to each team. You should then iterate through your array and output the name, number of wins, and number of losses for each team. Additionally, teams should be ordered by rank (teams with more wins are ranked and listed higher, teams with the same numbers of wins can be ranked in any order!).

####Tips:
- Iterate through `gameInfo` to create team objects with only their names.
- Iterate through `gameInfo` again to set the number of wins and losses for each team.
- Finally, sort your team by wins and set their ranks before outputting the leaderboard stats.
- Focus on organizing your code well.

####Extra Credit Option 1: Making it Pretty!

Format your output such that your leaderboard prints looking (at least approxomitely) like this:

```
--------------------------------------------------
| Name      Rank      Total Wins    Total Losses |
| Patriots  1         3             0            |
| Broncos   2         1             1            |
| Colts     3         0             2            |
| Steelers  4         0             1            |
--------------------------------------------------
```



### It's Election Season!

The Foobarnian Ministry of Elections has asked us to tally all the votes for the
next Presidental Election. Fortunately, the requirements are very simple since
the Foobarnians are highly organized. We only need to write one function in
JavaScript.

The candidates are identified by positive integers, and the votes will be
provided to us as an unsorted Array of those integers.

  1. If any candidate reaches a majority of votes, the function should return a
single-element Array with the integer representing the winning candidate.
  2. If there is no majority winner, then a runoff election will be held among the 3
candidates that finished with the most votes. So in that case, our function
needs to return an array of integers for the top 3 candidates, to identify
candidates that qualified for the runoff.
  3. Also in the runoff case, if there are multiple 3rd place candidates in a tie,
then all candidates who tied for third place will qualify for the runoff. So in
that situation, an Array with more than three integers may need to be returned.

The results do not have to be sorted in any special order.

###Leap in JavaScript
Write a program that will take a year and report if it is a leap year.
1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

###Word count
Write a program that given a phrase can count the occurrences of each word in that phrase.

###Phone Number
Write a program that cleans up user-entered phone numbers so that they can be sent SMS messages.

The rules are as follows:

If the phone number is less than 10 digits assume that it is bad number
If the phone number is 10 digits assume that it is good
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
If the phone number is 11 digits and the first number is not 1, then it is a bad number
If the phone number is more than 11 digits assume that it is a bad number
