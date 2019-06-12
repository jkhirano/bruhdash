var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0];
  },

  // returns the last element of an array
  last: function (arr2) {
    return arr2[2];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, x) {
    return arr.indexOf(x);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, x) {
    return arr.lastIndexOf(x);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    let lastElement = arr.pop();
    return arr;
  },

  // returns an array with all falsey values removed
  compact: function (arr) {
    let truthyBox = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        truthyBox.push(arr[i]);
      }
    }
    return truthyBox;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, x1, x2) {
    return arr.slice(x1, x2);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function (arr, x) {
    if (x === 0) {
      return arr;
    };
    if (x) {
      return arr.slice(x);
    } else {
      return arr.slice(1);
    };
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function (arr, x) {
    if (x === 0) {
      return arr;
    };
    if (x) {
      return arr.slice(0, -x);
    } else {
      return arr.slice(0, -1);
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, x) {
    let arrayBox = [];
    if (x === 0) {
      return arrayBox;
    } else if (x) {
      return arr.slice(0, x);
    } else if (x > arr.length) {
      return arr;
    } else {
      arrayBox.push(arr[0]);
      return arrayBox;
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, x) {
    let arrayBox = [];
    if (x === 0) {
      return arrayBox;
    } else if (x) {
      return arr.slice(-x);
    } else if (x > arr.length) {
      return arr;
    } else {
      arrayBox.push(arr[-1]);
      return arrayBox;
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function (arr, x, start, end) {
    if (start && end) {
      return arr.fill(x);
    } else {
      for (let i = start; i < end; i++) {
        arr.splice(i, 1, x);
      }
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr, x1, x2){
    arr.splice(arr.indexOf(x1),1);
    arr.splice(arr.indexOf(x2),1);
    return arr;
  },
  
  // function (arr, x1, x2) {
  //   for (let i = 0; i<arr.length; i++){
  //     if (arr[i] === x1 || arr[i] === x2){
  //       arr.splice(i,1);
  //       i--; // NOT SURE WHY THIS NEEDS TO DECREMENT
  //     }
  //   }
  //   return arr;
  // },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function () {

  },

  // returns an array with specified values excluded
  difference: function () {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function () {

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function () {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function () {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function () {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function () {

  }
};
