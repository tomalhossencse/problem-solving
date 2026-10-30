// Problem 1: Staircase
/**
 * @param {number} n
 * @return {string}
 */
var staircase = (n: number): string => {
	const rows: string[] = [];
	for (let i = 1; i <= n; i++) {
		const spaces = " ".repeat(n - i);
		const hashes = "#".repeat(i);
		rows.push(spaces + hashes);
	}
	return rows.join("\n");
};

console.log("Problem 1:");
console.log(staircase(4));
console.log(staircase(1));
console.log("\n");

// Problem 2: Grading Students
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = (grades: number[]): number[] =>
	grades.map((grade) => {
		if (grade < 38) {
			return grade;
		}
		const nextMultipleOfFive = Math.ceil(grade / 5) * 5;
		if (nextMultipleOfFive - grade < 3) {
			return nextMultipleOfFive;
		}
		return grade;
	});

console.log("Problem 2:");
console.log(gradingStudents([73, 67, 38, 33]));
console.log(gradingStudents([84, 29, 57]));
console.log("\n");

// Problem 3: Time Conversion
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = (s: string): string => {
	const [time, period] = s.split(/(AM|PM)/);
	let [hours, minutes, seconds] = time.split(":").map(Number);
	const format = (n: number): string => String(n).padStart(2, "0");
	if (period === "AM" && hours === 12) {
		hours = 0;
	} else if (period === "PM" && hours !== 12) {
		hours += 12;
	}
	return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
};

console.log("Problem 3:");
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("12:30:45PM"));
console.log("\n");

// Problem 4: String Repeat
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = (n: number, s: string): string => (n <= 0 ? "" : s.repeat(n));

console.log("Problem 4:");
console.log(repeatStr(3, "ha"));
console.log(repeatStr(0, "hello"));
console.log(repeatStr(4, "a"));
console.log("\n");

// Problem 5: Reversed Strings
/**
 * @param {string} str
 * @return {string}
 */
var solution = (str: string): string => [...str].reverse().join("");

console.log("Problem 5:");
console.log(solution("world"));
console.log(solution("hello"));
console.log(solution(""));
console.log("\n");

// Problem 6: Sum of Positive
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = (arr: number[]): number =>
	arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);

console.log("Problem 6:");
console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([-1, -2, 0, -5]));
console.log("\n");

// Problem 7: Grasshopper — Summation
/**
 * @param {number} num
 * @return {number}
 */
var summation = (num: number): number => (num * (num + 1)) / 2;

console.log("Problem 7:");
console.log(summation(8));
console.log(summation(1));
console.log("\n");

// Problem 8: Convert a Boolean to a String
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = (b: boolean): string => String(b);

console.log("Problem 8:");
console.log(booleanToString(true));
console.log(booleanToString(false));
console.log("\n");

// Problem 9: Fizz Buzz
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = (n: number): string[] => {
	const result: string[] = [];
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			result.push("FizzBuzz");
		} else if (i % 3 === 0) {
			result.push("Fizz");
		} else if (i % 5 === 0) {
			result.push("Buzz");
		} else {
			result.push(i.toString());
		}
	}
	return result;
};

console.log("Problem 9:");
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log("\n");

// Problem 10: Running Sum of 1D Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = (nums: number[]): number[] => {
	const newArray: number[] = [];
	let currentSum = 0;
	for (let i = 0; i < nums.length; i++) {
		currentSum += nums[i];
		newArray.push(currentSum);
	}
	return newArray;
};

console.log("Problem 10:");
console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log("\n");

// Problem 11: Richest Customer Wealth
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = (accounts: number[][]): number => {
	const totalWealths = accounts.map((arr) => {
		return arr.reduce((sum, num) => sum + num, 0);
	});
	return Math.max(...totalWealths);
};

console.log("Problem 11:");
console.log(
	maximumWealth([
		[1, 2, 3],
		[3, 2, 1],
	]),
);
console.log(
	maximumWealth([
		[1, 5],
		[7, 3],
		[3, 5],
	]),
);
console.log("\n");

