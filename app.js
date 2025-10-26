console.log("Welcome to Array");

// Solution # 1
let studentName = ["Irfan", "Imran", "Ali"]
console.log("Solution # 1 " + studentName);
studentName.push("Hussain")
console.log("Solution # 1.1 " + studentName);


// Solution # 2
let fruitName = ["Mango","Orange","Banana"]
console.log("Solution # 2 " + fruitName);
fruitName.pop()
console.log("Solution # 2.1 " + fruitName);

// Solution # 3
let weekName = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
console.log("Solution # 3 " + weekName);
weekName.unshift("Monday")
console.log("Solution # 3.1 " + weekName);

// Solution # 4
let color = ["Yellow", " Green", " Blue", " Pink", " Black"]
console.log("Solution # 4 " + color);
color.shift()
console.log("Solution # 4.1 " + color);

// Solution # 5
let subjectsName = ["Pak Study", " Islamiat", " English", " Urdu", "Arabic"]
console.log("Solution # 5 " + subjectsName);
subjectsName.splice(2, 0, "Math", "Science")
console.log("Solution # 5.1 " + subjectsName);

// Solution # 6
let cityName = ["Lahore", " Quetta", " Karachi", "Islamabad", "Multan"]
console.log("Solution # 6 " + cityName);
cityName.splice(1, 2)
console.log("Solution # 6.1 " + cityName);
    
// Solution # 7
let countryName = ["Paistan", " Bangladash", " Afghanistan", "Iran", "UAE"]
console.log("Solution # 7 " + countryName);
let countryNameN = countryName.slice(0, 3)
console.log("Solution # 7.1 " + countryNameN);

// Solution # 8
let fruitS = "apple,banana,mango"
let fruitSplit = fruitS.split(",")
console.log("Solution # 8 " + fruitSplit);
        // exp:            // split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[]

// Solution # 9
let arrayC = ['J','S']
let arrayJoin = arrayC.join('')
console.log("Solution # 9 " + arrayJoin);

// Solution # 10 
let array1 = ['pen','pencil']
let array2 = ['eraser','sharpener']
let concatR = array1.concat(array2)
console.log("Solution # 10 " + concatR);

// Solution # 11
let arrNum = [10, 5, 2, 8]
let arrNumSort = arrNum.sort()
console.log("Solution # 11 " + arrNumSort);

// Solution # 12
let alpa = ["d", "e", "c", "b", "g", "a", "f", "hi", "jk", "l", "m"]
let alpaSort = alpa.sort()
console.log("Solution # 12 " + alpaSort);

// Solution # 13
let number = ["2", "1", "4", "3", "5", "6", "8", "7"]
let numSort = number.sort()
let numReverse = numSort.reverse()
console.log("Solution # 13 " + numReverse);

// Solution # 14
let colorF = ["Yellow", " Green", "Blue", " Pink", " Black"]
console.log("Solution # 14 " + colorF.indexOf("Blue"));

// Solution # 15
let empty = []
empty.push('Cricket')
empty.push("Footbal", "VollyBall")
console.log("Solution # 15 " + empty);

// Solution # 16
let colorD = ["Yellow", " Green", "Blue", " Pink", " Black"]
colorD.splice(2, 1)
console.log("Solution # 16 " + colorD);

// Solution # 17
let htmlS = "HTML CSS JavaScript" 
let htmlSplit = htmlS.split([" "])
console.log("Solution # 17 " + htmlSplit);

// Solution # 18
let abc =  ['a', 'b', 'c']
abc.reverse()
console.log("Solution # 18 " + abc);
let abcJoin = abc.join('')
console.log("Solution # 18.1 " + abcJoin);

// Solution # 19
let cityNameN = ["Lahore", " Quetta", " Karachi", "Islamabad", "Multan"]
console.log("Solution # 19 " + cityNameN.indexOf(" Karachi"));

// Solution # 20
let evenNumbers = [2, 4, 6, 8];
let oddNumbers = [1, 3, 5, 7];
let allNumbers = evenNumbers.concat(oddNumbers);
console.log("Solution # 20 " + allNumbers);
allNumbers.sort()
let reversedNumbers = allNumbers.reverse();
console.log("Solution # 20.1 " +  reversedNumbers);