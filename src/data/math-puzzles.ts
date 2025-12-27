export const mathPuzzleData = [
  {
    title: "Three Remainders, One Code",
    difficulty: "easy",
    category: "Number Theory",
    problemText:
      "A lock opens for the smallest positive integer $$n$$ less than $$60$$ such that:\n- When $$n$$ is divided by $$3$$, the remainder is $$1$$.\n- When $$n$$ is divided by $$4$$, the remainder is $$2$$.\n- When $$n$$ is divided by $$5$$, the remainder is $$3$$.\nWhat is $$n$$?",
    solutionOutline:
      "1. From the “divide by $$4$$ leaves remainder $$2$$” clue, write $$n=4k+2$$.\n2. Now enforce the “divide by $$3$$ leaves remainder $$1$$” clue:\n   $$4k+2$$ leaves remainder $$1$$ when divided by $$3$$, so $$4k$$ leaves remainder $$2$$ when divided by $$3$$.\n3. Since $$4$$ leaves remainder $$1$$ when divided by $$3$$, this means $$k$$ must leave remainder $$2$$ when divided by $$3$$. Write $$k=3m+2$$.\n4. Substitute back: $$n=4(3m+2)+2=12m+10$$.\n5. Use the “divide by $$5$$ leaves remainder $$3$$” clue:\n   $$12m+10$$ must leave remainder $$3$$ when divided by $$5$$.\n6. Reduce: $$12m+10$$ has the same remainder as $$2m+0$$ when divided by $$5$$, so $$2m$$ must leave remainder $$3$$ when divided by $$5$$.\n7. The smallest $$m$$ that works is $$m=4$$ (because $$2\\cdot4=8$$ leaves remainder $$3$$ when divided by $$5$$).\n8. Then $$n=12\\cdot4+10=58$$, which is already less than $$60$$, so it is the smallest.",
    answer: "58",
    hint: "Can you start by writing $$n=4k+2$$ and then use the other remainder clues to pin down $$k$$?",
  },
  {
    title: "The Two-Basket Swap",
    difficulty: "easy",
    category: "Algebra",
    problemText:
      "Alice has two baskets, $$A$$ and $$B$$, holding some apples.\nShe moves $$3$$ apples from $$A$$ to $$B$$ and then $$B$$ has exactly twice as many apples as $$A$$.\nNext she moves $$2$$ apples from $$B$$ back to $$A$$ and the baskets now contain equal numbers of apples.\nHow many apples were originally in basket $$A$$?",
    solutionOutline:
      "1. Let the original amounts be $$A=a$$ and $$B=b$$.\n2. After moving $$3$$ from $$A$$ to $$B$$:\n   $$A=a-3$$ and $$B=b+3$$.\n3. The clue says $$b+3=2(a-3)$$.\n4. After moving $$2$$ back from $$B$$ to $$A$$:\n   $$A=(a-3)+2=a-1$$ and $$B=(b+3)-2=b+1$$.\n5. Now they are equal: $$a-1=b+1$$, so $$b=a-2$$.\n6. Substitute into step $$3$$:\n   $$(a-2)+3=2(a-3)$$\n   $$a+1=2a-6$$\n   $$a=7$$.\n7. Therefore, basket $$A$$ originally had $$7$$ apples.",
    answer: "7",
    hint: "If the starting amounts are $$a$$ and $$b$$, what equations do $$b+3$$ and $$a-3$$ satisfy after the first transfer?",
  },
  {
    title: "The Color-Copy Marble",
    difficulty: "easy",
    category: "Probability",
    problemText:
      "A bag contains $$3$$ red marbles and $$2$$ blue marbles.\nYou draw one marble at random, put it back, and then add one extra marble of the same color you drew.\nYou then draw again.\nWhat is the probability that the second draw is red?",
    solutionOutline:
      "1. Let $$R$$ be the event “first draw is red.” Then $$P(R)=3/5$$.\n2. If the first draw is red, the bag becomes $$4$$ red and $$2$$ blue, so $$P(\\text{second red} \\mid R)=4/6=2/3$$.\n3. If the first draw is blue, the bag becomes $$3$$ red and $$3$$ blue, so $$P(\\text{second red} \\mid \\text{first blue})=3/6=1/2$$.\n4. Use total probability:\n   $$P(\\text{second red})=(3/5)(2/3)+(2/5)(1/2)$$.\n5. Compute:\n   $$(3/5)(2/3)=2/5$$ and $$(2/5)(1/2)=1/5$$.\n6. Total: $$2/5+1/5=3/5$$.",
    answer: "3/5",
    hint: "What is the second-draw red probability if the first draw was red, and what is it if the first draw was blue?",
  },
  {
    title: "Three Midpoints, One Triangle",
    difficulty: "easy",
    category: "Geometry",
    problemText:
      "A square park has side length $$10$$.\nYou mark the midpoints of three consecutive sides, then connect those three midpoints to form a triangle.\nWhat is the area of that triangle?",
    solutionOutline:
      "1. Place the square with corners at $$ (0,0),(10,0),(10,10),(0,10) $$.\n2. The midpoints of three consecutive sides can be:\n   $$M_1=(5,0)$$ on the bottom side,\n   $$M_2=(10,5)$$ on the right side,\n   $$M_3=(5,10)$$ on the top side.\n3. Segment $$M_1M_3$$ is vertical with length $$10$$ (from $$y=0$$ to $$y=10$$).\n4. Point $$M_2$$ is horizontally $$5$$ units away from the line $$x=5$$.\n5. So triangle $$M_1M_2M_3$$ has base $$10$$ and height $$5$$.\n6. Area $$= (1/2)\\cdot10\\cdot5=25$$.",
    answer: "25",
    hint: "If the square corners are $$ (0,0),(10,0),(10,10),(0,10) $$, what are the three midpoint coordinates?",
  },
  {
    title: "The Run-Length Counter",
    difficulty: "easy",
    category: "Sequences",
    problemText:
      "Write the infinite list:\n$$1,2,2,3,3,3,4,4,4,4,5,5,5,5,5, ...$$\nIn general, the number $$n$$ appears exactly $$n$$ times.\nWhat is the $$100$$th term of the list?",
    solutionOutline:
      "1. After listing all the $$1$$s through all the $$k$$s, the total number of terms used is:\n   $$1+2+3+...+k=k(k+1)/2$$.\n2. We want the smallest $$k$$ such that $$k(k+1)/2>=100$$.\n3. Check $$k=13$$: $$13\\cdot14/2=91$$ (not enough).\n4. Check $$k=14$$: $$14\\cdot15/2=105$$ (enough).\n5. That means terms $$92$$ through $$105$$ are all equal to $$14$$.\n6. So the $$100$$th term is $$14$$.",
    answer: "14",
    hint: "How many terms are there up through all the $$k$$s, in terms of $$1+2+...+k$$?",
  },
  {
    title: "Separated Seats",
    difficulty: "easy",
    category: "Combinatorics",
    problemText:
      "Five guests $$A,B,C,D,E$$ sit in a line.\nHow many seatings are possible if $$A$$ and $$E$$ refuse to sit next to each other?",
    solutionOutline:
      "1. Total seatings of $$5$$ distinct guests: $$5!=120$$.\n2. Count “bad” seatings where $$A$$ sits adjacent to $$E$$.\n3. Treat $$A$$ and $$E$$ as a single block. The block can be $$AE$$ or $$EA$$, giving $$2$$ internal orders.\n4. Now you have $$4$$ objects to arrange: the $$AE$$-block plus $$B,C,D$$.\n5. Arrangements: $$4!=24$$.\n6. Bad seatings: $$2\\cdot24=48$$.\n7. Good seatings: $$120-48=72$$.",
    answer: "72",
    hint: "How many seatings are there in total, and how many have $$A$$ adjacent to $$E$$ if you treat them as one block?",
  },
  {
    title: "Two Numbers, Two Clues",
    difficulty: "easy",
    category: "Algebra",
    problemText:
      "Two real numbers $$a$$ and $$b$$ satisfy $$a+b=7$$ and $$a^2+b^2=29$$.\nWhat is the value of $$ab$$?",
    solutionOutline:
      "1. Square the sum: $$(a+b)^2=7^2=49$$.\n2. Expand: $$(a+b)^2=a^2+b^2+2ab$$.\n3. Substitute $$a^2+b^2=29$$:\n   $$49=29+2ab$$.\n4. So $$2ab=20$$ and $$ab=10$$.",
    answer: "10",
    hint: "What is $$ (a+b)^2 $$ in terms of $$a^2+b^2$$ and $$ab$$?",
  },
  {
    title: "The 36-Box Trick",
    difficulty: "easy",
    category: "Number Theory",
    problemText:
      "Positive integers $$a$$ and $$b$$ satisfy $$a+b+ab=35$$.\nAmong all such pairs, what is the largest possible value of the smaller of $$a$$ and $$b$$?",
    solutionOutline:
      "1. Rewrite:\n   $$a+b+ab=35$$\n   $$ab+a+b+1=36$$\n   $$(a+1)(b+1)=36$$.\n2. Since $$a$$ and $$b$$ are positive integers, $$a+1$$ and $$b+1$$ are integers at least $$2$$.\n3. To maximize the smaller of $$a$$ and $$b$$, we want $$a+1$$ and $$b+1$$ as close as possible.\n4. Factor $$36$$: the closest factor pair is $$6\\cdot6$$.\n5. So $$a+1=6$$ and $$b+1=6$$, giving $$a=b=5$$.\n6. The smaller value is $$5$$.",
    answer: "5",
    hint: "Can you rewrite $$a+b+ab$$ as $$ (a+1)(b+1)-1 $$?",
  },
  {
    title: "One Pass Down the Hall",
    difficulty: "easy",
    category: "Logic/Invariants",
    problemText:
      "There are $$12$$ lamps in a straight line, all initially off.\nSwitch $$i$$ toggles lamp $$i$$ and also toggles its immediate neighbors (if they exist).\nYou press every switch exactly once (in any order).\nHow many lamps are on at the end?",
    solutionOutline:
      "1. The final state depends only on how many times each lamp is toggled (order does not matter).\n2. Lamp $$1$$ is toggled by switches $$1$$ and $$2$$: total toggles $$=2$$, so it ends off.\n3. Lamp $$12$$ is toggled by switches $$11$$ and $$12$$: total toggles $$=2$$, so it ends off.\n4. Any interior lamp $$i$$ with $$2<=i<=11$$ is toggled by switches $$i-1$$, $$i$$, and $$i+1$$: total toggles $$=3$$.\n5. An odd number of toggles flips “off” to “on,” so lamps $$2$$ through $$11$$ end on.\n6. Count: $$10$$ lamps are on.",
    answer: "10",
    hint: "For a lamp in the middle (not at an end), how many of the $$12$$ switches affect it?",
  },
  {
    title: "Half Each Time",
    difficulty: "easy",
    category: "Sequences and Series",
    problemText:
      "A cookie starts whole.\nEvery minute, Alice eats exactly half of whatever cookie remains.\nAfter $$10$$ minutes, what fraction of the original cookie has been eaten?",
    solutionOutline:
      "1. After $$1$$ minute, remaining fraction is $$1/2$$.\n2. After $$2$$ minutes, remaining fraction is $$(1/2)^2$$.\n3. After $$10$$ minutes, remaining fraction is $$(1/2)^{10}=1/1024$$.\n4. Eaten fraction $$=1-1/1024=1023/1024$$.",
    answer: "1023/1024",
    hint: "What fraction remains after $$1$$ minute, after $$2$$ minutes, and after $$10$$ minutes?",
  },
  {
    title: "Heptagon Spiderweb",
    difficulty: "medium",
    category: "Combinatorics/Geometry",
    problemText:
      "A convex heptagon has all its diagonals drawn, and no three diagonals intersect at the same interior point.\nHow many regions is the interior of the heptagon divided into?",
    solutionOutline:
      "1. For a convex $$n$$-gon with all diagonals drawn and no three concurrent, the number of regions is:\n   $$1 + C(n,2) + C(n,4)$$.\n2. Here $$n=7$$.\n3. Compute $$C(7,2)=21$$.\n4. Compute $$C(7,4)=35$$.\n5. Total regions:\n   $$1+21+35=57$$.",
    answer: "57",
    hint: "How many diagonal intersection points are created by choosing $$4$$ vertices of the heptagon?",
  },
  {
    title: "Secret Santa With a Veto",
    difficulty: "medium",
    category: "Combinatorics",
    problemText:
      "Six friends $$A,B,C,D,E,F$$ do a Secret Santa.\nEach person gives exactly one gift, and no one may give to themselves.\nAdditionally, $$A$$ refuses to give to $$B$$.\nHow many valid gift-assignments are possible?",
    solutionOutline:
      "1. First count all assignments with no one giving to themselves: these are derangements of $$6$$ people.\n2. By inclusion-exclusion, the number of derangements of $$6$$ is $$265$$.\n3. Now subtract the “bad” derangements where $$A$$ gives to $$B$$.\n4. Fix $$A\\to B$$. The remaining $$5$$ givers $$B,C,D,E,F$$ must give to the remaining recipients $$A,C,D,E,F$$.\n5. In this reduced problem, $$B$$ cannot give to $$B$$ automatically (since $$B$$ is not a recipient), so the only forbidden fixed points are:\n   $$C\\to C, D\\to D, E\\to E, F\\to F$$.\n6. Count these using inclusion-exclusion on those $$4$$ forbidden fixed points:\n   - Total permutations: $$5!=120$$.\n   - Fix exactly one of the $$4$$: $$C(4,1)\\cdot4!=4\\cdot24=96$$.\n   - Fix exactly two: $$C(4,2)\\cdot3!=6\\cdot6=36$$.\n   - Fix exactly three: $$C(4,3)\\cdot2!=4\\cdot2=8$$.\n   - Fix all four: $$C(4,4)\\cdot1!=1\\cdot1=1$$.\n   So bad-with-$$A\\to B$$ count:\n   $$120-96+36-8+1=53$$.\n7. Therefore valid assignments:\n   $$265-53=212$$.",
    answer: "212",
    hint: "Count all derangements of $$6$$ people, then subtract those where $$A$$ is forced to give to $$B$$.",
  },
  {
    title: "The Lattice Lagoon",
    difficulty: "medium",
    category: "Geometry",
    problemText:
      "Consider the polygon with vertices (in order)\n$$ (0,0),(6,0),(6,2),(2,5),(0,5) $$.\nHow many lattice points (points with integer coordinates) lie strictly inside this polygon?",
    solutionOutline:
      "1. Compute the polygon’s area using the shoelace method.\n2. Using the ordered vertices, the shoelace sum gives area $$24$$.\n3. Count boundary lattice points using edge steps:\n   - From $$ (0,0) $$ to $$ (6,0) $$ contributes $$6$$ boundary points along the edge.\n   - From $$ (6,0) $$ to $$ (6,2) $$ contributes $$2$$.\n   - From $$ (6,2) $$ to $$ (2,5) $$ has step differences $$4$$ and $$3$$, contributing $$gcd(4,3)=1$$.\n   - From $$ (2,5) $$ to $$ (0,5) $$ contributes $$2$$.\n   - From $$ (0,5) $$ to $$ (0,0) $$ contributes $$5$$.\n   Total boundary points: $$B=6+2+1+2+5=16$$.\n4. Apply Pick’s Theorem: $$A=I + B/2 - 1$$.\n5. Solve for interior points:\n   $$I = A - B/2 + 1 = 24 - 16/2 + 1 = 24 - 8 + 1 = 17$$.",
    answer: "17",
    hint: "Can you compute the area and the number of boundary lattice points, then use Pick’s theorem?",
  },
  {
    title: "The Telescoping Staircase",
    difficulty: "medium",
    category: "Sequences and Series",
    problemText:
      "A robot earns a score of $$1/(k(k+1))$$ on step $$k$$.\nWhat is the total score after $$100$$ steps?\nThat is, compute\n$$1/(1*2)+1/(2*3)+1/(3*4)+...+1/(100*101)$$",
    solutionOutline:
      "1. Use the identity:\n   $$1/(k(k+1)) = 1/k - 1/(k+1)$$.\n2. Substitute into the sum:\n   $$(1/1-1/2) + (1/2-1/3) + (1/3-1/4) + ... + (1/100-1/101)$$.\n3. Everything cancels in pairs, leaving only the first and the last negative term:\n   $$1 - 1/101$$.\n4. So the total is $$100/101$$.",
    answer: "100/101",
    hint: "Can you rewrite $$1/(k(k+1))$$ as the difference of two simpler fractions?",
  },
  {
    title: "Double-Headed Suspicion",
    difficulty: "medium",
    category: "Probability",
    problemText:
      "You have two coins:\n- Coin $$F$$ is fair.\n- Coin $$D$$ is double-headed.\nYou pick one coin at random and flip it $$3$$ times.\nAll $$3$$ flips come up heads.\nWhat is the probability you picked the double-headed coin?",
    solutionOutline:
      "1. Prior probabilities: $$P(D)=1/2$$ and $$P(F)=1/2$$.\n2. Likelihoods:\n   - If the coin is double-headed, $$P(\\text{HHH} \\mid D)=1$$.\n   - If the coin is fair, $$P(\\text{HHH} \\mid F)=(1/2)^3=1/8$$.\n3. Total probability of $$\\text{HHH}$$:\n   $$P(\\text{HHH}) = (1/2)\\cdot1 + (1/2)\\cdot(1/8) = 1/2 + 1/16 = 9/16$$.\n4. By Bayes’ rule:\n   $$P(D \\mid \\text{HHH}) = \\frac{(1/2)\\cdot1}{9/16} = \\frac{1/2}{9/16} = 8/9$$.",
    answer: "8/9",
    hint: "How likely are three heads with the double-headed coin versus with the fair coin?",
  },
  {
    title: "Three Beacons, Total Distance",
    difficulty: "medium",
    category: "Algebra/Geometry",
    problemText:
      "Three beacons sit on a straight road at positions $$1$$, $$2$$, and $$3$$.\nA traveler stands at some real position $$x$$.\nThe sum of the three distances to the beacons is exactly\n$$|x-1|+|x-2|+|x-3|=4$$\nHow many real solutions for $$x$$ are there?",
    solutionOutline:
      "1. Break the line into ranges where absolute values simplify.\n2. Case $$x<=1$$:\n   $$|x-1|+|x-2|+|x-3|=(1-x)+(2-x)+(3-x)=6-3x$$.\n   Solve $$6-3x=4$$ to get $$x=2/3$$ (valid in this case).\n3. Case $$1<=x<=2$$:\n   Sum $$=(x-1)+(2-x)+(3-x)=4-x$$.\n   Solve $$4-x=4$$ gives $$x=0$$ (not in this interval), so no solutions here.\n4. Case $$2<=x<=3$$:\n   Sum $$=(x-1)+(x-2)+(3-x)=x$$.\n   Solve $$x=4$$ (not in this interval), so no solutions here.\n5. Case $$x>=3$$:\n   Sum $$=(x-1)+(x-2)+(x-3)=3x-6$$.\n   Solve $$3x-6=4$$ to get $$x=10/3$$ (valid in this case).\n6. Therefore there are exactly $$2$$ real solutions.",
    answer: "2",
    hint: "Try solving separately on the ranges $$x<=1$$, $$1<=x<=2$$, $$2<=x<=3$$, and $$x>=3$$.",
  },
  {
    title: "The Reciprocal Dinner Bill",
    difficulty: "medium",
    category: "Number Theory",
    problemText:
      "Positive integers $$x$$ and $$y$$ satisfy\n$$1/x + 1/y = 1/10$$\nConsider all ordered pairs $$ (x,y) $$ that satisfy this.\nWhat is the sum of all values of $$x+y$$ over every ordered solution $$ (x,y) $$?",
    solutionOutline:
      "1. Start from $$1/x + 1/y = 1/10$$.\n2. Multiply by $$10xy$$:\n   $$10y + 10x = xy$$.\n3. Rearrange:\n   $$xy - 10x - 10y = 0$$.\n4. Add $$100$$ to both sides to factor:\n   $$xy - 10x - 10y + 100 = 100$$\n   $$(x-10)(y-10)=100$$.\n5. Let $$d$$ be a positive divisor of $$100$$. Then one ordered solution is:\n   $$x-10=d$$ and $$y-10=100/d$$,\n   so $$x=10+d$$ and $$y=10+100/d$$.\n6. There are $$9$$ positive divisors of $$100$$, giving $$9$$ ordered solutions.\n7. Sum all $$x+y$$:\n   $$x+y=(10+d)+(10+100/d)=20+d+100/d$$.\n8. Over all divisors, $$\\sum d = \\sum 100/d$$, so\n   $$\\sum (d+100/d)=2\\sum d$$.\n9. Divisors of $$100$$ are $$1,2,4,5,10,20,25,50,100$$ with sum $$217$$.\n10. Therefore total sum is:\n   $$20\\cdot9 + 2\\cdot217 = 180 + 434 = 614$$.",
    answer: "614",
    hint: "Try rewriting $$1/x + 1/y = 1/10$$ into a factorization like $$ (x-10)(y-10)=100 $$.",
  },
  {
    title: "Museum Robot Detour",
    difficulty: "medium",
    category: "Combinatorics",
    problemText:
      "A robot moves on a grid from $$ (0,0) $$ to $$ (5,5) $$.\nEach move is either one step right (from $$ (x,y) $$ to $$ (x+1,y) $$) or one step up (from $$ (x,y) $$ to $$ (x,y+1) $$).\nTwo cells are blocked and may not be stepped on: $$ (2,2) $$ and $$ (4,3) $$.\nHow many valid paths are there?",
    solutionOutline:
      "1. Any path from $$ (0,0) $$ to $$ (5,5) $$ uses $$5$$ rights and $$5$$ ups, so total paths are $$C(10,5)=252$$.\n2. Subtract paths that go through $$A=(2,2)$$.\n   - Paths from $$ (0,0) $$ to $$A$$: $$C(4,2)=6$$.\n   - Paths from $$A$$ to $$ (5,5) $$: $$C(6,3)=20$$.\n   - Total through $$A$$: $$6\\cdot20=120$$.\n3. Subtract paths that go through $$B=(4,3)$$.\n   - Paths from $$ (0,0) $$ to $$B$$: $$C(7,4)=35$$.\n   - Paths from $$B$$ to $$ (5,5) $$: $$C(3,1)=3$$.\n   - Total through $$B$$: $$35\\cdot3=105$$.\n4. Add back paths that go through both $$A$$ then $$B$$.\n   - Paths $$ (0,0) $$ to $$A$$: $$6$$.\n   - Paths $$A$$ to $$B$$ requires $$2$$ rights and $$1$$ up: $$C(3,2)=3$$.\n   - Paths $$B$$ to $$ (5,5) $$: $$3$$.\n   - Total through both: $$6\\cdot3\\cdot3=54$$.\n5. Valid paths:\n   $$252-120-105+54=81$$.",
    answer: "81",
    hint: "Count all monotone paths, subtract those that pass through each blocked cell, then add back paths that pass through both.",
  },
  {
    title: "The Sprinkler Radius",
    difficulty: "medium",
    category: "Geometry",
    problemText:
      "A triangular garden has side lengths $$13$$, $$14$$, and $$15$$.\nA circular sprinkler is placed so that it just touches all three sides (the circle is tangent to each side).\nWhat is the radius of the sprinkler?",
    solutionOutline:
      "1. The semiperimeter is:\n   $$s=(13+14+15)/2=42/2=21$$.\n2. Use Heron’s formula for area:\n   $$\\text{Area} = \\sqrt{s(s-13)(s-14)(s-15)}$$.\n3. Compute the product inside:\n   $$s(s-13)(s-14)(s-15)=21\\cdot8\\cdot7\\cdot6=7056$$.\n4. Note $$7056=84^2$$, so the area is $$84$$.\n5. For an incircle, $$\\text{Area} = r\\cdot s$$.\n6. Thus $$r=84/21=4$$.",
    answer: "4",
    hint: "Compute the semiperimeter $$s$$, then use Heron’s formula and the fact that area equals $$r\\cdot s$$.",
  },
  {
    title: "The Plus-Minus Shuffle",
    difficulty: "medium",
    category: "Logic/Algebra",
    problemText:
      "Start with the expression\n$$1-2+3-4+5-6+...+99-100$$\nYou are allowed to permute the numbers $$1$$ through $$100$$ however you like, but the signs stay in the same alternating pattern $$+,-,+,-,...$$.\nWhat is the maximum possible value of the resulting expression?",
    solutionOutline:
      "1. There are $$50$$ plus signs and $$50$$ minus signs.\n2. The value is:\n   $$(\\text{sum of numbers placed on plus spots}) - (\\text{sum of numbers placed on minus spots})$$.\n3. To maximize this, put the largest $$50$$ numbers on plus spots and the smallest $$50$$ on minus spots.\n4. Sum of $$51$$ through $$100$$:\n   $$ (1+2+...+100) - (1+2+...+50) $$\n   $$=5050-1275=3775$$.\n5. Sum of $$1$$ through $$50$$ is $$1275$$.\n6. Maximum value:\n   $$3775-1275=2500$$.",
    answer: "2500",
    hint: "Which numbers would you want on the $$+$$ positions, and which on the $$-$$ positions?",
  },
  {
    title: "Fibonacci Gearbox",
    difficulty: "medium",
    category: "Sequences",
    problemText:
      "Define a sequence by\n$$a_1=1$$ and $$a_{n+1}=1+1/a_n$$ for all $$n>=1$$.\nWhat is $$a_{10}$$?",
    solutionOutline:
      "1. Compute a few terms:\n   $$a_1=1$$\n   $$a_2=1+1/1=2$$\n   $$a_3=1+1/2=3/2$$\n   $$a_4=1+2/3=5/3$$\n   $$a_5=1+3/5=8/5$$.\n2. The numerators and denominators follow Fibonacci numbers:\n   $$1,2,3,5,8,...$$.\n3. Conjecture $$a_n = F_{n+1}/F_n$$ where $$F_1=1, F_2=1$$.\n4. Check the recurrence:\n   $$1+1/a_n = 1 + F_n/F_{n+1} = (F_{n+1}+F_n)/F_{n+1} = F_{n+2}/F_{n+1}$$.\n5. So $$a_{10}=F_{11}/F_{10}$$.\n6. Fibonacci values: $$F_{10}=55$$ and $$F_{11}=89$$.\n7. Therefore $$a_{10}=89/55$$.",
    answer: "89/55",
    hint: "Compute $$a_1,a_2,a_3,a_4,a_5$$ and look for a pattern in the numerators and denominators.",
  },
  {
    title: "Rotating Corner Colors",
    difficulty: "medium",
    category: "Combinatorics",
    problemText:
      "You color the $$4$$ vertices of a square using $$3$$ colors.\nTwo colorings are considered the same if one can be rotated to match the other (rotations by $$0$$, $$90$$, $$180$$, $$270$$ degrees).\nHow many distinct colorings are there?",
    solutionOutline:
      "1. Use Burnside’s counting idea: average the number of colorings fixed by each rotation.\n2. Identity rotation fixes all colorings: $$3^4=81$$.\n3. A $$180$$-degree rotation pairs opposite vertices, so each opposite pair must match:\n   $$3^2=9$$ fixed colorings.\n4. A $$90$$-degree rotation forces all four vertices to have the same color:\n   $$3$$ fixed colorings.\n5. A $$270$$-degree rotation is the same condition as $$90$$ degrees:\n   $$3$$ fixed colorings.\n6. Average:\n   $$(81+9+3+3)/4=96/4=24$$.",
    answer: "24",
    hint: "Under a $$90$$-degree rotation, what must be true about all four vertex colors?",
  },
  {
    title: "The Cyclic Triple",
    difficulty: "medium",
    category: "Number Theory",
    problemText:
      "Find the smallest $$6$$-digit number $$n$$ such that multiplying by $$3$$ moves the first digit to the end.\nIn digit form: if $$n=abcdef$$, then $$3n=bcdefa$$.\nWhat is $$n$$?",
    solutionOutline:
      "1. Write $$n=100000a+b$$ where $$a$$ is the first digit (so $$1<=a<=9$$) and $$b$$ is the last $$5$$ digits (so $$0<=b<=99999$$).\n2. The rotated number $$bcdefa$$ equals $$10b+a$$.\n3. The condition is:\n   $$3(100000a+b)=10b+a$$.\n4. Expand and rearrange:\n   $$300000a+3b=10b+a$$\n   $$299999a=7b$$\n   $$b=(299999/7)a$$.\n5. Note that $$299999=7\\cdot42857$$, so $$b=42857a$$.\n6. Since $$b$$ must be a $$5$$-digit number, $$42857a<100000$$, so $$a$$ can be $$1$$ or $$2$$.\n7. If $$a=1$$, then $$n=100000+42857=142857$$.\n8. If $$a=2$$, then $$n=200000+85714=285714$$.\n9. The smallest is $$142857$$.",
    answer: "142857",
    hint: "Write $$n=100000a+b$$ and translate “move the first digit to the end” into an algebra equation.",
  },
  {
    title: "High Score Dice",
    difficulty: "medium",
    category: "Probability",
    problemText:
      "Roll two fair six-sided dice.\nYou win the larger of the two numbers (in points).\nWhat is your expected score?",
    solutionOutline:
      "1. Let $$M$$ be the maximum of the two dice.\n2. Use the identity:\n   $$E[M] = P(M>=1)+P(M>=2)+P(M>=3)+P(M>=4)+P(M>=5)+P(M>=6)$$.\n3. For each $$k$$, compute $$P(M>=k)=1-P(M<=k-1)$$.\n4. Since the dice are independent, $$P(M<=k-1)=((k-1)/6)^2$$.\n5. Therefore:\n   $$E[M]=\\sum_{k=1}^{6} (1-((k-1)/6)^2)$$.\n6. Compute the sum of squares:\n   $$0^2+1^2+2^2+3^2+4^2+5^2=55$$.\n7. Then\n   $$E[M]=6-(1/36)\\cdot55=(216-55)/36=161/36$$.",
    answer: "161/36",
    hint: "Try using $$E[M]=P(M>=1)+P(M>=2)+...+P(M>=6)$$ and compute $$P(M<=k)$$.",
  },
  {
    title: "Quadratic Footprints",
    difficulty: "medium",
    category: "Algebra",
    problemText:
      "A function $$f$$ is known to be a quadratic polynomial (degree at most $$2$$) on the integers.\nYou are told that $$f(1)=1$$, $$f(2)=0$$, and $$f(3)=1$$.\nWhat is $$f(0)$$?",
    solutionOutline:
      "1. For a quadratic on consecutive integers, the second differences are constant.\n2. Compute first differences:\n   $$f(2)-f(1)=0-1=-1$$\n   $$f(3)-f(2)=1-0=1$$.\n3. The change in first differences is:\n   $$1-(-1)=2$$.\n4. So the next earlier first difference should be $$-1-2=-3$$.\n5. That means:\n   $$f(1)-f(0)=-3$$.\n6. With $$f(1)=1$$, solve:\n   $$1-f(0)=-3$$\n   $$f(0)=4$$.",
    answer: "4",
    hint: "For a quadratic, the second differences are constant. What are the first differences from $$f(1)$$ to $$f(2)$$ and from $$f(2)$$ to $$f(3)$$?",
  },
  {
    title: "Three Jars, One Equation",
    difficulty: "medium",
    category: "Number Theory",
    problemText:
      "Digits $$a,b,c$$ are chosen from $$0,1,2,3,4,5,6,7,8,9$$.\nHow many ordered triples $$ (a,b,c) $$ satisfy\n$$a+2b+3c=20$$ ?",
    solutionOutline:
      "1. Fix a digit $$c$$. Then the equation becomes:\n   $$a+2b = 20-3c$$.\n2. Since $$a$$ must be a digit, we need $$0<=a<=9$$, so:\n   $$0<=20-3c-2b<=9$$.\n3. For each allowed $$c$$ (only $$c=0,1,2,3,4,5,6$$ can work because $$3c<=20$$), count the digit values of $$b$$ that make $$a=20-3c-2b$$ land between $$0$$ and $$9$$.\n4. The counts by $$c$$ are:\n   - $$c=0$$ gives $$4$$ solutions.\n   - $$c=1$$ gives $$5$$ solutions.\n   - $$c=2$$ gives $$5$$ solutions.\n   - $$c=3$$ gives $$5$$ solutions.\n   - $$c=4$$ gives $$5$$ solutions.\n   - $$c=5$$ gives $$3$$ solutions.\n   - $$c=6$$ gives $$2$$ solutions.\n5. Total:\n   $$4+5+5+5+5+3+2=29$$.",
    answer: "29",
    hint: "For each fixed digit $$c$$, the equation becomes $$a+2b=20-3c$$. How many digit pairs $$ (a,b) $$ solve that?",
  },
  {
    title: "Tangent Lantern",
    difficulty: "medium",
    category: "Geometry",
    problemText:
      "A circle has radius $$5$$.\nFrom an external point $$P$$, a tangent segment to the circle has length $$12$$.\nLet $$O$$ be the circle’s center.\nWhat is the distance $$OP$$?",
    solutionOutline:
      "1. Let $$T$$ be the point of tangency.\n2. The radius to the tangency point is perpendicular to the tangent, so triangle $$OTP$$ is right-angled at $$T$$.\n3. The leg lengths are:\n   $$OT=5$$ and $$PT=12$$.\n4. By the Pythagorean theorem:\n   $$OP^2 = OT^2 + PT^2 = 5^2 + 12^2 = 25 + 144 = 169$$.\n5. Therefore $$OP=13$$.",
    answer: "13",
    hint: "The radius to the point of tangency is perpendicular to the tangent. What right triangle does that give you?",
  },
  {
    title: "Balancing Stones",
    difficulty: "medium",
    category: "Logic/Invariants",
    problemText:
      "Write the numbers $$1,2,3,...,100$$ on a board.\nA move picks two numbers that differ by at least $$2$$, increases the smaller by $$1$$, and decreases the larger by $$1$$.\nYou repeat moves until no move is possible.\nAt that point, how many numbers on the board equal $$51$$?",
    solutionOutline:
      "1. Each move increases one number by $$1$$ and decreases another by $$1$$, so the total sum is invariant.\n2. The initial sum is:\n   $$1+2+...+100 = 100\\cdot101/2 = 5050$$.\n3. A move reduces the spread (the max minus the min) whenever it is at least $$2$$, so the process must end when all numbers differ by at most $$1$$.\n4. At the end, every number must be either $$50$$ or $$51$$ because the average is:\n   $$5050/100 = 50.5$$.\n5. Let $$k$$ be the number of $$51$$s. Then the sum is:\n   $$50(100-k) + 51k = 5000 + k$$.\n6. Set equal to $$5050$$:\n   $$5000+k=5050$$\n   $$k=50$$.\n7. So there are $$50$$ numbers equal to $$51$$.",
    answer: "50",
    hint: "At the end, all numbers must be either $$m$$ or $$m+1$$. What is the average of $$1$$ through $$100$$?",
  },
  {
    title: "Three Ratios",
    difficulty: "medium",
    category: "Inequalities",
    problemText:
      "Positive real numbers $$a,b,c$$ satisfy $$abc=1$$.\nWhat is the minimum possible value of\n$$a/b + b/c + c/a$$ ?",
    solutionOutline:
      "1. Apply AM-GM to the three positive terms:\n   $$a/b + b/c + c/a >= 3\\cdot((a/b)(b/c)(c/a))^{1/3}$$.\n2. The product simplifies:\n   $$(a/b)(b/c)(c/a)=1$$.\n3. So the inequality becomes:\n   $$a/b + b/c + c/a >= 3\\cdot(1)^{1/3}=3$$.\n4. Equality happens when $$a/b=b/c=c/a$$, which forces $$a=b=c$$.\n5. With $$abc=1$$, this gives $$a=b=c=1$$.\n6. Therefore the minimum value is $$3$$.",
    answer: "3",
    hint: "What is $$ (a/b)(b/c)(c/a) $$, and what does AM-GM say about a sum given a fixed product?",
  },
  {
    title: "Perfect Interleave",
    difficulty: "medium",
    category: "Combinatorics",
    problemText:
      "A deck has $$8$$ cards labeled $$1$$ through $$8$$ in order.\nA 'perfect interleave' shuffle does the following:\n- split into the top half $$1,2,3,4$$ and bottom half $$5,6,7,8$$\n- interleave starting with the bottom half, producing $$5,1,6,2,7,3,8,4$$\nIf you repeat this same shuffle over and over, after how many shuffles does the deck return to its original order?",
    solutionOutline:
      "1. Track positions. After the shuffle, the deck order is $$5,1,6,2,7,3,8,4$$.\n2. This means the card originally in position:\n   $$1\\to2, 2\\to4, 3\\to6, 4\\to8, 5\\to1, 6\\to3, 7\\to5, 8\\to7$$.\n3. Write the cycle starting from position $$1$$:\n   $$1\\to2\\to4\\to8\\to7\\to5\\to1$$, a cycle of length $$6$$.\n4. Position $$3$$ cycles as:\n   $$3\\to6\\to3$$, a cycle of length $$2$$.\n5. The whole deck returns when both cycles return, after $$lcm(6,2)=6$$ shuffles.",
    answer: "6",
    hint: "Turn the shuffle into a position-mapping and find the cycle lengths. What is the least common multiple of those lengths?",
  },
  {
    title: "Last Digit Parade",
    difficulty: "hard",
    category: "Number Theory",
    problemText:
      "Let\n$$S = 1^1 + 2^2 + 3^3 + ... + 2025^{2025}$$\nWhat is the last digit of $$S$$?",
    solutionOutline:
      "1. The last digit means working modulo $$10$$.\n2. The last digit of $$n^n$$ depends on:\n   - the last digit of $$n$$ (so $$n$$ modulo $$10$$), and\n   - the cycle of powers (which depends on $$n$$ modulo $$4$$ for most last digits).\n3. Therefore $$n^n$$ modulo $$10$$ depends only on $$n$$ modulo $$20$$ (because $$20$$ is a common period for “mod $$10$$” and “mod $$4$$”).\n4. So the sequence of last digits of $$1^1,2^2,...$$ repeats every $$20$$ terms.\n5. Compute last digits for $$n=1$$ to $$20$$:\n   $$1,4,7,6,5,6,3,6,9,0,1,6,3,6,5,6,7,4,9,0$$.\n   Their sum is $$94$$, so the sum modulo $$10$$ is $$4$$.\n6. Write $$2025=20\\cdot101+5$$.\n7. So\n   $$S \\text{ mod }10 = 101\\cdot4 + (1^1+2^2+3^3+4^4+5^5)\\text{ mod }10$$.\n8. The last digits of $$1^1,2^2,3^3,4^4,5^5$$ are $$1,4,7,6,5$$, summing to $$23$$, which is $$3$$ modulo $$10$$.\n9. Final last digit:\n   $$101\\cdot4 + 3 = 404+3=407$$, so the last digit is $$7$$.",
    answer: "7",
    hint: "The last digit of $$n^n$$ is determined by $$n$$ modulo $$10$$ and by $$n$$ modulo $$4$$. What period does that suggest?",
  },
  {
    title: "Satellites Without Neighbors",
    difficulty: "hard",
    category: "Combinatorics",
    problemText:
      "There are $$12$$ satellites evenly spaced in a circular orbit.\nYou must activate exactly $$5$$ satellites so that no two activated satellites are adjacent.\nHow many different activation sets are possible?",
    solutionOutline:
      "1. Break into two cases based on whether a particular satellite (call it satellite $$1$$) is activated.\n2. Case A: satellite $$1$$ is NOT activated.\n   Then we are choosing $$5$$ non-adjacent satellites from the remaining $$11$$ satellites in a line.\n   The count for choosing $$k$$ non-adjacent items from a line of $$n$$ is $$C(n-k+1,k)$$.\n   Here $$n=11$$ and $$k=5$$, so the count is $$C(7,5)=21$$.\n3. Case B: satellite $$1$$ IS activated.\n   Then satellites $$12$$ and $$2$$ cannot be activated.\n   That leaves satellites $$3$$ through $$11$$, which is a line of $$9$$ satellites.\n   Now choose $$4$$ non-adjacent satellites from $$9$$:\n   $$C(9-4+1,4)=C(6,4)=15$$.\n4. Total activation sets:\n   $$21+15=36$$.",
    answer: "36",
    hint: "Split into two cases: satellite $$1$$ is chosen or it isn’t. Each case becomes a non-adjacent selection on a line.",
  },
  {
    title: "Square in the Corner",
    difficulty: "hard",
    category: "Geometry",
    problemText:
      "A right triangle has legs of lengths $$6$$ and $$8$$.\nA square is placed in the right-angle corner so that two sides of the square lie along the legs, and the opposite corner of the square touches the hypotenuse.\nWhat is the area of the square?",
    solutionOutline:
      "1. Place the right triangle with vertices at $$ (0,0),(6,0),(0,8) $$.\n2. The hypotenuse is the line through $$ (6,0) $$ and $$ (0,8) $$.\n3. In intercept form, its equation is:\n   $$x/6 + y/8 = 1$$.\n4. The square sits in the corner at the origin, so its far corner is at $$ (s,s) $$ where $$s$$ is the side length.\n5. Since $$ (s,s) $$ lies on the hypotenuse:\n   $$s/6 + s/8 = 1$$.\n6. Compute:\n   $$s(1/6+1/8)=s(7/24)=1$$\n   $$s=24/7$$.\n7. Area of the square:\n   $$s^2 = (24/7)^2 = 576/49$$.",
    answer: "576/49",
    hint: "If the right-angle corner is at $$ (0,0) $$, the square’s far corner is $$ (s,s) $$. Can you plug that point into the hypotenuse line equation?",
  },
  {
    title: "Circle of 2025",
    difficulty: "hard",
    category: "Number Theory",
    problemText:
      "How many ordered integer pairs $$ (x,y) $$ satisfy\n$$x^2 + y^2 = 2025$$ ?",
    solutionOutline:
      "1. Note that $$2025=45^2$$.\n2. So we are counting integer points on the circle of radius $$45$$.\n3. One family of solutions is when one coordinate is $$0$$:\n   $$x=\\pm45, y=0$$ and $$x=0, y=\\pm45$$, giving $$4$$ solutions.\n4. For nonzero solutions, we need a Pythagorean triple with hypotenuse $$45$$.\n5. The classic triple $$3,4,5$$ scales by $$9$$ to $$27,36,45$$.\n6. So the nonzero solutions are $$ (\\pm27,\\pm36) $$ and $$ (\\pm36,\\pm27) $$.\n7. For $$ (27,36) $$ there are $$4$$ sign choices, and swapping gives another $$4$$, totaling $$8$$.\n8. Total ordered integer pairs:\n   $$4+8=12$$.",
    answer: "12",
    hint: "Since $$2025=45^2$$, look for Pythagorean triples with hypotenuse $$45$$ (including the cases where one leg is $$0$$).",
  },
  {
    title: "Square Plaza Stroll",
    difficulty: "hard",
    category: "Probability",
    problemText:
      "A robot walks on the corners of a square: $$A,B,C,D$$ in a cycle.\nIt starts at $$A$$.\nEach step it moves to one of the two adjacent corners with probability $$1/2$$ each.\nWhat is the expected number of steps until the robot has visited all $$4$$ corners at least once?",
    solutionOutline:
      "1. By symmetry, after the first move the robot is at a neighbor of $$A$$ (say $$B$$) and has visited exactly $$2$$ adjacent corners.\n2. Let $$x$$ be the expected remaining steps from the state:\n   “visited exactly $$2$$ adjacent corners, and currently at one end of that visited arc.”\n3. From that state, with probability $$1/2$$ you move to the new corner (expanding to $$3$$ visited) and with probability $$1/2$$ you move back (still $$2$$ visited). So:\n   $$x = 1 + (1/2)\\cdot y + (1/2)\\cdot x$$\n   where $$y$$ is defined next.\n4. Let $$y$$ be the expected remaining steps from the state:\n   “visited exactly $$3$$ corners, and currently at an end corner of those $$3$$.”\n5. From state $$y$$, with probability $$1/2$$ you step into the final unvisited corner and finish, and with probability $$1/2$$ you step to the middle visited corner. Let $$z$$ be the expected remaining steps from that middle state:\n   $$y = 1 + (1/2)\\cdot0 + (1/2)\\cdot z = 1 + z/2$$.\n6. From the middle state $$z$$ (still $$3$$ visited), you must move to one of the two ends (each with probability $$1/2$$), so:\n   $$z = 1 + y$$.\n7. Solve the small system:\n   From step $$6$$ into step $$5$$:\n   $$y = 1 + (1/2)(1+y) = 1 + 1/2 + y/2$$\n   $$2y = 3 + y$$\n   $$y = 3$$.\n   Then $$z=1+y=4$$.\n8. Now solve step $$3$$:\n   $$x = 1 + (1/2)\\cdot3 + (1/2)x$$\n   $$x/2 = 1 + 3/2 = 5/2$$\n   $$x = 5$$.\n9. Total expected steps from the very start is:\n   $$1 + x = 1 + 5 = 6$$.",
    answer: "6",
    hint: "After the first step you have visited exactly $$2$$ adjacent corners. Write an equation for the expected remaining time from that state.",
  },
  {
    title: "Cubic Roots Whisper",
    difficulty: "hard",
    category: "Algebra",
    problemText:
      "Three numbers $$r_1,r_2,r_3$$ satisfy\n$$r_1+r_2+r_3=0$$\n$$r_1r_2+r_2r_3+r_3r_1=-7$$\n$$r_1r_2r_3=6$$\nWhat is $$r_1^3+r_2^3+r_3^3$$ ?",
    solutionOutline:
      "1. Use the identity:\n   $$(r_1+r_2+r_3)^3 = (r_1^3+r_2^3+r_3^3) + 3(r_1+r_2+r_3)(r_1r_2+r_2r_3+r_3r_1) - 3r_1r_2r_3$$.\n2. Here $$r_1+r_2+r_3=0$$, so the left side is $$0^3=0$$.\n3. Also the middle term has a factor $$r_1+r_2+r_3$$, so it becomes $$0$$.\n4. The identity simplifies to:\n   $$0 = (r_1^3+r_2^3+r_3^3) - 3\\cdot6$$.\n5. Therefore:\n   $$r_1^3+r_2^3+r_3^3 = 18$$.",
    answer: "18",
    hint: "Expand $$ (r_1+r_2+r_3)^3 $$ and isolate $$r_1^3+r_2^3+r_3^3$$.",
  },
  {
    title: "Pentagon Planet",
    difficulty: "hard",
    category: "Geometry/Graph Theory",
    problemText:
      "A convex polyhedron has exactly $$12$$ faces.\nEvery face is a pentagon, and exactly $$3$$ faces meet at each vertex.\nHow many edges does the polyhedron have?",
    solutionOutline:
      "1. Count face-edge incidences: each of the $$12$$ pentagonal faces contributes $$5$$ edges, for a total of $$12\\cdot5=60$$ face-edge incidences.\n2. Each actual edge is shared by exactly $$2$$ faces, so it is counted twice in that $$60$$.\n3. Therefore:\n   $$2E = 60$$\n   $$E = 30$$.",
    answer: "30",
    hint: "If you count edges by scanning all faces, each real edge is counted exactly twice.",
  },
  {
    title: "Square-1 Mystery",
    difficulty: "hard",
    category: "Number Theory",
    problemText:
      "How many integers $$x$$ with $$1<=x<=2024$$ satisfy:\nWhen $$x^2$$ is divided by $$2024$$, the remainder is $$1$$?",
    solutionOutline:
      "1. Factor $$2024$$:\n   $$2024 = 8\\cdot11\\cdot23$$.\n2. These factors are pairwise coprime, so solutions can be counted separately modulo $$8$$, $$11$$, and $$23$$, then multiplied.\n3. Modulo $$8$$, every odd number squares to remainder $$1$$:\n   $$1^2=1, 3^2=9, 5^2=25, 7^2=49$$ all leave remainder $$1$$ when divided by $$8$$.\n   So there are $$4$$ solutions modulo $$8$$.\n4. Modulo $$11$$ (an odd prime), the only solutions to “square leaves remainder $$1$$” are $$x$$ leaving remainder $$1$$ or $$10$$, giving $$2$$ solutions.\n5. Modulo $$23$$, similarly there are $$2$$ solutions.\n6. By the Chinese remainder principle, total solutions modulo $$2024$$:\n   $$4\\cdot2\\cdot2=16$$.\n7. Among $$1$$ through $$2024$$, that gives exactly $$16$$ solutions.",
    answer: "16",
    hint: "Factor $$2024$$ and solve the “square leaves remainder $$1$$” condition separately modulo each coprime factor.",
  },
  {
    title: "Laser in a Box",
    difficulty: "hard",
    category: "Geometry",
    problemText:
      "A laser starts in the corner of a rectangular room of width $$6$$ and height $$8$$.\nIt is fired at a $$45$$-degree angle, reflecting perfectly off walls.\nEventually it hits a corner of the room.\nWhat is the square of the total distance traveled by the laser until it first hits a corner?",
    solutionOutline:
      "1. Use the unfolding trick: reflections in a rectangle can be turned into a straight path by reflecting the room instead of the beam.\n2. Because the launch angle is $$45$$ degrees, in the unfolded plane the beam moves so that $$x$$-distance equals $$y$$-distance.\n3. A corner hit happens when the unfolded straight line reaches a point whose $$x$$-coordinate is a multiple of $$6$$ and whose $$y$$-coordinate is a multiple of $$8$$.\n4. Since $$x=y$$ along the unfolded line, we need the smallest positive $$t$$ such that $$t$$ is a multiple of $$6$$ and of $$8$$.\n5. That $$t$$ is $$lcm(6,8)=24$$.\n6. So the straight-line travel in the unfolded plane is from $$ (0,0) $$ to $$ (24,24) $$.\n7. The squared distance is:\n   $$24^2+24^2 = 2\\cdot576 = 1152$$.",
    answer: "1152",
    hint: "Unfold the reflections so the laser path becomes a straight line. What common multiple of $$6$$ and $$8$$ do you hit first?",
  },
  {
    title: "Triple-Rotation Lineup",
    difficulty: "hard",
    category: "Combinatorics/Logic",
    problemText:
      "Start with the lineup\n$$1,2,3,4,5,6,7,8$$\nA move selects three consecutive positions and rotates them left: it replaces $$ (a,b,c) $$ by $$ (b,c,a) $$.\nAfter any number of moves, how many distinct lineups are possible?",
    solutionOutline:
      "1. Rotating $$ (a,b,c) $$ to $$ (b,c,a) $$ is a $$3$$-cycle of those elements.\n2. A $$3$$-cycle is an even permutation (it can be done by two swaps), so each move preserves permutation parity.\n3. The starting lineup $$1,2,3,4,5,6,7,8$$ is an even permutation (it is the identity).\n4. Therefore, only even permutations can be reached.\n5. Adjacent $$3$$-cycles generate all even permutations of $$8$$ elements, so every even lineup is reachable.\n6. The number of even permutations of $$8$$ elements is half of $$8!$$:\n   $$8!/2 = 40320/2 = 20160$$.",
    answer: "20160",
    hint: "Does this move preserve the parity (even/odd) of the permutation? How many even permutations are there of $$8$$ objects?",
  },
  {
    title: "The Digit-Square Whirlpool",
    difficulty: "hard",
    category: "Sequences",
    problemText:
      "Define a process on positive integers:\nTake a number, square each of its digits, and add the squares to get the next number.\nStarting from $$2025$$, the process eventually repeats in a cycle.\nHow many distinct numbers are in that repeating cycle?",
    solutionOutline:
      "1. Apply the process:\n   $$2025 \\to 2^2+0^2+2^2+5^2 = 4+0+4+25 = 33$$.\n2. Continue:\n   $$33 \\to 3^2+3^2 = 18$$\n   $$18 \\to 1^2+8^2 = 65$$\n   $$65 \\to 6^2+5^2 = 61$$\n   $$61 \\to 6^2+1^2 = 37$$\n   $$37 \\to 3^2+7^2 = 58$$\n   $$58 \\to 5^2+8^2 = 89$$\n   $$89 \\to 8^2+9^2 = 145$$\n   $$145 \\to 1^2+4^2+5^2 = 42$$\n   $$42 \\to 4^2+2^2 = 20$$\n   $$20 \\to 2^2+0^2 = 4$$\n   $$4 \\to 4^2 = 16$$\n   $$16 \\to 1^2+6^2 = 37$$.\n3. We are back at $$37$$, so the cycle is:\n   $$37,58,89,145,42,20,4,16$$.\n4. This cycle contains $$8$$ distinct numbers.",
    answer: "8",
    hint: "Compute a few steps until you reach a small number like $$4$$, then see what loop it falls into.",
  },
  {
    title: "Floor-Sum Mirror",
    difficulty: "hard",
    category: "Number Theory",
    problemText:
      "Compute\n$$S = floor(2025/2024) + floor(2*2025/2024) + ... + floor(2023*2025/2024)$$\nWhat is $$S$$?",
    solutionOutline:
      "1. Consider the terms $$floor(2025k/2024)$$ for $$k=1,2,...,2023$$.\n2. Pair term $$k$$ with term $$2024-k$$.\n3. Observe:\n   $$2025k/2024 + 2025(2024-k)/2024 = 2025$$.\n4. Because $$gcd(2025,2024)=1$$, none of the numbers $$2025k/2024$$ (for $$1<=k<=2023$$) is an integer.\n5. When $$x$$ is not an integer, $$floor(x) + floor(2025-x) = 2024$$.\n6. Here $$2025-x = 2025(2024-k)/2024$$, so:\n   $$floor(2025k/2024) + floor(2025(2024-k)/2024) = 2024$$.\n7. There are $$2023$$ terms. All terms pair up except when $$k=1012$$ (since $$2024-1012=1012$$).\n8. Number of distinct pairs is $$1011$$, contributing:\n   $$1011\\cdot2024$$.\n9. The middle unpaired term is:\n   $$floor(2025*1012/2024)=floor(2025/2)=floor(1012.5)=1012$$.\n10. Total:\n    $$S = 1011\\cdot2024 + 1012 = 2046264 + 1012 = 2047276$$.",
    answer: "2047276",
    hint: "Pair the $$k$$th term with the $$ (2024-k) $$th term and use $$2025k/2024 + 2025(2024-k)/2024 = 2025$$.",
  },
  {
    title: "Odd-Area Windows",
    difficulty: "hard",
    category: "Combinatorics",
    problemText:
      "In an $$8x8$$ grid of unit squares, consider all axis-aligned rectangles made of unit squares.\nHow many of these rectangles have an odd number of unit squares (i.e., odd area)?",
    solutionOutline:
      "1. A rectangle has odd area exactly when its width and height are both odd.\n2. Count the number of ways to choose an odd-length interval among $$8$$ columns.\n3. Use boundary lines: there are $$9$$ vertical grid lines, numbered $$0$$ through $$8$$.\n4. An interval has odd length when its endpoints have opposite parity.\n5. Among $$0,1,2,3,4,5,6,7,8$$ there are $$5$$ even lines and $$4$$ odd lines.\n6. So the number of odd-width choices is $$5\\cdot4=20$$.\n7. The same reasoning gives $$20$$ odd-height choices.\n8. Total odd-area rectangles:\n   $$20\\cdot20=400$$.",
    answer: "400",
    hint: "Odd area means odd width AND odd height. How many odd-length intervals are there among $$8$$ columns?",
  },
  {
    title: "Determinant With Two Numbers",
    difficulty: "hard",
    category: "Algebra",
    problemText:
      "Let $$A$$ be the $$5x5$$ matrix whose diagonal entries are $$1$$ and whose off-diagonal entries are $$2$$.\nWhat is $$det(A)$$?",
    solutionOutline:
      "1. Let $$v=(1,1,1,1,1)$$.\n2. Each row of $$A$$ sums to $$1+2+2+2+2=9$$, so $$A v = 9v$$.\n3. Now take any vector $$w=(w_1,w_2,w_3,w_4,w_5)$$ with $$w_1+w_2+w_3+w_4+w_5=0$$.\n4. For such a vector, the $$i$$th coordinate of $$Aw$$ is:\n   $$1\\cdot w_i + 2\\cdot(\\text{sum of the other four } w_j)$$.\n5. But “sum of the other four” equals $$-w_i$$ because the total sum is $$0$$.\n6. So that coordinate is $$w_i + 2(-w_i) = -w_i$$, meaning $$Aw=-w$$.\n7. Therefore $$A$$ has eigenvalue $$9$$ once (direction $$v$$) and eigenvalue $$-1$$ four times (any independent vectors summing to $$0$$).\n8. The determinant is the product of these scaling factors:\n   $$det(A)=9\\cdot(-1)^4=9$$.",
    answer: "9",
    hint: "What happens when you multiply $$A$$ by $$ (1,1,1,1,1) $$? What about a vector whose coordinates sum to $$0$$?",
  },
  {
    title: "Never-Decreasing PINs",
    difficulty: "hard",
    category: "Combinatorics",
    problemText:
      "A $$3$$-digit PIN is allowed to have leading zeros (so $$007$$ is valid).\nHow many such PINs have digits that never decrease from left to right?\nExample: $$038$$ is allowed, but $$830$$ is not.",
    solutionOutline:
      "1. A nondecreasing $$3$$-digit PIN is the same as choosing a multiset of $$3$$ digits from $$10$$ possible digits $$0$$ through $$9$$.\n2. The count of multisets of size $$3$$ from $$10$$ types is:\n   $$C(10+3-1,3)=C(12,3)$$.\n3. Compute:\n   $$C(12,3)=12\\cdot11\\cdot10/(3\\cdot2\\cdot1)=220$$.",
    answer: "220",
    hint: "Think of a nondecreasing string as a multiset of $$3$$ digits chosen from $$10$$ possibilities.",
  },
  {
    title: "Parenthesis Factory",
    difficulty: "hard",
    category: "Combinatorics",
    problemText:
      "Consider the product of $$7$$ terms\n$$a_1 a_2 a_3 a_4 a_5 a_6 a_7$$\nYou may add parentheses to specify the order of multiplication (binary pairing), for example\n$$((a_1 a_2)(a_3 a_4))((a_5 a_6)a_7)$$.\nHow many different full parenthesizations are possible?",
    solutionOutline:
      "1. Let $$P(n)$$ be the number of full parenthesizations of a product of $$n$$ terms.\n2. If the last multiplication splits the product into a left block of $$k$$ terms and a right block of $$n-k$$ terms, then the counts multiply:\n   $$P(n)=\\sum_{k=1}^{n-1} P(k)P(n-k)$$.\n3. This recurrence defines the Catalan numbers, with $$P(1)=1$$ and $$P(n)=Catalan(n-1)$$.\n4. Here $$n=7$$, so we need $$Catalan(6)$$.\n5. The formula is:\n   $$Catalan(6) = C(12,6)/(6+1) = C(12,6)/7$$.\n6. Compute $$C(12,6)=924$$.\n7. Therefore $$Catalan(6)=924/7=132$$.",
    answer: "132",
    hint: "If the final multiplication splits the $$7$$ terms into $$k$$ terms on the left and $$7-k$$ on the right, how do the counts combine?",
  },
  {
    title: "Maximum Slices",
    difficulty: "hard",
    category: "Logic/Geometry",
    problemText:
      "A perfectly flat cake is cut using straight planar cuts.\nAssume each new cut is placed to maximize the number of pieces.\nWhat is the maximum number of pieces you can get with exactly $$6$$ cuts?",
    solutionOutline:
      "1. The maximum number of pieces made by $$n$$ planes in $$3$$D is:\n   $$1 + n + C(n,2) + C(n,3)$$.\n2. For $$n=6$$:\n   $$1 + 6 + C(6,2) + C(6,3)$$.\n3. Compute:\n   $$C(6,2)=15$$ and $$C(6,3)=20$$.\n4. Total:\n   $$1+6+15+20=42$$.",
    answer: "42",
    hint: "The $$n$$th plane can be cut into regions by the previous planes; each region adds exactly one new piece.",
  },
  {
    title: "Midpoints to the Centroid",
    difficulty: "hard",
    category: "Geometry",
    problemText:
      "Triangle $$ABC$$ has area $$64$$.\nLet $$G$$ be its centroid.\nLet $$P$$, $$Q$$, $$R$$ be the midpoints of segments $$AG$$, $$BG$$, and $$CG$$ respectively.\nWhat is the area of triangle $$PQR$$?",
    solutionOutline:
      "1. Area ratios are preserved by affine transformations, so we can choose convenient coordinates.\n2. Let $$A=(0,0)$$, $$B=(1,0)$$, $$C=(0,1)$$.\n3. Then $$\\text{Area}(ABC)=1/2$$.\n4. The centroid is $$G=((0+1+0)/3,(0+0+1)/3)=(1/3,1/3)$$.\n5. Midpoints:\n   $$P=(A+G)/2=(1/6,1/6)$$\n   $$Q=(B+G)/2=(2/3,1/6)$$\n   $$R=(C+G)/2=(1/6,2/3)$$.\n6. Triangle $$PQR$$ is right with legs:\n   $$QP = (2/3-1/6)=1/2$$ and $$RP = (2/3-1/6)=1/2$$.\n7. So $$\\text{Area}(PQR) = (1/2)\\cdot(1/2)\\cdot(1/2)=1/8$$.\n8. The area ratio is:\n   $$(1/8)/(1/2)=1/4$$.\n9. Given $$\\text{Area}(ABC)=64$$, we get:\n   $$\\text{Area}(PQR)=64\\cdot(1/4)=16$$.",
    answer: "16",
    hint: "Compute an area ratio using coordinates like $$A=(0,0), B=(1,0), C=(0,1)$$ and then scale to area $$64$$.",
  },
  {
    title: "Difference of Two Squares",
    difficulty: "hard",
    category: "Number Theory",
    problemText:
      "In how many ways can the number $$2025$$ be written as a difference of two positive perfect squares?\nThat is, how many pairs of integers $$ (a,b) $$ with $$a>b>=1$$ satisfy\n$$a^2-b^2=2025$$ ?",
    solutionOutline:
      "1. Factor the difference of squares:\n   $$a^2-b^2=(a-b)(a+b)$$.\n2. So we need positive integers $$u=a-b$$ and $$v=a+b$$ with:\n   $$uv=2025$$ and $$u<v$$ (so that $$b>0$$).\n3. Since $$2025$$ is odd, all divisors are odd, so $$u$$ and $$v$$ are automatically the same parity, which makes $$a=(u+v)/2$$ and $$b=(v-u)/2$$ integers.\n4. Therefore, each factor pair $$u<v$$ of $$2025$$ gives exactly one solution $$ (a,b) $$.\n5. Factor $$2025=3^4\\cdot5^2$$.\n6. Number of positive divisors is:\n   $$(4+1)(2+1)=15$$.\n7. Because $$2025$$ is a perfect square, one factor pair is $$u=v$$, which would give $$b=0$$ (not allowed).\n8. So the number of strict pairs $$u<v$$ is:\n   $$(15-1)/2=7$$.",
    answer: "7",
    hint: "Rewrite $$a^2-b^2$$ as $$ (a-b)(a+b) $$ and count valid factor pairs of $$2025$$.",
  },
  {
    title: "Triangular Seats",
    difficulty: "hard",
    category: "Number Theory",
    problemText:
      "A small stadium has $$n$$ rows.\nRow $$1$$ has $$1$$ seat, row $$2$$ has $$2$$ seats, ..., row $$n$$ has $$n$$ seats.\nSo the total number of seats is $$n(n+1)/2$$.\nWhat is the smallest positive integer $$n$$ for which the total number of seats is a multiple of $$2025$$?",
    solutionOutline:
      "1. We want $$2025$$ to divide $$n(n+1)/2$$.\n2. Multiply by $$2$$ to avoid fractions:\n   $$2025 | n(n+1)/2$$ is equivalent to $$4050 | n(n+1)$$.\n3. Factor:\n   $$4050 = 2\\cdot2025 = 2\\cdot3^4\\cdot5^2 = 2\\cdot81\\cdot25$$.\n4. Since $$n$$ and $$n+1$$ are consecutive, $$gcd(n,n+1)=1$$.\n5. To make $$n(n+1)$$ divisible by $$81\\cdot25$$ without forcing one of them to be at least $$2025$$, we should split the coprime parts:\n   - one of $$n$$ or $$n+1$$ is divisible by $$81$$,\n   - the other is divisible by $$25$$,\n   - and the even factor $$2$$ is automatically supplied because one of them is even.\n6. Check multiples of $$81$$ until one is within $$1$$ of a multiple of $$25$$:\n   $$81\\pm1$$ gives $$80$$ or $$82$$ (not divisible by $$25$$).\n   $$162\\pm1$$ gives $$161$$ or $$163$$ (no).\n   $$243\\pm1$$ gives $$242$$ or $$244$$ (no).\n   $$324\\pm1$$ gives $$323$$ or $$325$$, and $$325$$ is divisible by $$25$$.\n7. Thus $$n=324$$ works because:\n   $$324$$ is divisible by $$81$$,\n   $$325$$ is divisible by $$25$$,\n   and $$324$$ is even, so $$324\\cdot325$$ is divisible by $$2\\cdot81\\cdot25=4050$$.\n8. Therefore $$n(n+1)/2$$ is divisible by $$2025$$ at $$n=324$$, and no smaller multiple of $$81$$ had a neighbor divisible by $$25$$.\n9. So the smallest $$n$$ is $$324$$.",
    answer: "324",
    hint: "Since $$4050=2\\cdot81\\cdot25$$ and $$gcd(n,n+1)=1$$, try to make one of $$n$$ or $$n+1$$ divisible by $$81$$ and the other divisible by $$25$$. What is the smallest such consecutive pair?",
  },
  {
    title: "The Mirror Subtraction",
    difficulty: "easy",
    category: "Number Puzzle",
    problemText:
      "Choose any 3-digit integer $$N$$ whose digits are all different and whose first digit is larger than its last digit.\nReverse its digits to get $$R$$.\nCompute $$N-R$$.\nReverse the digits of $$N-R$$ and add that reversed number back.\nWhat final number do you always get?",
    solutionOutline:
      "1. Write $$N=100a+10b+c$$ with digits $$a,b,c$$, where $$a>c$$.\n2. The reversed number is $$R=100c+10b+a$$.\n3. Subtract:\n   $$N-R=(100a+10b+c)-(100c+10b+a)=99(a-c).$$\n4. Let $$d=a-c$$, so $$d\\in\\{1,2,\\dots,9\\}$$ and $$N-R=99d$$.\n5. Rewrite $$99d$$ to expose its digits:\n   $$99d=100(d-1)+90+(10-d).$$\n   So its digits are $$d-1,\\;9,\\;10-d$$.\n6. Reversing gives:\n   $$\\text{rev}(99d)=100(10-d)+90+(d-1).$$\n7. Add:\n   $$99d+\\text{rev}(99d)=\\big[100(d-1)+90+(10-d)\\big]+\\big[100(10-d)+90+(d-1)\\big]=1089.$$\n8. Therefore the final number is always $$1089$$.",
    answer: "1089",
    hint: "If $$N=100a+10b+c$$, what does $$N-R$$ become in terms of $$a-c$$?",
  },
  {
    title: "The Page-Number Ink Mystery",
    difficulty: "easy",
    category: "Counting",
    problemText:
      "A printer labels pages starting from $$1$$.\nThe total number of digits printed across all page numbers from $$1$$ up to and including page $$N$$ is $$2893$$.\nWhat is $$N$$?",
    solutionOutline:
      "1. Pages $$1$$ through $$9$$ contribute $$9$$ digits total.\n2. Pages $$10$$ through $$99$$ are $$90$$ numbers, each with $$2$$ digits, contributing $$90\\cdot2=180$$ digits.\n3. Total digits through $$99$$ is $$9+180=189$$.\n4. Pages $$100$$ through $$999$$ are $$900$$ numbers, each with $$3$$ digits, contributing $$900\\cdot3=2700$$ digits.\n5. Total digits through $$999$$ is $$189+2700=2889$$.\n6. We need $$2893$$ digits, which is $$2893-2889=4$$ more digits.\n7. The next page number after $$999$$ is $$1000$$, which uses exactly $$4$$ digits.\n8. Therefore $$N=1000$$.",
    answer: "1000",
    hint: "How many digits come from pages $$1$$–$$9$$, $$10$$–$$99$$, and $$100$$–$$999$$?",
  },
  {
    title: "Parking Spots Shuffle",
    difficulty: "easy",
    category: "Probability",
    problemText:
      "Seven cars are labeled $$1$$ through $$7$$ and are randomly parked into seven labeled spots $$1$$ through $$7$$, with every permutation equally likely.\nWhat is the expected number of cars that end up in the spot with the same number?",
    solutionOutline:
      "1. For each $$i\\in\\{1,2,\\dots,7\\}$$, define an indicator $$I_i$$ where:\n   $$I_i=\\begin{cases}1 & \\text{if car } i \\text{ is in spot } i,\\\\0 & \\text{otherwise.}\\end{cases}$$\n2. The total number of correctly parked cars is:\n   $$I_1+I_2+\\cdots+I_7.$$ \n3. For a random permutation, $$P(I_i=1)=\\frac{1}{7}$$ (car $$i$$ is equally likely to be in any of the $$7$$ spots).\n4. So $$\\mathbb{E}[I_i]=\\frac{1}{7}$$ for each $$i$$.\n5. By linearity of expectation:\n   $$\\mathbb{E}[I_1+\\cdots+I_7]=\\sum_{i=1}^7 \\mathbb{E}[I_i]=7\\cdot\\frac{1}{7}=1.$$",
    answer: "1",
    hint: "Let $$I_i$$ be $$1$$ if car $$i$$ lands in spot $$i$$. What is $$\\mathbb{E}[I_i]$$?",
  },
  {
    title: "The Snipped Poster Edge",
    difficulty: "easy",
    category: "Geometry",
    problemText:
      "A rectangular poster measures $$20$$ cm by $$15$$ cm.\nYou cut off one corner by making a straight cut between a point $$3$$ cm from the corner along one side and a point $$4$$ cm from the same corner along the adjacent side.\nWhat is the new perimeter of the poster (in cm)?",
    solutionOutline:
      "1. The original perimeter is:\n   $$2(20+15)=70.$$ \n2. The cut removes two small edge segments of lengths $$3$$ and $$4$$ from the perimeter.\n3. Those two segments are replaced by the straight cut, which is the hypotenuse of a right triangle with legs $$3$$ and $$4$$.\n4. The cut length is:\n   $$\\sqrt{3^2+4^2}=\\sqrt{25}=5.$$ \n5. So the new perimeter is:\n   $$70-(3+4)+5=70-7+5=68.$$",
    answer: "68",
    hint: "How does the perimeter change when you replace two sides of lengths $$3$$ and $$4$$ by one segment of length $$\\sqrt{3^2+4^2}$$?",
  },
  {
    title: "Two Buttons to 2025",
    difficulty: "easy",
    category: "Logic/Optimization",
    problemText:
      "A tiny robot starts at $$0$$.\nIt has exactly two buttons:\n- Button A adds $$1$$ (so $$x\\to x+1$$).\n- Button B doubles the number (so $$x\\to 2x$$).\nWhat is the minimum number of button presses needed to reach exactly $$2025$$?",
    solutionOutline:
      "1. Work backwards from $$2025$$ to $$0$$.\n2. If the current number is even, the previous move could have been doubling, so go to $$\\frac{x}{2}$$.\n3. If the current number is odd, the previous move must have been adding $$1$$, so go to $$x-1$$.\n4. Starting from $$2025$$:\n   $$2025\\to2024\\to1012\\to506\\to253\\to252\\to126\\to63\\to62\\to31\\to30\\to15\\to14\\to7\\to6\\to3\\to2\\to1\\to0.$$ \n5. Count the arrows: there are $$18$$ steps.\n6. Therefore the minimum number of button presses is $$18$$.",
    answer: "18",
    hint: "Try reversing the process: from $$2025$$, if it’s even divide by $$2$$, if it’s odd subtract $$1$$. How many steps to reach $$0$$?",
  },
  {
    title: "Two Weighings, How Many Coins?",
    difficulty: "easy",
    category: "Logic/Information",
    problemText:
      "Exactly one coin in a pile is heavier than the rest, and all other coins are identical.\nYou have a balance scale (three outcomes per weighing: left heavy, right heavy, or balanced) and no extra weights.\nYou are allowed exactly $$2$$ weighings.\nWhat is the maximum number of coins for which you can always identify the heavier coin?",
    solutionOutline:
      "1. Each weighing has $$3$$ possible outcomes: left heavy, right heavy, or balance.\n2. With exactly $$2$$ weighings, the total number of possible outcome sequences is:\n   $$3^2=9.$$ \n3. To always identify the heavier coin, each coin must correspond to a unique outcome sequence.\n4. Therefore you cannot guarantee success with more than $$9$$ coins.\n5. You can achieve $$9$$ by splitting into $$3$$ groups of $$3$$:\n   - Weigh $$3$$ vs $$3$$.\n   - If balanced, the heavy coin is in the remaining $$3$$.\n   - If not balanced, it is in the heavier pan’s $$3$$.\n   - Second weighing: weigh $$1$$ vs $$1$$ within the suspect group to pinpoint the heavy coin.\n6. So the maximum is $$9$$.",
    answer: "9",
    hint: "Each weighing gives $$3$$ outcomes. How many outcome sequences can $$2$$ weighings produce?",
  },
  {
    title: "The 5-Hour Clock Hop",
    difficulty: "easy",
    category: "Number Theory",
    problemText:
      "A clock shows the numbers $$1$$ through $$12$$.\nStarting at $$12$$, you repeatedly jump forward exactly $$5$$ hours (wrapping around after $$12$$).\nAfter how many jumps do you land on $$12$$ again for the first time?",
    solutionOutline:
      "1. After $$n$$ jumps, you have moved forward $$5n$$ hours.\n2. You land back on $$12$$ exactly when $$5n$$ is a multiple of $$12$$:\n   $$5n\\equiv0\\pmod{12}.$$ \n3. The smallest positive $$n$$ satisfying this is:\n   $$n=\\frac{12}{\\gcd(12,5)}.$$ \n4. Since $$\\gcd(12,5)=1$$, we get $$n=12$$.",
    answer: "12",
    hint: "You return to $$12$$ when $$5n$$ is a multiple of $$12$$. What is the smallest such $$n$$?",
  },
  {
    title: "Odd Brick Pyramid",
    difficulty: "easy",
    category: "Sequences",
    problemText:
      "A builder stacks blocks in rows:\nRow $$1$$ uses $$1$$ block, row $$2$$ uses $$3$$ blocks, row $$3$$ uses $$5$$ blocks, and so on.\nIn general row $$n$$ uses $$2n-1$$ blocks.\nHow many blocks are used in the first $$37$$ rows total?",
    solutionOutline:
      "1. The total is the sum of the first $$37$$ odd numbers:\n   $$1+3+5+\\cdots+(2\\cdot37-1).$$\n2. A classic pattern is:\n   $$1+3+5+\\cdots+(2n-1)=n^2.$$ \n3. With $$n=37$$, the total is:\n   $$37^2=1369.$$",
    answer: "1369",
    hint: "Do you remember the identity $$1+3+5+\\cdots+(2n-1)=n^2$$?",
  },
  {
    title: "Rectangle Without Measuring Tape",
    difficulty: "easy",
    category: "Algebra/Geometry",
    problemText:
      "A rectangle has area $$60$$ and perimeter $$34$$.\nWhat is the value of $$d^2$$, where $$d$$ is the length of its diagonal?",
    solutionOutline:
      "1. Let the side lengths be $$x$$ and $$y$$.\n2. From the perimeter:\n   $$2(x+y)=34 \\implies x+y=17.$$ \n3. From the area:\n   $$xy=60.$$ \n4. The diagonal satisfies:\n   $$d^2=x^2+y^2=(x+y)^2-2xy.$$ \n5. Substitute:\n   $$d^2=17^2-2\\cdot60=289-120=169.$$",
    answer: "169",
    hint: "Use $$d^2=x^2+y^2=(x+y)^2-2xy$$ once you know $$x+y$$ and $$xy$$.",
  },
  {
    title: "Three Receipts",
    difficulty: "easy",
    category: "Algebra",
    problemText:
      "Three real numbers $$a,b,c$$ satisfy:\n$$a+b=10$$\n$$b+c=14$$\n$$c+a=16$$\nWhat is $$a+b+c$$?",
    solutionOutline:
      "1. Add the three given equations:\n   $$(a+b)+(b+c)+(c+a)=10+14+16.$$ \n2. The left side simplifies to:\n   $$2(a+b+c).$$\n3. So:\n   $$2(a+b+c)=40 \\implies a+b+c=20.$$",
    answer: "20",
    hint: "What happens if you add all three equations together?",
  },

  {
    title: "Odd Bridges, Still Connected",
    difficulty: "medium",
    category: "Graph Theory",
    problemText:
      "Six islands are connected by bridges so that you can travel between any pair of islands (the bridge network is connected).\nNo two islands have more than one bridge between them.\nEach island has an odd number of bridges touching it.\nWhat is the minimum possible number of bridges?",
    solutionOutline:
      "1. A connected graph on $$6$$ vertices must have at least $$6-1=5$$ edges (a tree is the minimum).\n2. So the number of bridges $$E$$ must satisfy $$E\\ge 5$$.\n3. We now show $$E=5$$ is achievable with all degrees odd.\n4. Construct a tree with degrees $$3,3,1,1,1,1$$:\n   - Pick two central islands and connect them.\n   - Connect two leaf islands to the first central island.\n   - Connect the remaining two leaf islands to the second central island.\n5. This uses exactly $$5$$ edges.\n6. The two central islands each have degree $$3$$ (odd) and the four leaves each have degree $$1$$ (odd).\n7. Therefore the minimum possible number of bridges is $$5$$.",
    answer: "5",
    hint: "A connected graph on $$6$$ vertices needs at least $$5$$ edges. Can you draw a $$5$$-edge tree where every vertex has odd degree?",
  },
  {
    title: "Dice Product Jackpot",
    difficulty: "medium",
    category: "Probability",
    problemText:
      "Roll two fair six-sided dice.\nWhat is the probability that the product of the two numbers is divisible by $$6$$?",
    solutionOutline:
      "1. A product is divisible by $$6$$ iff it is divisible by $$2$$ and by $$3$$.\n2. Let $$A$$ be the event “the product is not divisible by $$2$$.” This happens only when both dice are odd.\n   There are $$3$$ odd faces $$\\{1,3,5\\}$$, so:\n   $$P(A)=\\left(\\frac{3}{6}\\right)^2=\\frac{1}{4}.$$ \n3. Let $$B$$ be the event “the product is not divisible by $$3$$.” This happens only when neither die shows a multiple of $$3$$.\n   Non-multiples of $$3$$ are $$\\{1,2,4,5\\}$$, so:\n   $$P(B)=\\left(\\frac{4}{6}\\right)^2=\\frac{4}{9}.$$ \n4. For $$A\\cap B$$: both dice must be odd and not multiples of $$3$$, i.e. from $$\\{1,5\\}$$. So:\n   $$P(A\\cap B)=\\left(\\frac{2}{6}\\right)^2=\\frac{1}{9}.$$ \n5. By inclusion-exclusion:\n   $$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\frac{1}{4}+\\frac{4}{9}-\\frac{1}{9}=\\frac{7}{12}.$$ \n6. Therefore:\n   $$P(\\text{divisible by }6)=1-P(A\\cup B)=1-\\frac{7}{12}=\\frac{5}{12}.$$",
    answer: "5/12",
    hint: "Use the complement: count outcomes where the product fails to be divisible by $$2$$ or fails to be divisible by $$3$$.",
  },
  {
    title: "The 12-Divisor Multiple",
    difficulty: "medium",
    category: "Number Theory",
    problemText:
      "Find the smallest positive integer $$n$$ such that:\n- $$18$$ divides $$n$$, and\n- $$n$$ has exactly $$12$$ positive divisors.\nWhat is $$n$$?",
    solutionOutline:
      "1. Since $$18=2\\cdot3^2$$ divides $$n$$, write:\n   $$n=2^a3^b\\cdot m,$$\n   where $$a\\ge1$$, $$b\\ge2$$, and $$m$$ is an integer not divisible by $$2$$ or $$3$$.\n2. The divisor count is:\n   $$\\tau(n)=(a+1)(b+1)\\tau(m).$$\n3. To minimize $$n$$, try to avoid extra primes, so first try $$m=1$$ (so $$\\tau(m)=1$$).\n4. Then we need:\n   $$(a+1)(b+1)=12$$\n   with $$a\\ge1$$ and $$b\\ge2$$.\n5. Factor pairs of $$12$$:\n   - If $$a+1=4$$ and $$b+1=3$$, then $$a=3$$ and $$b=2$$, giving:\n     $$n=2^3\\cdot3^2=8\\cdot9=72.$$ \n   - Other valid pairs like $$a=2,b=3$$ give $$108$$, which is larger.\n6. Check adding an extra prime would only increase $$n$$ (e.g., $$2^1\\cdot3^2\\cdot5^1=90>72$$).\n7. Therefore the smallest such $$n$$ is $$72$$.",
    answer: "72",
    hint: "Write $$n=2^a3^b\\cdot m$$ with $$a\\ge1$$ and $$b\\ge2$$, then use $$\\tau(n)=(a+1)(b+1)\\tau(m)=12$$.",
  },
  {
    title: "The One-Repeat PIN",
    difficulty: "medium",
    category: "Combinatorics",
    problemText:
      "A security code is a string of $$4$$ digits (leading zeros allowed).\nHow many such codes contain exactly one pair of identical digits and the other two digits are all different from each other and from the pair?\nExample: $$5507$$ is allowed, but $$5557$$ and $$5505$$ are not.",
    solutionOutline:
      "1. Choose the digit that is repeated: $$10$$ choices.\n2. Choose which $$2$$ of the $$4$$ positions hold that repeated digit:\n   $$\\binom{4}{2}=6$$ choices.\n3. The remaining two positions must be filled with two distinct digits chosen from the other $$9$$ digits, and order matters:\n   $$9\\cdot8=72$$ choices.\n4. Multiply:\n   $$10\\cdot6\\cdot72=4320.$$",
    answer: "4320",
    hint: "Choose the repeated digit, choose its two positions, then fill the remaining two slots with an ordered pair of distinct remaining digits.",
  },
  {
    title: "Right-Triangle Satellite",
    difficulty: "medium",
    category: "Geometry",
    problemText:
      "Three satellites are at coordinates $$A=(0,0)$$, $$B=(12,0)$$, and $$C=(0,35)$$.\nA circular safety zone passes through all three satellites.\nWhat is the radius of this circle?",
    solutionOutline:
      "1. Triangle $$ABC$$ is right-angled at $$A$$ because $$AB$$ is horizontal and $$AC$$ is vertical.\n2. In a right triangle, the circumcenter is the midpoint of the hypotenuse, so the circumradius equals half the hypotenuse length.\n3. Compute the hypotenuse length:\n   $$BC=\\sqrt{(12-0)^2+(0-35)^2}=\\sqrt{144+1225}=\\sqrt{1369}=37.$$ \n4. Therefore the radius is:\n   $$\\frac{BC}{2}=\\frac{37}{2}.$$",
    answer: "37/2",
    hint: "For a right triangle, where is the circumcenter, and how does the circumradius relate to the hypotenuse?",
  },
  {
    title: "The $$\\sqrt{2}$$ Elevator Log",
    difficulty: "medium",
    category: "Sequences",
    problemText:
      "Define $$b_k = \\lfloor k\\sqrt{2} \\rfloor$$ for integers $$k\\ge 1$$.\nLook at the first $$100$$ values $$b_1,b_2,\\dots,b_{100}$$.\nHow many indices $$k$$ with $$1\\le k\\le 99$$ satisfy $$b_{k+1}-b_k=2$$?",
    solutionOutline:
      "1. Since $$1<\\sqrt{2}<2$$, each difference $$b_{k+1}-b_k$$ is either $$1$$ or $$2$$.\n2. Let $$m$$ be the number of times the jump is $$2$$ among $$k=1$$ to $$99$$.\n3. Then the total increase from $$b_1$$ to $$b_{100}$$ is:\n   $$b_{100}-b_1 = 1\\cdot(99-m)+2\\cdot m = 99+m.$$ \n4. Compute:\n   $$b_1=\\lfloor \\sqrt{2}\\rfloor=1,$$\n   $$b_{100}=\\lfloor 100\\sqrt{2}\\rfloor=\\lfloor 141.421\\dots \\rfloor=141.$$ \n5. So:\n   $$b_{100}-b_1=141-1=140.$$ \n6. Set $$99+m=140$$, giving $$m=41$$.",
    answer: "41",
    hint: "The differences can only be $$1$$ or $$2$$. If there are $$m$$ twos, what is the total increase $$b_{100}-b_1$$?",
  },
  {
    title: "No Two Steps Alike",
    difficulty: "medium",
    category: "Combinatorics",
    problemText:
      "A game character must climb exactly $$10$$ steps.\nEach move can be a jump of size $$1$$, $$2$$, $$3$$, or $$4$$ steps.\nHowever, the character refuses to use the same jump size twice in a row.\nHow many different jump sequences reach exactly the top step $$10$$?",
    solutionOutline:
      "1. Let $$f(n,s)$$ be the number of ways to reach step $$n$$ with the last jump having size $$s$$, where $$s\\in\\{1,2,3,4\\}$$.\n2. The transition rule is:\n   $$f(n,s)=\\sum_{t\\in\\{1,2,3,4\\},\\;t\\ne s} f(n-s,t),$$\n   because the previous jump size $$t$$ must be different from $$s$$.\n3. Initialize with a “start” state at $$n=0$$ (no last jump yet).\n4. Compute values forward up to $$n=10$$ (only terms with nonnegative indices count).\n5. The resulting counts at $$n=10$$ are:\n   $$f(10,1)=27,\\quad f(10,2)=18,\\quad f(10,3)=14,\\quad f(10,4)=10.$$ \n6. Total sequences:\n   $$f(10,1)+f(10,2)+f(10,3)+f(10,4)=27+18+14+10=69.$$",
    answer: "69",
    hint: "Track ways by the *last* jump size: let $$f(n,s)$$ count ways to reach $$n$$ ending with jump $$s$$, then sum over the other last sizes.",
  },
  {
    title: "Palindrome Vault",
    difficulty: "medium",
    category: "Number Theory",
    problemText:
      "A $$4$$-digit palindrome has the form $$ABBA$$ where $$A$$ is nonzero.\nHow many $$4$$-digit palindromes are divisible by $$11$$?",
    solutionOutline:
      "1. A $$4$$-digit palindrome looks like $$ABBA$$.\n2. The divisibility test for $$11$$ says a number is divisible by $$11$$ if:\n   $$(\\text{sum of digits in odd positions})-(\\text{sum of digits in even positions})$$\n   is a multiple of $$11$$.\n3. For $$ABBA$$, odd-position digits sum to $$A+B$$ and even-position digits sum to $$B+A$$.\n4. The difference is:\n   $$(A+B)-(B+A)=0,$$\n   which is always a multiple of $$11$$.\n5. So every $$4$$-digit palindrome is divisible by $$11$$.\n6. Count palindromes: $$A\\in\\{1,2,\\dots,9\\}$$ gives $$9$$ choices, and $$B\\in\\{0,1,\\dots,9\\}$$ gives $$10$$ choices.\n7. Total:\n   $$9\\cdot10=90.$$",
    answer: "90",
    hint: "Apply the $$11$$ test to $$ABBA$$: what is $$(A+B)-(B+A)$$?",
  },
  {
    title: "Consecutive Cards",
    difficulty: "medium",
    category: "Probability",
    problemText:
      "From a standard $$52$$-card deck, draw two cards uniformly at random without replacement.\nTreat ranks in order $$A,2,3,\\dots,10,J,Q,K$$ (so $$A$$ is consecutive only with $$2$$).\nWhat is the probability that the two cards have consecutive ranks?",
    solutionOutline:
      "1. Total unordered two-card hands:\n   $$\\binom{52}{2}=1326.$$ \n2. There are $$12$$ consecutive rank pairs in the order $$A$$–$$2$$, $$2$$–$$3$$, ..., $$Q$$–$$K$$.\n3. For a fixed consecutive rank pair (say $$r$$ and $$r+1$$), there are $$4$$ suits for rank $$r$$ and $$4$$ suits for rank $$r+1$$, giving:\n   $$4\\cdot4=16$$ hands.\n4. Total favorable hands:\n   $$12\\cdot16=192.$$ \n5. Probability:\n   $$\\frac{192}{1326}=\\frac{32}{221}.$$",
    answer: "32/221",
    hint: "Count hands by first choosing the consecutive rank pair (how many are there?), then choosing suits.",
  },
  {
    title: "The Echoing Reciprocal",
    difficulty: "medium",
    category: "Algebra",
    problemText:
      "A nonzero real number $$x$$ satisfies $$x+\\frac{1}{x}=3$$.\nWhat is the value of $$x^5+\\frac{1}{x^5}$$?",
    solutionOutline:
      "1. Define $$s_n=x^n+\\frac{1}{x^n}$$.\n2. Note the recurrence:\n   $$s_{n+1}=\\left(x+\\frac{1}{x}\\right)s_n - s_{n-1},$$\n   which comes from multiplying out:\n   $$\\left(x+\\frac{1}{x}\\right)\\left(x^n+\\frac{1}{x^n}\\right)=x^{n+1}+\\frac{1}{x^{n+1}}+x^{n-1}+\\frac{1}{x^{n-1}}.$$ \n3. Given $$s_1=3$$.\n4. Also $$s_0=x^0+\\frac{1}{x^0}=2$$.\n5. Compute:\n   $$s_2=3\\cdot s_1 - s_0 = 3\\cdot3-2=7,$$\n   $$s_3=3\\cdot s_2 - s_1 = 3\\cdot7-3=18,$$\n   $$s_4=3\\cdot s_3 - s_2 = 3\\cdot18-7=47,$$\n   $$s_5=3\\cdot s_4 - s_3 = 3\\cdot47-18=123.$$ \n6. Therefore $$x^5+\\frac{1}{x^5}=123$$.",
    answer: "123",
    hint: "Let $$s_n=x^n+\\frac{1}{x^n}$$. Can you relate $$s_{n+1}$$ to $$s_n$$ and $$s_{n-1}$$ using $$x+\\frac{1}{x}=3$$?",
  },
  {
    title: "Marble Alchemy Maximum",
    difficulty: "medium",
    category: "Logic/Invariants",
    problemText:
      "A jar has $$5$$ red, $$5$$ blue, and $$5$$ green marbles.\nA move always picks two marbles of different colors, removes them, and puts back one marble of the third color.\n(So picking red+blue puts back green, etc.)\nYou may choose moves however you like.\nEventually you must stop when only one color remains.\nWhat is the maximum possible number of marbles you can have at the end?",
    solutionOutline:
      "1. Each move removes $$2$$ marbles and adds back $$1$$ marble, so the total number of marbles decreases by $$1$$ each move.\n2. To maximize the final count, we must minimize the number of moves.\n3. Suppose we want to finish with only green marbles.\n4. Track the quantity $$R+B$$ (reds plus blues).\n   - If you pick red+blue, then $$R\\to R-1$$ and $$B\\to B-1$$, so $$R+B$$ decreases by $$2$$.\n   - If you pick red+green, then $$R\\to R-1$$ and $$B\\to B+1$$, so $$R+B$$ stays the same.\n   - If you pick blue+green, then $$B\\to B-1$$ and $$R\\to R+1$$, so $$R+B$$ stays the same.\n5. Therefore, the only way to reduce $$R+B$$ is to use a red+blue move, and each such move reduces $$R+B$$ by exactly $$2$$.\n6. Initially $$R+B=5+5=10$$. To reach $$R+B=0$$, we need at least:\n   $$\\frac{10}{2}=5$$\n   red+blue moves.\n7. Since each move reduces the total marbles by $$1$$, at least $$5$$ moves are needed, so the final total is at most:\n   $$15-5=10.$$ \n8. This bound is achievable: do red+blue moves exactly $$5$$ times, yielding $$R=0$$, $$B=0$$, $$G=10$$.\n9. Hence the maximum possible final number of marbles is $$10$$.",
    answer: "10",
    hint: "If you aim to end with only green, what happens to $$R+B$$ under each type of move? Which move is the only one that decreases $$R+B$$?",
  },
  {
    title: "The Gossip Average",
    difficulty: "medium",
    category: "Algebra/Sequences",
    problemText:
      "Alice, Bob, and Carol write numbers on a board: $$1$$, $$4$$, and $$10$$.\nEvery minute, each person replaces their own number by the average of the other two.\nSo if the numbers are $$a,b,c$$, the next minute they become:\n$$\\frac{b+c}{2},\\;\\frac{c+a}{2},\\;\\frac{a+b}{2}.$$\nAfter many minutes, all three numbers approach the same value.\nWhat is that value?",
    solutionOutline:
      "1. Let the numbers at some time be $$a,b,c$$.\n2. After one update they become:\n   $$a' = \\frac{b+c}{2},\\quad b' = \\frac{c+a}{2},\\quad c' = \\frac{a+b}{2}.$$ \n3. Sum them:\n   $$a'+b'+c' = \\frac{b+c}{2}+\\frac{c+a}{2}+\\frac{a+b}{2} = \\frac{2(a+b+c)}{2}=a+b+c.$$ \n4. So the total sum is invariant. Initially it is:\n   $$1+4+10=15.$$ \n5. The update rule averages values, so the three numbers converge to a common limit $$L$$.\n6. In the limit, the sum would be $$3L$$, and it must equal the invariant sum $$15$$:\n   $$3L=15 \\implies L=5.$$",
    answer: "5",
    hint: "What happens to $$a+b+c$$ after one update? If the numbers converge to $$L,L,L$$, what must $$L$$ be?",
  },
  {
    title: "Odd-Sum Round Table",
    difficulty: "medium",
    category: "Combinatorics",
    problemText:
      "Seat the numbers $$1,2,3,4,5,6$$ around a circular table with $$6$$ labeled seats.\nA seating is valid if the sum of every pair of neighbors is odd.\nHow many valid seatings are there?",
    solutionOutline:
      "1. A sum is odd iff one addend is odd and the other is even.\n2. So every pair of neighbors must have opposite parity.\n3. That forces the seating to alternate odd, even, odd, even, odd, even around the table.\n4. There are $$3$$ odd numbers $$\\{1,3,5\\}$$ and $$3$$ even numbers $$\\{2,4,6\\}$$.\n5. Choose which labeled seats get the odd numbers: once you pick one seat to be odd, the alternation forces the rest.\n   Equivalently, the odd seats are fixed as a pattern of three positions.\n6. Arrange the odd numbers in those three odd positions in $$3!$$ ways, and the even numbers in the even positions in $$3!$$ ways.\n7. Total valid seatings:\n   $$3!\\cdot3!=6\\cdot6=36.$$",
    answer: "36",
    hint: "Neighbor sums are odd exactly when neighbors have opposite parity. What does that force around a 6-seat cycle?",
  },
  {
    title: "Too Close in the Square",
    difficulty: "medium",
    category: "Geometry/Pigeonhole",
    problemText:
      "You place points anywhere inside (or on the boundary of) a unit square.\nWhat is the smallest integer $$N$$ such that no matter how you place $$N$$ points, at least two of them must be within distance $$\\frac{\\sqrt{2}}{3}$$ of each other?",
    solutionOutline:
      "1. Split the unit square into a $$3\\times3$$ grid of smaller squares, each with side length $$\\frac{1}{3}$$.\n2. The diagonal of each small square is:\n   $$\\sqrt{\\left(\\frac{1}{3}\\right)^2+\\left(\\frac{1}{3}\\right)^2}=\\frac{\\sqrt{2}}{3}.$$ \n3. If $$10$$ points are placed in the unit square, by the pigeonhole principle two points must lie in the same one of the $$9$$ small squares.\n4. Any two points in the same small square are at distance at most its diagonal, i.e. at most $$\\frac{\\sqrt{2}}{3}$$.\n5. So $$N\\le 10$$.\n6. To show $$9$$ is not enough, place $$9$$ points at:\n   $$ (0,0),(0,\\tfrac{1}{2}),(0,1),(\\tfrac{1}{2},0),(\\tfrac{1}{2},\\tfrac{1}{2}),(\\tfrac{1}{2},1),(1,0),(1,\\tfrac{1}{2}),(1,1). $$\n7. The minimum distance between any two of these points is $$\\frac{1}{2}$$, and:\n   $$\\frac{1}{2} > \\frac{\\sqrt{2}}{3}.$$ \n   So with $$9$$ points you can avoid the required closeness.\n8. Therefore the smallest such $$N$$ is $$10$$.",
    answer: "10",
    hint: "Try partitioning the unit square into $$9$$ equal smaller squares. What is each small square’s diagonal?",
  },
  {
    title: "The Always-Divisible Fifth",
    difficulty: "medium",
    category: "Number Theory",
    problemText:
      "Let $$G$$ be the greatest common divisor of the infinite set\n$$\\{n^5-n \\mid n \\text{ is an integer}\\}.$$\nWhat is $$G$$?",
    solutionOutline:
      "1. Factor:\n   $$n^5-n=n(n^4-1)=n(n^2-1)(n^2+1)=n(n-1)(n+1)(n^2+1).$$\n2. The product $$n(n-1)(n+1)$$ is three consecutive integers, so it is divisible by $$3! = 6$$.\n   Hence $$6\\mid (n^5-n)$$ for all integers $$n$$.\n3. Modulo $$5$$, Fermat’s little theorem gives $$n^5\\equiv n\\pmod{5}$$ for all integers $$n$$.\n   So $$5\\mid(n^5-n)$$ for all integers $$n$$.\n4. Therefore $$30=\\mathrm{lcm}(6,5)$$ divides every value $$n^5-n$$, so $$G\\ge 30$$.\n5. Evaluate at $$n=2$$:\n   $$2^5-2=32-2=30.$$ \n6. Since the gcd of the whole set must divide every element, it must divide $$30$$, so $$G\\le 30$$.\n7. Thus $$G=30$$.",
    answer: "30",
    hint: "Factor $$n^5-n$$ and look for a guaranteed factor of $$6$$. Then check divisibility by $$5$$ using $$n^5\\equiv n\\pmod{5}$$.",
  },
  {
    title: "The Missing Chord",
    difficulty: "medium",
    category: "Geometry",
    problemText:
      "From a point $$P$$ outside a circle, one secant meets the circle at points $$A$$ and $$B$$ (with $$A$$ closer to $$P$$).\nYou measure $$PA=4$$ and $$PB=12$$.\nAnother secant from $$P$$ meets the circle at $$C$$ and $$D$$ (with $$C$$ closer to $$P$$), and you measure $$PC=3$$.\nWhat is $$PD$$?",
    solutionOutline:
      "1. By the power of a point theorem for two secants from the same external point $$P$$:\n   $$PA\\cdot PB = PC\\cdot PD.$$ \n2. Substitute the given values:\n   $$4\\cdot12 = 3\\cdot PD.$$ \n3. Solve:\n   $$48=3\\cdot PD \\implies PD=16.$$",
    answer: "16",
    hint: "Use the secant–secant power theorem: $$PA\\cdot PB = PC\\cdot PD$$.",
  },
  {
    title: "Three Boxes, Strictly Growing",
    difficulty: "medium",
    category: "Combinatorics/Number Theory",
    problemText:
      "You place positive integers $$a<b<c$$ into three boxes so that\n$$a+b+c=20.$$\nHow many different triples $$ (a,b,c) $$ are possible?",
    solutionOutline:
      "1. Since $$a<b<c$$, write:\n   $$b=a+d_1,\\quad c=b+d_2,$$\n   where $$d_1\\ge1$$ and $$d_2\\ge1$$.\n2. Then:\n   $$a+b+c = a+(a+d_1)+(a+d_1+d_2)=3a+2d_1+d_2=20.$$ \n3. Let $$a$$ be fixed. Since $$d_1,d_2\\ge1$$, we have:\n   $$3a+2\\cdot1+1 \\le 20 \\implies 3a+3\\le20 \\implies a\\le5.$$ \n   So $$a\\in\\{1,2,3,4,5\\}$$.\n4. For each $$a$$, set $$R=20-3a$$ so that:\n   $$2d_1+d_2=R,$$\n   with $$d_1\\ge1$$, $$d_2\\ge1$$.\n5. For a given $$d_1$$, we get $$d_2=R-2d_1$$, which must satisfy $$R-2d_1\\ge1$$, i.e.\n   $$d_1\\le\\left\\lfloor\\frac{R-1}{2}\\right\\rfloor.$$ \n6. Count solutions by $$a$$:\n   - $$a=1\\Rightarrow R=17\\Rightarrow d_1=1..8$$ gives $$8$$ solutions.\n   - $$a=2\\Rightarrow R=14\\Rightarrow d_1=1..6$$ gives $$6$$ solutions.\n   - $$a=3\\Rightarrow R=11\\Rightarrow d_1=1..5$$ gives $$5$$ solutions.\n   - $$a=4\\Rightarrow R=8\\Rightarrow d_1=1..3$$ gives $$3$$ solutions.\n   - $$a=5\\Rightarrow R=5\\Rightarrow d_1=1..2$$ gives $$2$$ solutions.\n7. Total:\n   $$8+6+5+3+2=24.$$",
    answer: "24",
    hint: "Let $$b=a+d_1$$ and $$c=b+d_2$$ with $$d_1,d_2\\ge1$$, then count integer solutions to $$3a+2d_1+d_2=20$$.",
  },
  {
    title: "Symmetry Function Snapshot",
    difficulty: "medium",
    category: "Algebra/Functional Equations",
    problemText:
      "A polynomial $$f(x)$$ has degree at most $$2$$ and satisfies\n$$f(x)+f(1-x)=x-x^2$$\nfor all real $$x$$.\nAdditionally, $$f(0)=0$$.\nWhat is $$f(2)$$?",
    solutionOutline:
      "1. Let $$f(x)=ax^2+bx+c$$.\n2. Then:\n   $$f(1-x)=a(1-x)^2+b(1-x)+c=a(1-2x+x^2)+b-bx+c.$$ \n3. Add:\n   $$f(x)+f(1-x)=\\big(ax^2+bx+c\\big)+\\big(a(1-2x+x^2)+b-bx+c\\big).$$\n4. Simplify:\n   $$f(x)+f(1-x)=2ax^2-2ax+(a+b+2c).$$ \n5. This must equal $$x-x^2$$ for all $$x$$, so match coefficients:\n   - For $$x^2$$: $$2a=-1 \\implies a=-\\frac{1}{2}$$.\n   - For $$x$$: $$-2a=1$$, which is consistent with $$a=-\\frac{1}{2}$$.\n   - For constants: $$a+b+2c=0$$.\n6. Use $$f(0)=0$$:\n   $$f(0)=c=0.$$ \n7. Then $$a+b=0\\Rightarrow b=-a=\\frac{1}{2}$$.\n8. So:\n   $$f(x)=-\\frac{1}{2}x^2+\\frac{1}{2}x.$$ \n9. Evaluate:\n   $$f(2)=-\\frac{1}{2}\\cdot4+\\frac{1}{2}\\cdot2=-2+1=-1.$$",
    answer: "-1",
    hint: "Assume $$f(x)=ax^2+bx+c$$, compute $$f(1-x)$$, and match coefficients in $$f(x)+f(1-x)=x-x^2$$.",
  },
  {
    title: "Difference Divisible by Seven",
    difficulty: "medium",
    category: "Probability/Number Theory",
    problemText:
      "Choose two different integers uniformly at random from $$\\{1,2,3,\\dots,100\\}$$.\nWhat is the probability that their difference is divisible by $$7$$?",
    solutionOutline:
      "1. Two numbers have difference divisible by $$7$$ exactly when they are congruent modulo $$7$$.\n2. Partition $$\\{1,2,\\dots,100\\}$$ into residue classes modulo $$7$$.\n3. Since $$100=7\\cdot14+2$$:\n   - Two residue classes contain $$15$$ numbers.\n   - The remaining five residue classes contain $$14$$ numbers.\n4. Total unordered pairs is:\n   $$\\binom{100}{2}=4950.$$ \n5. Favorable pairs are those chosen within the same residue class:\n   $$2\\binom{15}{2}+5\\binom{14}{2}=2\\cdot105+5\\cdot91=210+455=665.$$ \n6. Therefore the probability is:\n   $$\\frac{665}{4950}=\\frac{133}{990}.$$",
    answer: "133/990",
    hint: "Group the numbers $$1$$ to $$100$$ by their remainder mod $$7$$, then sum $$\\binom{\\text{group size}}{2}$$ over groups.",
  },
  {
    title: "Diamond Census",
    difficulty: "medium",
    category: "Geometry/Counting",
    problemText:
      "How many integer lattice points $$ (x,y) $$ satisfy\n$$|x|+|y|\\le 20$$?",
    solutionOutline:
      "1. For each fixed integer $$x$$ with $$|x|\\le20$$, the condition becomes:\n   $$|y|\\le 20-|x|.$$ \n2. For a given $$x$$, the number of integer $$y$$ values is:\n   $$2(20-|x|)+1.$$ \n3. Sum over all integers $$x=-20,-19,\\dots,19,20$$:\n   $$\\sum_{x=-20}^{20} \\big(2(20-|x|)+1\\big).$$\n4. Use symmetry:\n   $$=\\big(2\\cdot20+1\\big)+2\\sum_{k=1}^{20} \\big(2(20-k)+1\\big).$$\n5. Simplify the inner term:\n   $$2(20-k)+1=41-2k.$$ \n6. So:\n   $$41+2\\sum_{k=1}^{20}(41-2k)=41+2\\left(20\\cdot41-2\\sum_{k=1}^{20}k\\right).$$\n7. Compute:\n   $$\\sum_{k=1}^{20}k=\\frac{20\\cdot21}{2}=210.$$ \n8. Then:\n   $$41+2\\left(820-2\\cdot210\\right)=41+2(820-420)=41+2\\cdot400=841.$$",
    answer: "841",
    hint: "Fix $$x$$ first. For a given $$x$$, how many integers $$y$$ satisfy $$|y|\\le 20-|x|$$?",
  },

  {
    title: "Tree of Seven Devices",
    difficulty: "hard",
    category: "Combinatorics",
    problemText:
      "A network connects devices labeled $$1$$ through $$7$$.\nThe network is connected and contains no cycles (so it forms a tree).\nHow many different labeled trees are possible if device $$1$$ has degree exactly $$4$$?",
    solutionOutline:
      "1. Use the Prüfer code fact: labeled trees on $$n$$ vertices correspond to sequences of length $$n-2$$.\n2. In a Prüfer code, the degree of a vertex $$v$$ equals:\n   $$\\deg(v)=1+(\\text{number of times }v\\text{ appears in the code}).$$\n3. Here $$n=7$$, so the Prüfer code has length $$7-2=5$$.\n4. We want $$\\deg(1)=4$$, so $$1$$ must appear exactly $$3$$ times in the code.\n5. Choose the $$3$$ positions (out of $$5$$) that will be $$1$$:\n   $$\\binom{5}{3}=10.$$ \n6. The remaining $$2$$ positions can be any labels from $$\\{2,3,4,5,6,7\\}$$, so $$6$$ choices each:\n   $$6^2=36.$$ \n7. Total trees:\n   $$10\\cdot36=360.$$",
    answer: "360",
    hint: "In a Prüfer code, $$\\deg(v)=1+\\#(v\\text{ in the code})$$. For $$n=7$$, the code length is $$5$$.",
  },
  {
    title: "The Binomial Slide",
    difficulty: "hard",
    category: "Algebra/Series",
    problemText:
      "Compute\n$$S = \\sum_{k=0}^{2025} \\frac{(-1)^k}{k+1}\\binom{2025}{k}.$$\nWhat is $$S$$?",
    solutionOutline:
      "1. Consider the integral:\n   $$I=\\int_{0}^{1}(1-x)^{2025}\\,dx.$$ \n2. Expand using the binomial theorem:\n   $$(1-x)^{2025}=\\sum_{k=0}^{2025} (-1)^k\\binom{2025}{k}x^k.$$ \n3. Integrate term-by-term on $$[0,1]$$:\n   $$I=\\sum_{k=0}^{2025} (-1)^k\\binom{2025}{k}\\int_0^1 x^k\\,dx=\\sum_{k=0}^{2025} (-1)^k\\binom{2025}{k}\\cdot\\frac{1}{k+1}.$$ \n4. So $$I=S$$.\n5. Compute $$I$$ directly:\n   $$\\int_{0}^{1}(1-x)^{2025}\\,dx=\\left[-\\frac{(1-x)^{2026}}{2026}\\right]_{0}^{1}=\\frac{1}{2026}.$$ \n6. Therefore $$S=\\frac{1}{2026}$$.",
    answer: "1/2026",
    hint: "What do you get if you expand $$(1-x)^{2025}$$ and integrate from $$0$$ to $$1$$?",
  },
  {
    title: "Five Points Force It",
    difficulty: "hard",
    category: "Algebra",
    problemText:
      "A polynomial $$P(x)$$ has degree at most $$4$$ and satisfies\n$$P(1)=1,\\;P(2)=2,\\;P(3)=3,\\;P(4)=4,\\;P(5)=5.$$\nWhat is $$P(0)$$?",
    solutionOutline:
      "1. Define a new polynomial:\n   $$Q(x)=P(x)-x.$$ \n2. Since $$P$$ has degree at most $$4$$, $$Q$$ also has degree at most $$4$$.\n3. For $$x=1,2,3,4,5$$:\n   $$Q(x)=P(x)-x=0.$$ \n4. So $$Q(x)$$ has at least $$5$$ distinct roots.\n5. A nonzero polynomial of degree at most $$4$$ cannot have $$5$$ distinct roots.\n6. Therefore $$Q(x)\\equiv0$$ for all $$x$$, meaning $$P(x)=x$$ for all $$x$$.\n7. Hence $$P(0)=0$$.",
    answer: "0",
    hint: "Consider $$Q(x)=P(x)-x$$. How many roots does $$Q$$ have, and what is its maximum possible degree?",
  },
  {
    title: "Rectangle Sensor Secret",
    difficulty: "hard",
    category: "Geometry",
    problemText:
      "In a rectangle $$ABCD$$ (with vertices in order), a point $$P$$ inside the rectangle satisfies:\n$$PA=7,\\;PB=9,\\;PC=11.$$\nWhat is the value of $$PD^2$$?",
    solutionOutline:
      "1. In any rectangle, for any point $$P$$, the British Flag identity holds:\n   $$PA^2+PC^2=PB^2+PD^2.$$ \n2. Substitute the given values:\n   $$7^2+11^2=9^2+PD^2.$$ \n3. Compute:\n   $$49+121=81+PD^2 \\implies 170=81+PD^2.$$ \n4. Therefore:\n   $$PD^2=170-81=89.$$",
    answer: "89",
    hint: "Use the rectangle identity $$PA^2+PC^2=PB^2+PD^2$$.",
  },
  {
    title: "Factorial Rainstorm Remainder",
    difficulty: "hard",
    category: "Number Theory",
    problemText:
      "Compute the remainder when\n$$1!+2!+3!+\\cdots+2025!$$\nis divided by $$2025$$.",
    solutionOutline:
      "1. Factor:\n   $$2025=3^4\\cdot5^2.$$ \n2. For any $$n\\ge10$$, the factorial $$n!$$ contains at least:\n   - two factors of $$5$$ (since $$\\lfloor 10/5\\rfloor=2$$), and\n   - four factors of $$3$$ (since $$\\lfloor 10/3\\rfloor+\\lfloor 10/9\\rfloor=3+1=4$$).\n3. Hence $$2025\\mid 10!$$, and therefore $$2025\\mid n!$$ for every $$n\\ge10$$.\n4. So modulo $$2025$$:\n   $$1!+2!+\\cdots+2025!\\equiv 1!+2!+\\cdots+9!.$$ \n5. Compute:\n   $$1!+2!+3!+4!+5!+6!+7!+8!+9!$$\n   $$=1+2+6+24+120+720+5040+40320+362880=409113.$$ \n6. Divide by $$2025$$:\n   $$2025\\cdot202=409050,$$\n   so the remainder is:\n   $$409113-409050=63.$$",
    answer: "63",
    hint: "From what point onward is $$n!$$ guaranteed to be divisible by $$2025=3^4\\cdot5^2$$?",
  },
  {
    title: "Two Fixed, Two Swaps",
    difficulty: "hard",
    category: "Combinatorics",
    problemText:
      "A bijection $$f$$ acts on the set $$\\{1,2,3,4,5,6\\}$$ and satisfies\n$$f(f(i))=i$$\nfor every $$i$$.\nAdditionally, exactly two numbers are fixed points (exactly two $$i$$ satisfy $$f(i)=i$$).\nHow many such functions $$f$$ exist?",
    solutionOutline:
      "1. The condition $$f(f(i))=i$$ means $$f$$ is an involution: its cycle decomposition consists only of 1-cycles (fixed points) and 2-cycles (swaps).\n2. Choose which $$2$$ elements are fixed:\n   $$\\binom{6}{2}=15.$$ \n3. The remaining $$4$$ elements must be paired into $$2$$ disjoint swaps.\n4. The number of perfect matchings on $$4$$ labeled elements is:\n   $$(4-1)!!=3.$$ \n5. Multiply:\n   $$15\\cdot3=45.$$",
    answer: "45",
    hint: "An involution is made of fixed points and disjoint swaps. Choose the fixed points, then count pairings of the rest.",
  },
  {
    title: "Cevians Crossed",
    difficulty: "hard",
    category: "Geometry",
    problemText:
      "Triangle $$ABC$$ has area $$120$$.\nPoint $$D$$ lies on segment $$AB$$ so that $$AD:DB=1:2$$.\nPoint $$E$$ lies on segment $$AC$$ so that $$AE:EC=3:1$$.\nLines $$CD$$ and $$BE$$ intersect at $$P$$.\nWhat is the area of triangle $$APB$$?",
    solutionOutline:
      "1. Use coordinates (area ratios are preserved under affine transformations).\n2. Choose $$A=(0,0)$$, $$B=(3,0)$$, $$C=(0,4)$$ so that:\n   $$[ABC]=\\frac{1}{2}\\cdot3\\cdot4=6.$$ \n3. Since $$AD:DB=1:2$$ on $$AB$$, point $$D$$ is one-third of the way from $$A$$ to $$B$$:\n   $$D=(1,0).$$ \n4. Since $$AE:EC=3:1$$ on $$AC$$, point $$E$$ is three-fourths of the way from $$A$$ to $$C$$:\n   $$E=(0,3).$$ \n5. Line $$CD$$: through $$C=(0,4)$$ and $$D=(1,0)$$ has equation:\n   $$y=4-4x.$$ \n6. Line $$BE$$: through $$B=(3,0)$$ and $$E=(0,3)$$ has equation:\n   $$y=-x+3.$$ \n7. Intersection $$P$$ solves $$4-4x=-x+3$$, giving $$x=\\frac{1}{3}$$ and $$y=\\frac{8}{3}$$.\n8. Triangle $$APB$$ has base $$AB=3$$ and height equal to the $$y$$-coordinate of $$P$$, so:\n   $$[APB]=\\frac{1}{2}\\cdot3\\cdot\\frac{8}{3}=4.$$ \n9. Scale from area $$6$$ to area $$120$$: factor $$\\frac{120}{6}=20$$.\n10. Therefore:\n    $$[APB]=4\\cdot20=80.$$",
    answer: "80",
    hint: "Use coordinates: pick a convenient triangle, compute $$P$$ by intersecting two lines, get an area ratio, then scale to area $$120$$.",
  },
  {
    title: "GCD Festival",
    difficulty: "hard",
    category: "Number Theory",
    problemText:
      "Compute\n$$S=\\sum_{k=1}^{210} \\gcd(k,210).$$\nWhat is $$S$$?",
    solutionOutline:
      "1. Group terms by the value $$d=\\gcd(k,210)$$.\n2. If $$\\gcd(k,210)=d$$, write $$k=dm$$. Then $$m\\le \\frac{210}{d}$$ and:\n   $$\\gcd\\left(m,\\frac{210}{d}\\right)=1.$$ \n3. For each divisor $$d\\mid210$$, the number of such $$m$$ is:\n   $$\\varphi\\left(\\frac{210}{d}\\right),$$\n   so the contribution from this $$d$$ is:\n   $$d\\cdot\\varphi\\left(\\frac{210}{d}\\right).$$ \n4. Therefore:\n   $$S=\\sum_{d\\mid210} d\\,\\varphi\\left(\\frac{210}{d}\\right).$$\n5. Since $$210=2\\cdot3\\cdot5\\cdot7$$, list divisors $$d$$ and compute contributions:\n   - $$d=1$$: $$1\\cdot\\varphi(210)=1\\cdot48=48$$\n   - $$d=2$$: $$2\\cdot\\varphi(105)=2\\cdot48=96$$\n   - $$d=3$$: $$3\\cdot\\varphi(70)=3\\cdot24=72$$\n   - $$d=5$$: $$5\\cdot\\varphi(42)=5\\cdot12=60$$\n   - $$d=6$$: $$6\\cdot\\varphi(35)=6\\cdot24=144$$\n   - $$d=7$$: $$7\\cdot\\varphi(30)=7\\cdot8=56$$\n   - $$d=10$$: $$10\\cdot\\varphi(21)=10\\cdot12=120$$\n   - $$d=14$$: $$14\\cdot\\varphi(15)=14\\cdot8=112$$\n   - $$d=15$$: $$15\\cdot\\varphi(14)=15\\cdot6=90$$\n   - $$d=21$$: $$21\\cdot\\varphi(10)=21\\cdot4=84$$\n   - $$d=30$$: $$30\\cdot\\varphi(7)=30\\cdot6=180$$\n   - $$d=35$$: $$35\\cdot\\varphi(6)=35\\cdot2=70$$\n   - $$d=42$$: $$42\\cdot\\varphi(5)=42\\cdot4=168$$\n   - $$d=70$$: $$70\\cdot\\varphi(3)=70\\cdot2=140$$\n   - $$d=105$$: $$105\\cdot\\varphi(2)=105\\cdot1=105$$\n   - $$d=210$$: $$210\\cdot\\varphi(1)=210\\cdot1=210$$\n6. Sum all contributions:\n   $$48+96+72+60+144+56+120+112+90+84+180+70+168+140+105+210=1755.$$",
    answer: "1755",
    hint: "Group by $$d=\\gcd(k,210)$$. How many $$k$$ have gcd equal to $$d$$ in terms of $$\\varphi\\left(\\frac{210}{d}\\right)$$?",
  },
  {
    title: "Sum-and-Difference Machine",
    difficulty: "hard",
    category: "Logic/Invariants",
    problemText:
      "Start with the three numbers $$15,\\;21,\\;33$$ on a board.\nA move chooses two numbers $$a$$ and $$b$$, erases them, and writes back the two numbers:\n$$a+b$$\nand\n$$|a-b|.$$\nRepeat until only one number remains.\nWhat final number must you end with (no matter which moves you choose)?",
    solutionOutline:
      "1. Key fact: for any integers $$a,b$$,\n   $$\\gcd(a,b)=\\gcd(a+b,|a-b|).$$\n   (Adding or subtracting multiples does not change the gcd.)\n2. In each move, the pair $$\\{a,b\\}$$ is replaced by $$\\{a+b,|a-b|\\}$$, so the gcd of those two numbers is preserved.\n3. Because the third number on the board is unchanged in that move, the gcd of *all* numbers currently on the board stays invariant throughout the process.\n4. Therefore, the gcd of the final single number equals the gcd of the starting set:\n   $$\\gcd(15,21,33).$$\n5. Compute:\n   $$\\gcd(15,21)=3,$$\n   $$\\gcd(3,33)=3.$$ \n6. So the final remaining number must be $$3$$.",
    answer: "3",
    hint: "What happens to $$\\gcd(a,b)$$ if you replace $$a,b$$ by $$a+b$$ and $$|a-b|$$?",
  },
  {
    title: "Divisible-by-3 Six-Pack",
    difficulty: "hard",
    category: "Combinatorics/Number Theory",
    problemText:
      "A code consists of choosing $$6$$ distinct numbers from $$\\{1,2,\\dots,12\\}$$ (order does not matter).\nHow many such codes have a sum divisible by $$3$$?",
    solutionOutline:
      "1. Classify $$1$$ through $$12$$ by residue mod $$3$$.\n2. Each residue class has exactly $$4$$ numbers:\n   - $$0\\pmod{3}$$: $$\\{3,6,9,12\\}$$\n   - $$1\\pmod{3}$$: $$\\{1,4,7,10\\}$$\n   - $$2\\pmod{3}$$: $$\\{2,5,8,11\\}$$\n3. Let $$a,b,c$$ be how many chosen from residues $$0,1,2$$ respectively. Then:\n   $$a+b+c=6.$$\n4. The sum mod $$3$$ is:\n   $$0\\cdot a +1\\cdot b +2\\cdot c \\equiv b+2c \\pmod{3}.$$ \n   We need $$b+2c\\equiv0\\pmod{3}$$.\n5. List all triples $$ (a,b,c) $$ with $$0\\le a,b,c\\le4$$, $$a+b+c=6$$, and $$b+2c\\equiv0\\pmod{3}$$:\n   $$ (2,2,2), (0,3,3), (3,0,3), (3,3,0), (1,1,4), (1,4,1), (4,1,1). $$\n6. Count ways for each pattern using combinations from each class (each class has $$4$$ numbers):\n   - For $$ (2,2,2) $$:\n     $$\\binom{4}{2}^3=6^3=216.$$ \n   - For each of the other six patterns, the count is:\n     $$\\binom{4}{0}\\binom{4}{3}\\binom{4}{3}=1\\cdot4\\cdot4=16,$$\n     or equivalently $$\\binom{4}{1}\\binom{4}{1}\\binom{4}{4}=4\\cdot4\\cdot1=16$$.\n     So each contributes $$16$$.\n7. Total:\n   $$216+6\\cdot16=216+96=312.$$",
    answer: "312",
    hint: "Split $$1$$–$$12$$ into residue classes mod $$3$$ (each has $$4$$ numbers). Then count choices with $$b+2c\\equiv0\\pmod{3}$$.",
  },
  {
    title: "First Ace Surprise",
    difficulty: "hard",
    category: "Probability",
    problemText:
      "A standard $$52$$-card deck is thoroughly shuffled.\nCards are revealed from the top one by one until the first Ace appears.\nWhat is the expected number of revealed cards?",
    solutionOutline:
      "1. Think only about the positions of the $$4$$ aces in the deck.\n2. After shuffling, the $$4$$ ace-positions are equally likely to be any $$4$$-element subset of $$\\{1,2,\\dots,52\\}$$.\n3. Let $$p_1<p_2<p_3<p_4$$ be the ace positions, so the stopping time is $$p_1$$.\n4. Consider the $$5$$ gaps of non-aces:\n   - $$g_0$$ cards before the first ace,\n   - $$g_1,g_2,g_3$$ between consecutive aces,\n   - $$g_4$$ after the last ace.\n5. These $$5$$ gaps contain all $$48$$ non-ace cards, so:\n   $$g_0+g_1+g_2+g_3+g_4=48.$$ \n6. By symmetry, each gap has the same expected size, so:\n   $$\\mathbb{E}[g_0]=\\frac{48}{5}.$$ \n7. The first ace position is one plus the number of non-aces before it:\n   $$p_1=g_0+1.$$ \n8. Therefore:\n   $$\\mathbb{E}[p_1]=\\mathbb{E}[g_0]+1=\\frac{48}{5}+1=\\frac{53}{5}.$$",
    answer: "53/5",
    hint: "Imagine the $$4$$ aces splitting the $$48$$ non-aces into $$5$$ random gaps. By symmetry, what is the expected size of the first gap?",
  },
  {
    title: "Six Dice, One Total",
    difficulty: "hard",
    category: "Combinatorics",
    problemText:
      "Roll $$6$$ fair six-sided dice.\nHow many ordered outcomes $$ (d_1,d_2,d_3,d_4,d_5,d_6) $$ satisfy\n$$d_1+d_2+d_3+d_4+d_5+d_6=21$$?",
    solutionOutline:
      "1. Let $$x_i=d_i-1$$. Then each $$x_i\\in\\{0,1,2,3,4,5\\}$$ and:\n   $$x_1+x_2+x_3+x_4+x_5+x_6=21-6=15.$$ \n2. First count nonnegative solutions with no upper bound:\n   $$x_1+\\cdots+x_6=15$$ has\n   $$\\binom{15+6-1}{6-1}=\\binom{20}{5}=15504$$\n   solutions.\n3. Subtract solutions where some $$x_i\\ge6$$.\n   Let $$y_i=x_i-6\\ge0$$. Then the remaining sum is $$15-6=9$$.\n4. Choose which variable violates the bound: $$\\binom{6}{1}=6$$ choices.\n   For each, the number of solutions to $$y_i+\\sum_{j\\ne i}x_j=9$$ is:\n   $$\\binom{9+6-1}{5}=\\binom{14}{5}=2002.$$ \n   So subtract $$6\\cdot2002=12012$$.\n5. Add back double-violations where two variables are at least $$6$$:\n   subtracting $$12$$ from the sum gives $$15-12=3$$.\n   Choose the two variables: $$\\binom{6}{2}=15$$.\n   Solutions to sum $$3$$ in $$6$$ variables:\n   $$\\binom{3+6-1}{5}=\\binom{8}{5}=56.$$ \n   Add back $$15\\cdot56=840$$.\n6. Three or more variables cannot be at least $$6$$ because $$3\\cdot6=18>15$$.\n7. Therefore the final count is:\n   $$15504-12012+840=4332.$$",
    answer: "4332",
    hint: "Convert to $$x_i=d_i-1$$ so the sum becomes $$15$$ with bounds $$0\\le x_i\\le5$$, then use inclusion-exclusion on the upper bound.",
  },
  {
    title: "Square Product Pairs",
    difficulty: "hard",
    category: "Number Theory/Combinatorics",
    problemText:
      "How many ordered pairs of integers $$ (a,b) $$ with $$1\\le a\\le36$$ and $$1\\le b\\le36$$ have the property that $$ab$$ is a perfect square?",
    solutionOutline:
      "1. Every positive integer can be written uniquely as:\n   $$n=s\\cdot t^2,$$\n   where $$s$$ is squarefree (no prime squared divides $$s$$).\n2. Then:\n   $$ab\\text{ is a square }\\iff \\text{the squarefree parts of }a\\text{ and }b\\text{ are equal.}$$\n3. For each squarefree $$s\\le36$$, let $$c(s)$$ be the count of numbers in $$\\{1,2,\\dots,36\\}$$ whose squarefree part is $$s$$.\n   Then the number of ordered pairs with matching squarefree part $$s$$ is $$c(s)^2$$.\n4. For fixed $$s$$, numbers with squarefree part $$s$$ are exactly $$s\\cdot t^2\\le36$$, so:\n   $$c(s)=\\left\\lfloor\\sqrt{\\frac{36}{s}}\\right\\rfloor.$$ \n5. Compute where $$c(s)\\ge2$$ (squarefree $$s$$ only):\n   - $$s=1$$: $$c=\\lfloor\\sqrt{36}\\rfloor=6$$\n   - $$s=2$$: $$c=\\lfloor\\sqrt{18}\\rfloor=4$$\n   - $$s=3$$: $$c=\\lfloor\\sqrt{12}\\rfloor=3$$\n   - $$s=5$$: $$c=\\lfloor\\sqrt{7.2}\\rfloor=2$$\n   - $$s=6$$: $$c=\\lfloor\\sqrt{6}\\rfloor=2$$\n   - $$s=7$$: $$c=\\lfloor\\sqrt{\\tfrac{36}{7}}\\rfloor=2$$\n   For any other squarefree $$s\\ge10$$, $$\\sqrt{\\frac{36}{s}}<2$$ so $$c(s)=1$$.\n6. The squarefree numbers between $$1$$ and $$36$$ are $$24$$ in total.\n   We listed $$6$$ of them with $$c(s)\\ge2$$, so there are $$24-6=18$$ squarefree $$s$$ with $$c(s)=1$$.\n7. Sum the squares:\n   $$6^2+4^2+3^2+2^2+2^2+2^2+18\\cdot1^2=36+16+9+4+4+4+18=91.$$ \n8. Therefore there are $$91$$ ordered pairs $$ (a,b) $$ with $$ab$$ a perfect square.\n9. But note: $$s=1$$ covers perfect squares, and all counting already includes them correctly.\n10. Final answer: $$91$$.",
    answer: "91",
    hint: "Write each number as $$n=s\\cdot t^2$$ with squarefree $$s$$. Then $$ab$$ is a square exactly when $$a$$ and $$b$$ share the same squarefree part.",
  },
  {
    title: "Tridiagonal Code Determinant",
    difficulty: "hard",
    category: "Algebra",
    problemText:
      "Let $$D$$ be the determinant of the $$6\\times6$$ matrix whose diagonal entries are all $$3$$, whose entries immediately above and below the diagonal are all $$-1$$, and all other entries are $$0$$.\nWhat is $$D$$?",
    solutionOutline:
      "1. Let $$D_n$$ be the determinant of the corresponding $$n\\times n$$ tridiagonal matrix.\n2. Expanding along the first row gives the recurrence:\n   $$D_n=3D_{n-1}-(-1)(-1)D_{n-2}=3D_{n-1}-D_{n-2}.$$ \n3. Base cases:\n   $$D_1=3,$$\n   $$D_2=\\begin{vmatrix}3&-1\\\\-1&3\\end{vmatrix}=9-1=8.$$ \n4. Compute forward:\n   $$D_3=3D_2-D_1=3\\cdot8-3=21,$$\n   $$D_4=3D_3-D_2=3\\cdot21-8=55,$$\n   $$D_5=3D_4-D_3=3\\cdot55-21=144,$$\n   $$D_6=3D_5-D_4=3\\cdot144-55=377.$$ \n5. Therefore $$D=D_6=377.$$",
    answer: "377",
    hint: "Let $$D_n$$ be the determinant of the $$n\\times n$$ version. Expanding on the first row gives $$D_n=3D_{n-1}-D_{n-2}$$.",
  },
  {
    title: "Intercept-Triangle Line",
    difficulty: "hard",
    category: "Algebra/Geometry",
    problemText:
      "A line crosses the positive $$x$$-axis at $$A$$ and the positive $$y$$-axis at $$B$$.\nIt also passes through the point $$ (1,2) $$.\nThe triangle formed by the line and the coordinate axes has area $$4$$.\nWhat is the slope of the line?",
    solutionOutline:
      "1. Use intercept form for a line with positive intercepts:\n   $$\\frac{x}{a}+\\frac{y}{b}=1,$$\n   where $$a>0$$ is the $$x$$-intercept and $$b>0$$ is the $$y$$-intercept.\n2. The triangle with axes has area:\n   $$\\frac{ab}{2}=4 \\implies ab=8.$$ \n3. Plug in $$ (1,2) $$:\n   $$\\frac{1}{a}+\\frac{2}{b}=1.$$ \n4. Substitute $$b=\\frac{8}{a}$$:\n   $$\\frac{1}{a}+\\frac{2}{8/a}=\\frac{1}{a}+\\frac{2a}{8}=\\frac{1}{a}+\\frac{a}{4}=1.$$ \n5. Multiply by $$4a$$:\n   $$4+a^2=4a \\implies a^2-4a+4=0 \\implies (a-2)^2=0.$$ \n6. So $$a=2$$, hence $$b=\\frac{8}{2}=4$$.\n7. The slope of $$\\frac{x}{a}+\\frac{y}{b}=1$$ is:\n   $$m=-\\frac{b}{a}=-\\frac{4}{2}=-2.$$",
    answer: "-2",
    hint: "Use intercept form $$\\frac{x}{a}+\\frac{y}{b}=1$$. The area gives $$ab=8$$, and the point gives $$\\frac{1}{a}+\\frac{2}{b}=1$$.",
  },
  {
    title: "Base-12 Factorial Zeros",
    difficulty: "hard",
    category: "Number Theory",
    problemText:
      "How many trailing zeros does $$1000!$$ have when written in base $$12$$?",
    solutionOutline:
      "1. Trailing zeros in base $$12$$ come from factors of $$12=2^2\\cdot3$$.\n2. Let $$v_2(1000!)$$ be the exponent of $$2$$ in $$1000!$$, and $$v_3(1000!)$$ the exponent of $$3$$.\n3. Then the number of base-$$12$$ trailing zeros is:\n   $$\\min\\left(\\left\\lfloor\\frac{v_2(1000!)}{2}\\right\\rfloor,\\;v_3(1000!)\\right).$$\n4. Compute using Legendre’s formula:\n   $$v_2(1000!)=\\left\\lfloor\\frac{1000}{2}\\right\\rfloor+\\left\\lfloor\\frac{1000}{4}\\right\\rfloor+\\left\\lfloor\\frac{1000}{8}\\right\\rfloor+\\cdots$$\n   $$=500+250+125+62+31+15+7+3+1=994.$$ \n5. Also:\n   $$v_3(1000!)=\\left\\lfloor\\frac{1000}{3}\\right\\rfloor+\\left\\lfloor\\frac{1000}{9}\\right\\rfloor+\\left\\lfloor\\frac{1000}{27}\\right\\rfloor+\\cdots$$\n   $$=333+111+37+12+4+1=498.$$ \n6. Therefore:\n   $$\\left\\lfloor\\frac{v_2(1000!)}{2}\\right\\rfloor=\\left\\lfloor\\frac{994}{2}\\right\\rfloor=497.$$ \n7. Take the minimum:\n   $$\\min(497,498)=497.$$",
    answer: "497",
    hint: "Since $$12=2^2\\cdot3$$, compute $$v_2(1000!)$$ and $$v_3(1000!)$$, then take $$\\min\\left(\\left\\lfloor\\frac{v_2}{2}\\right\\rfloor,v_3\\right)$$.",
  },
  {
    title: "Even-Checksum Grid",
    difficulty: "hard",
    category: "Combinatorics",
    problemText:
      "A $$4\\times5$$ grid is filled with zeros and ones.\nEvery row must have an even sum, and every column must have an even sum.\nHow many such grids exist?",
    solutionOutline:
      "1. Choose the entries in the first $$3$$ rows and first $$4$$ columns freely.\n   That is $$3\\cdot4=12$$ cells, giving $$2^{12}$$ choices.\n2. For each of the first $$3$$ rows, the last entry in column $$5$$ is forced to make the row sum even.\n3. For each of the first $$4$$ columns, the last entry in row $$4$$ is forced to make the column sum even.\n4. The bottom-right corner cell $$ (4,5) $$ is then automatically consistent:\n   if the first $$3$$ rows are even and the first $$4$$ columns are even, the parity constraint forces the last cell to satisfy both.\n5. Therefore the total number of valid grids is:\n   $$2^{12}=4096.$$",
    answer: "4096",
    hint: "Pick all but the last row and last column freely. How many cells can you choose before parities force the rest?",
  },
  {
    title: "The Möbius Loop",
    difficulty: "hard",
    category: "Algebra/Sequences",
    problemText:
      "Define the transformation\n$$T(x)=1-\\frac{1}{x}$$\nfor $$x\\ne0$$.\nStart with $$x_0=2$$ and define $$x_{n+1}=T(x_n)$$.\nWhat is $$x_{2025}$$?",
    solutionOutline:
      "1. Compute the first few terms:\n   $$x_0=2,$$\n   $$x_1=1-\\frac{1}{2}=\\frac{1}{2},$$\n   $$x_2=1-\\frac{1}{1/2}=1-2=-1,$$\n   $$x_3=1-\\frac{1}{-1}=1+1=2.$$ \n2. We have returned to $$2$$, so the sequence is periodic with period $$3$$:\n   $$2\\to\\frac{1}{2}\\to-1\\to2\\to\\cdots$$\n3. Since $$2025\\equiv0\\pmod{3}$$, we get:\n   $$x_{2025}=x_0=2.$$",
    answer: "2",
    hint: "Compute $$x_1,x_2,x_3$$. Do you see a cycle length?",
  },
  {
    title: "Roots of Unity Gear",
    difficulty: "hard",
    category: "Algebra",
    problemText:
      "Let $$z$$ be a complex number such that\n$$z^3=1$$\nand $$z\\ne1$$.\nCompute\n$$(1-z)(1-z^2).$$",
    solutionOutline:
      "1. Expand:\n   $$(1-z)(1-z^2)=1-z-z^2+z^3.$$ \n2. Since $$z^3=1$$, this becomes:\n   $$1-z-z^2+1=2-(z+z^2).$$ \n3. Because $$z^3-1=(z-1)(z^2+z+1)=0$$ and $$z\\ne1$$, we must have:\n   $$z^2+z+1=0.$$ \n4. So $$z+z^2=-1$$.\n5. Substitute:\n   $$2-(z+z^2)=2-(-1)=3.$$",
    answer: "3",
    hint: "Use $$z^3-1=(z-1)(z^2+z+1)$$. If $$z\\ne1$$, what does that force $$z+z^2$$ to be?",
  },
  {
    title: "Mirror Logs",
    difficulty: "hard",
    category: "Algebra",
    problemText:
      "Solve for real $$x$$ with $$x>0$$ and $$x\\ne1$$:\n$$\\log_2(x)+\\log_x(2)=5.$$\nThere are two solutions.\nWhat is the product of the two solutions?",
    solutionOutline:
      "1. Let:\n   $$t=\\log_2(x).$$\n   Then $$x=2^t$$ and:\n   $$\\log_x(2)=\\frac{1}{\\log_2(x)}=\\frac{1}{t}.$$ \n2. The equation becomes:\n   $$t+\\frac{1}{t}=5.$$ \n3. Multiply by $$t$$:\n   $$t^2-5t+1=0.$$ \n4. Let the two roots be $$t_1,t_2$$. Then by Vieta’s formulas:\n   $$t_1+t_2=5.$$ \n5. The corresponding solutions are $$x_1=2^{t_1}$$ and $$x_2=2^{t_2}$$.\n6. Their product is:\n   $$x_1x_2=2^{t_1}\\cdot2^{t_2}=2^{t_1+t_2}=2^5=32.$$",
    answer: "32",
    hint: "Set $$t=\\log_2(x)$$ so that $$\\log_x(2)=\\frac{1}{t}$$. Then use Vieta’s formulas on $$t+\\frac{1}{t}=5$$.",
  },
];
