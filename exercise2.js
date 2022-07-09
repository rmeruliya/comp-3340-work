let input1 = prompt("Enter a sentence of your wish:");

const split = input1.split(' ')
console.log("number of words are: " + split.length);
split.sort()
console.log("splitted and sorted sentence is:");
for(var i = 0;i < split.length;i++)
    {
        console.log(split[i]);
    }
