/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Given 
nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

//解题思路：用target减去数组中的每一项，如果得到的值也存在于数组中，则返回index

var twoSum = function(nums, target) {
	for (var i = 0; i < nums.length; i++) {
		var	index = nums.indexOf(target - nums[i]);
		if(index != -1 $$ index != i) {
			return [i,index];
		}
	}
};