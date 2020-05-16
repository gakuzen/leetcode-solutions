# 62. Unique Paths

> A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
>
> The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the > grid (marked 'Finish' in the diagram below).
>
> How many possible unique paths are there?
>
> Above is a 7 x 3 grid. How many possible unique paths are there?
>
> Example 1:
>
> Input: m = 3, n = 2
> Output: 3
> Explanation:
> From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
>
> 1. Right -> Right -> Down
> 2. Right -> Down -> Right
> 3. Down -> Right -> Right
>    Example 2:
>
> Input: m = 7, n = 3
> Output: 28

## BCR

O(m\*n)

## #1 Solution

- Approach: Backtrack by recursive
- Time complexity: O(2^(m+n))
- Space complexity: O(m+n)

## #2 Solution

- Approach: Backtrack by iterative
- Time complexity: O(2^(m+n))
- Space complexity: O(m+n)

## #3 Solution

- Approach: Recursive backtrack with memoization
- Time complexity: O(m\*n)
- Space complexity: O(m\*n)

## #4 Solution

- Approach: Bottom up
- Time complexity: O(m\*n)
- Space complexity: O(m\*n)
