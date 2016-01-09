exports.tally = function(votes) {
  // 1.Create object with the repetition of values
  var counts = {};
  var arrayVotes = [];
  for (var i = 0; i < votes.length; i++){
    var candidate = votes[i];
    counts[candidate] = counts[candidate] ? counts[candidate] + 1 : 1;
  };

  // 2. Create a sorted array with a number of votes
  var numberOfVotes = [];
  for(key in counts) {
    var value = counts[key];
    numberOfVotes.push(value);
  };

  // 3. Sort the array in descending order
  numberOfVotes = numberOfVotes.sort(function(a, b){return b-a});

  //4. Variable to check if anyone wins with mayority of votes
  var mayorityScore =  Math.floor(votes.length/2);

 // 5. Conditional to return the different results
   if (numberOfVotes[0] >= mayorityScore) {
     for(var key in counts){
       if(counts[key] == numberOfVotes[0]){
         return [Number(key)];
       }};
   }else{
     var winners = []
     for(var key in counts){
       if(counts[key] == numberOfVotes[0]||counts[key] == numberOfVotes[1]||counts[key] == numberOfVotes[2]){
         winners.push(Number(key));
       }};
     return winners;
   };
};
