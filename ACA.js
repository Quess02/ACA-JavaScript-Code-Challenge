/*

Welcome to Stage Two of the ACA interview process. 

The idea is to answer as many of the following questions as you can. The set of questions are to test your logic, reasoning and familiarity with javascript and some of its concepts. For all the questions ensure;

* Functions are to be completed as arrow functions
* To use Data Structures where applicable
* To use Ternary and Spread Operators where applicable
* BONUS - There is a React js question. Answer it for extra points.
*/

/** 
* Question 1
This function should return true if inputNumber is even, otherwise return false
*/

const isEven = function(inputNumber) {
    // Write your code here
      //Here i take adavantage of the remainder operator
      return inputNumber%2===0
    }
    
    /** 
    * Question 2
    This function should return true if inputNumber is does not have multiples beside 1 and itself only, otherwise return false
    */
    const isPrime = function(inputNumber) {
    // Write your code here
        if (inputNumber > 2) { 
            for (let i = 2; i <inputNumber; i++) {
                if (inputNumber % 2 === 0) return false
                return false
            }
        }else if (inputNumber===2) {
            return true
        } else {
            return false
        }
    }
    

    /**
    * Question 3
    You are required to complete the function below so that it checks if a string contain a number(s) in it.
    
    * For example: For inputString=Alex, return false
    * For inputString=Amazon49, return true
    */
    const containsNumbers = function(inputString) {
    // Write your code here
        for (const i of p) {
            if(!isNaN(Number(i))){
              return true
            }
        }
        return false
    }
    
    /**
    * Question 4
    * Your are required to complete the below function to determine if string inputString is a palindrome string or not. The function is expected to return true if the string it palindrom otherwise return false.
    
    Example : For inputString = 101 , we should get true
    * For inputString = abba, return true
    * For inputString = abbb, return false
    */
    const isPalindrome = function(inputString) {
    // Write your code here
        let pal = ""
        inputString.toLowerCase() 
        for (let i = inputString.length-1; i >=0; i--) {
            pal=pal+inputString[i]
        }
        return pal===inputString
    }
    
    /**
    * Question 5
    Rot13 encryption
    The ROT13 encoding shifts every letter by 13 places in the alphabet while leaving non-alpha characters untouched.
    Encoding and decoding are done by the same function, passing an encoded string as argument will return the original version.
    
    Example : Encoding "Alex@702" will result in "Nyrk@702"
    You can read more on how rot13 works here https://en.wikipedia.org/wiki/ROT13
    */
    const rot13Encoding = function(inputString) {
    // Write your code here
        const alpha = [...new Array(26)].map((_,idx) => idx + 65)
        const alphabet = alpha.map((x) => String.fromCharCode(x))
        var encrypt = ""
        for (let idx = 0; idx < inputString.length; idx++) {
            let char = inputString[idx]
            let charUp=char.toUpperCase()
            
            if (!char.match('[a-zA-Z]')) {
                encrypt += char
                continue
            } 
            for (let x = 0; x < alphabet.length; x++) { 
                let ePlus = alphabet[x + 13] 
                let eMinus= alphabet[x-13] 
                if (alphabet[x] === charUp) {
                    (x < 13) ?(char!==charUp)? encrypt += ePlus.toLowerCase() :encrypt += ePlus: (char!==charUp)?encrypt += eMinus.toLowerCase():encrypt += eMinus   
                } 
            }
        }
        return encrypt
    }
    

    /**
    * Question 6
    Given: an array containing hashes of names
    Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an *ampersand.
    
    Example:
    
    *list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
    // returns 'Bart, Lisa & Maggie'
    
    *list([ {name: 'Bart'}, {name: 'Lisa'} ])
    // returns 'Bart & Lisa'
    
    *list([ {name: 'Bart'} ])
    // returns 'Bart'
    
    *list([])
    // returns ''
    */
        
let names = function (l) { 
    if (l.length > 0) {
        var f=[]
        l.map(n => { f.push(n['name']) })
        if (f.length==1) {
            return f[0]
        } else {
            var s = f.toString()
            const lstIdx=s.lastIndexOf(',')
            let replaced = s.substring(0, lstIdx) + " & " + s.substring(lstIdx + 1)
            return replaced.replaceAll(",",", ")
        } 
    }
    return ''
}
    /**
    * Question 7
    Bonus React question. Write a Fuction Component that takes in a property object and returns an element that say;
    "My name is prop.firstName, I am a prop.collegeName and i can't wait to start at ACA"  
    */
