

/* Leet Code */

/* ------------------------------------------------------------- */


/* -------------ARRAYS------------- */

/* Two Sum */

var twoSum = function(nums, target) {
    
    for (let i = 0; i <= nums.length; i++){
        for (let j = 1; j <= nums.length - 1; j++){
            let sum = nums[i] + nums[j];
            let result = [];
            if (sum == target){
                result.push(i);
                result. push(j);
                return result;
            }
        }
    }

};


/* Best time to buy and sell stock */

var maxProfit = function(prices) {
   var result = 0;
    for (var i = 0; i <= prices.length - 1; i++){
        for (var j = 1; j <= prices.length; j++){
         let profit = prices[j] - prices[i];
        if(profit > result){
            result = profit;
        }

    }
    }
    return result;
};

/* -------------BINARY------------- */


/* Number of 1 bits */
var hammingWeight = function(n) {
    let count = 0;
    var x = n.toString(2);
    var arr = Array.from(x);
    for (var i = 0; i <= arr.length; i++){
        if (arr[i] == "1"){
            count++;
        }
    }
    return count;
};


/* Missing Number */
ar missingNumber = function(nums) {
    var newnums = [];
    var max = Math.max(...nums);
    console.log(max);
    for (var i = 0; i <= max; i++){
        newnums.push(i);
    }
    
    res = newnums.filter(item => !nums.includes(item));
    if (res == 0){
        res = max + 1;
    }
    
    return res;
};





