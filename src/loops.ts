/**
 * Complete the following problems using loops and arrays.
 */

/**
 * Given an array of numbers, return their sum. If the array is empty, return 0.
 * @param nums An array of numbers
 * @returns The sum of all numbers in the array
 */
export function summate(nums: number[]): number {
    return nums.reduce((prev, curr) => prev + curr, 0);
}

/**
 * Given an array of numbers, return their average. If the array is empty, return 0.
 * @param nums An array of numbers
 * @returns The average of all numbers in the array
 */
export function average(nums: number[]): number {
    let avg: number = 0;
    if (nums.length > 0) {
        avg = nums.reduce((prev, curr) => prev + curr) / nums.length;
    }
    return avg;
}

/**
 * Given an array of numbers, divide each number by 2.
 * @param nums An array of numbers
 * @returns The array of numbers divided by 2
 */
export function halve(nums: number[]): number[] {
    return nums.map((number) => number / 2);
}

/**
 * Given an array of numbers, return only the positive numbers.
 * @param nums An array of numbers
 * @returns An array of only positive numbers
 */
export function onlyPositives(nums: number[]): number[] {
    return nums.filter((number) => number >= 0);
}

/**
 * Given an array of numbers, return the average of only the positive numbers.
 * @param nums An array of numbers
 * @returns The average of only the positive numbers
 */
export function averagePositives(nums: number[]): number {
    let allPos: number[] = nums.filter((number) => number > 0);
    let avg: number = 0;
    if (allPos.length > 0) {
        avg = allPos.reduce((prev, curr) => prev + curr, 0) / allPos.length;
    }
    return avg;
}

/**
 * Given an array of strings, return only the strings that end with 's'.
 * @param words An array of strings
 * @returns An array of only strings that end with 's'
 */
export function getPlurals(words: string[]): string[] {
    return words.filter((word) => word.slice(-1) === "s");
}

/**
 * Given an array of strings, return the first string that ends with 's'.
 * If no string ends with 's', return an empty string.
 * @param words An array of strings
 * @returns The first string that ends with 's'
 */
export function firstPlural(words: string[]): string {
    let plural: string | undefined = words.find(
        (word) => word.slice(-1) === "s",
    );
    if (plural === undefined) {
        plural = "";
    }
    return plural;
}

/**
 * Given an array of numbers and a threshold number, increase all values in the array by 1 if they are less than the threshold.
 * @param nums An array of numbers
 * @param threshold A threshold number
 * @returns The array of numbers with values less than the threshold increased by 1
 */
export function growIfSmall(nums: number[], threshold: number): number[] {
    return nums.map((num) => {
        if (num < threshold) {
            return num + 1;
        } else {
            return num;
        }
    });
}

/**
 * Given an array of strings, return the longest string.
 * If the array is empty, return an empty string.
 * If there is a tie, return the first longest string.
 * @param words An array of strings
 * @returns The longest string
 */
export function longestString(words: string[]): string {
    let longestString: string = "";
    if (words.length > 0) {
        longestString = words.reduce((prev, curr) => {
            if (curr.length > prev.length) {
                return curr;
            } else {
                return prev;
            }
        }, "");
    }
    return longestString;
}

/**
 * Given an array of strings, return the longest string that ends with 's'.
 * If no string ends with 's', return an empty string.
 * If there is a tie, return the first longest plural string.
 * @param words An array of strings
 * @returns The longest string that ends with 's'
 */
export function longestPlural(words: string[]): string {
    let onlyPlurals: string[] = words.filter((word) => word.slice(-1) === "s");
    let longestPlural: string = "";
    if (onlyPlurals.length > 0) {
        longestPlural = onlyPlurals.reduce((prev, curr) => {
            if (curr.length > prev.length) {
                return curr;
            } else {
                return prev;
            }
        }, "");
    }
    return longestPlural;
}

/**
 * Given two arrays of numbers, add the numbers at each index together and return a new array of the sums.
 * If the arrays are different lengths, use the longer array's length and use zero for the missing values
 * in the smaller array.
 * @param nums1 An array of numbers
 * @param nums2 An array of numbers
 * @returns An array of the sums of the numbers at each index
 */
export function addPairs(nums1: number[], nums2: number[]): number[] {
    return [];
}
