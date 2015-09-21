# Sudoku Solver

Write a program that parses and solves Sudoku puzzles. Research the rules of the game if you aren't familiar. The puzzles will be presented as strings. Each character is one square on the Sudoku board going left to right and top to bottom. Blank squares are represented by a hyphen. Here are 15 puzzles.

```
---26-7-168--7--9-19---45--82-1---4---46-29---5---3-28--93---74-4--5--367-3-18---
--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3
29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9
-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-
6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--
---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----
-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--
-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7
----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----
3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--
3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-
-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-
--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--
----------2-65-------18--4--9----6-4-3---57-------------------73------9----------
---------------------------------------------------------------------------------
```

Here is the first puzzle represented as a board:
```
+-------+-------+-------+      +-------+-------+-------+
|       | 2 6   | 7   1 |      | 4 3 5 | 2 6 9 | 7 8 1 |
| 6 8   |   7   |   9   |      | 6 8 2 | 5 7 1 | 4 9 3 |
| 1 9   |     4 | 5     |      | 1 9 7 | 8 3 4 | 5 6 2 |
+-------+-------+-------+      +-------+-------+-------+
| 8 2   | 1     |   4   |      | 8 2 6 | 1 9 5 | 3 4 7 |
|     4 | 6   2 | 9     | ---> | 3 7 4 | 6 8 2 | 9 1 5 |
|   5   |     3 |   2 8 |      | 9 5 1 | 7 4 3 | 6 2 8 |
+-------+-------+-------+      +-------+-------+-------+
|     9 | 3     |   7 4 |      | 5 1 9 | 3 2 6 | 8 7 4 |
|   4   |   5   |   3 6 |      | 2 4 8 | 9 5 7 | 1 3 6 |
| 7   3 |   1 8 |       |      | 7 6 3 | 4 1 8 | 2 5 9 |
+-------+-------+-------+      +-------+-------+-------+
```

These are ordered by difficulty in ascending order. For example, every square in the first four puzzles can eventually be solved by checking all the numbers in the same row, column, and section and eliminating all but one of the possibilities. Later ones will need more sophisticated logic. Eventually making guesses will be necessary. Try to solve as many as you can. 

You should spend a lot of time crafting your algorithm and pseudo-coding your solution first. What will your approach be? Functional of object-oriented programming? Additional puzzles have been provided in the `.txt` files.
