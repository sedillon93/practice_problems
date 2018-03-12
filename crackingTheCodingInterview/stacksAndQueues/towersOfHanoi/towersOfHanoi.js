'use strict';
/*
  You have three rods and N disks of different sizes which slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e. each disk sits on a larger disk).

  ** Write a program to move the disks from the first rod to the last rod using Stacks **
  Rules:
  1) only 1 disk can be moved at a time
  2) a disk is slid off the top of one rod onto the next rod
  3) a disk can only be placed on top of a larger disks

*/

/*
1) move 1 disk from rod 1 to rod 2
2) move 1 disk from rod 2 to rod 3
3) move 1 disk from rod 1 to rod 2
4) move 1 disk from rod 3 to rod 2
5) move 1 disk from rod 2 to rod 1
6) move 1 disk from rod 2 to rod 3


1) move 1 disk from rod 1 rod 2
2) move 1 disk from rod 2 to rod 3
3) move 1 disk from rod 1 to rod 2
4) move 1 disk from rod 3 to rod 2
5) move 1 disk from rod 2 to rod 1

*/
