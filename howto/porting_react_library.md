# Introduction to porting a React library

You will probably need to modify the tests. Many React-libs use enzyme and Inferno doesn't have it.

1. Figure out if you need to port any dependencies. If you do, start with them

2. Copy the source code to the `/src` folder

3. Update all the imports and dependencies to their Inferno equivalent. Continue until the library builds.

4. Port the first test and update imports and dependencies

The tests are often the most time consuming part to port. Sometimes it might even be better to write your own. I have even seen what appears to be nonsense tests in popular React libraries.

If you get stuck figuring our how to test an aspect of a library, check other inferno libs. And when you figure it out, write a howto and but it in this folder!

Stay strong,

Sebastian