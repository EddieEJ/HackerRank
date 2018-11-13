# Candy Crush-like Strings 

Similarly to the [Candy Crush gameplay concept](https://en.wikipedia.org/wiki/Candy_Crush_Saga#Gameplay), if 3 or more matching characters are found in a string (repeated one after the other), they are "squashed" and a new string is produced. This is then repeated until there are no more squashes available in the provided string. The output would be the last modified version of the input.

*Example 1:*

```input := "aabbcccbba"```

When examining the input, the only matching character that occurs 3 or more times (one after the other) in the provided string is `'c'`, which is repeated 3 times. After squashing, this would produce the following:

```input := "aabbbba"```

Now, a new occurence of 3 or more characters has appeared - `'b'`, which is repeated 4 times. After squashing, this would produce the following:

```input := "aaa"```

We are now left with three occurences of `'a'` which also can be squashed. After squashing, the following will be produced:

```input := ""```

Since there are no more available squashes, the output of the program would be:

```output := ""```


*Example 2:*

```input := "zzqqqqqqxxxxxwwz"``` => squash => ```input := "zzxxxxxwwz"``` => squash => ```input := "zzwwz"``` => no more squashes available

```output := "zzwwz"```

## Solution Time and Space Complexity
This solution has an `O(n)` time and space complexity, where `n` is the length of the input string.