// Problem 12: Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = (nums: number[]): number => {
	if (nums.length === 0) return 0;
	let k = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[i - 1]) {
			nums[k] = nums[i];
			k++;
		}
	}
	return k;
};

console.log("Problem 12:");
const nums12a = [1, 1, 2];
console.log(removeDuplicates(nums12a), nums12a.slice(0, 2));
const nums12b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums12b), nums12b.slice(0, 5));
console.log("\n");

// Problem 13: Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums: number[]): boolean =>
	new Set(nums).size !== nums.length;

console.log("Problem 13:");
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log("\n");

// Problem 14: Move Zeroes
/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = (nums: number[]): void => {
	let lastNonZeroFoundAt = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[lastNonZeroFoundAt] = nums[i];
			lastNonZeroFoundAt++;
		}
	}
	for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
		nums[i] = 0;
	}
};

console.log("Problem 14:");
const nums14a = [0, 1, 0, 3, 12];
moveZeroes(nums14a);
console.log(nums14a);
const nums14b = [0, 0, 1];
moveZeroes(nums14b);
console.log(nums14b);
const nums14c = [1, 2, 3];
moveZeroes(nums14c);
console.log(nums14c);
console.log("\n");

// Problem 15: Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
	for (let i = 0; i < n; i++) {
		nums1[m + i] = nums2[i];
	}
	nums1.sort((a, b) => a - b);
};

console.log("Problem 15:");
const nums15a = [1, 2, 3, 0, 0, 0];
merge(nums15a, 3, [2, 5, 6], 3);
console.log(nums15a);
const nums15b = [1];
merge(nums15b, 1, [], 0);
console.log(nums15b);
const nums15c = [0];
merge(nums15c, 0, [1], 1);
console.log(nums15c);
console.log("\n");

// Problem 16: 3Sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = (nums: number[]): number[][] => {
	const result: number[][] = [];
	nums.sort((a, b) => a - b);
	const n = nums.length;
	for (let i = 0; i < n - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		let left = i + 1;
		let right = n - 1;
		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];
			if (sum === 0) {
				result.push([nums[i], nums[left], nums[right]]);
				while (left < right && nums[left] === nums[left + 1]) left++;
				while (left < right && nums[right] === nums[right - 1]) right--;
				left++;
				right--;
			} else if (sum < 0) {
				left++;
			} else {
				right--;
			}
		}
	}
	return result;
};

console.log("Problem 16:");
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log("\n");

// Problem 17: Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = (digits: number[]): number[] => {
	const n = digits.length;
	const result: number[] = [...digits];
	for (let i = n - 1; i >= 0; i--) {
		if (result[i] < 9) {
			result[i]++;
			return result;
		}
		result[i] = 0;
	}
	result.unshift(1);
	return result;
};

console.log("Problem 17:");
console.log(plusOne([1, 2, 9]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9, 9, 9]));
console.log("\n");

// Problem 18: Reverse String
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = (s: string[]): void => {
	let left = 0;
	let right = s.length - 1;
	while (left < right) {
		[s[left], s[right]] = [s[right], s[left]];
		left++;
		right--;
	}
};

console.log("Problem 18:");
const charArray18a = ["h", "e", "l", "l", "o"];
reverseString(charArray18a);
console.log(charArray18a);
const charArray18b = ["H", "a", "n", "n", "a", "h"];
reverseString(charArray18b);
console.log(charArray18b);
console.log("\n");

// Problem 19: Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = (s: string): number => {
	const arr: string[] = s.trim().split(/\s+/);
	return arr[arr.length - 1].length;
};

console.log("Problem 19:");
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log("\n");

// Problem 20: Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = (strs: string[]): string => {
	if (strs.length === 0) return "";
	let prefix: string = strs[0];
	for (let i = 1; i < strs.length; i++) {
		while (strs[i].indexOf(prefix) !== 0) {
			prefix = prefix.substring(0, prefix.length - 1);
			if (prefix === "") return "";
		}
	}
	return prefix;
};

console.log("Problem 20:");
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(
	longestCommonPrefix(["interspecies", "interstellar", "interstate"]),
);
