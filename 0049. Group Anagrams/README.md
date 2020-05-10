# 49. Group Anagrams

> Given an array of strings, group anagrams together.
>
> Example:
>
> Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
> Output:
> [
> ["ate","eat","tea"],
> ["nat","tan"],
> ["bat"]
> ]
> Note:
>
> All inputs will be in lowercase.
> The order of your output does not matter.

## BCR

O(n\*k)

## #1 Solution

- Approach: Anagrams must have exact same characters occurence
- Time complexity: O(n\*k), n is length of strs, k is longest length of a string in strs
- Space complexity: O(n\*k)
