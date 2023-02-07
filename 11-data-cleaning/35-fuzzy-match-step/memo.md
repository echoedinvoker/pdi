## **Lookup: Fuzzy Match**

![Alt fuzzy match: observe settings](pic/01.jpg)

- Because our lookup value table is written in the excel file outside PDI, we have to do the extract lookup value table part first before setting up the fuzzy match.

## **Extract Lookup value table**

> The steps are the same as those taught before.

![Alt excel input for lookup value table](pic/02.jpg)

![Alt sheets tab](pic/03.jpg)

![Alt fields tab](pic/04.jpg)

![Alt preview](pic/05.jpg)

## **Lookup: Fuzzy Match**

![Alt settings of fuzzy match again](pic/06.jpg)

![Alt preview](pic/07.jpg)

- The measure value (score) is actually the distance between the typo error value and the correct value.

## **Replace column of typo errors with match column**

![Alt select value](pic/08.jpg)

![Alt how to replace](pic/09.jpg)

![Alt preview result](pic/10.jpg)

## **Another practice**

> If instead of replacing the original 'State' with 'State Name' in the lookup value table, I replace it with the value of another column in the lookup value table.

### _Lookup value table_

![Alt add new column State Code to excel file](pic/11.jpg)

![Alt get field](pic/12.jpg)

### _Fuzzy match settings_

![Alt fuzzy match setting](pic/13.jpg)

- Note that in this example, the column used for calculating closeness in lookup value table and the column used to replace is different.

![Alt fuzzy match setting : fields](pic/14.jpg)

![Alt preview](pic/15.jpg)

### _Replace column of typo errors with state code_

![Alt replace](pic/16.jpg)

![Alt preview result](pic/17.jpg)
