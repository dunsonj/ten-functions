"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * or
 * and
 * concat
 */

function isTrue (input){
    console.log();
   if (input === true) {
       return true
   } else {
       return false
    }
}
isTrue(true)
//---------------------------------------------------------------------
function isFalse (userInput){
    console.log();
    if ( userInput === false) {
        return true
    } else {
        return false
    }
}
isFalse(true)
//------------------------------------------------------------------
function not (input){
    return !input ;
}
not()
//-------------------------------------------------------------------

function addOne (x){
        return Number(x) + 1 ;
}
addOne(2)
//----------------------------------------------------------------------
function isEven (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
isEven(5)
//-------------------------------------------------------------------------
function isIdentical (a, b ) {
    if ( a === b ) {
        return true;
    } else {
        return false;
    }
}
isIdentical(g, g)

//---------------------------------------------------------------------------

function isEqual (x , y) {
    if (x == y) {
        return true;
    } else {
        return false;
    }
}
isEqual(2, 2 )

//------------------------------------------------------------------------------

function or (a, b) {
    return a || b ;
}
or (b, c)

//----------------------------------------------------------------------------------

function and ( j, k ) {
    return j && k ;
}
and (b, c)


//-------------------------------------------------------------------------------------

function concat (x , y) {
    var string = x.toString()
    var stringTwo = y.toString()
    return string + stringTwo;
}
concat(one, two)

//----------------------------------------------------------------------------------------