## **Error Handling of 'String to Integer'**

### _Check error rows_

![Alt check errors from String to Integer](pic/01.jpg)

![Alt previews error](pic/02.jpg)

### _Correct error rows_

![Alt replace in string](pic/03.jpg)

![Alt select values](pic/04.jpg)

### _Merge back_

![Alt connect to sorted merge](pic/05.jpg)

- There are two options for the targets that can be merged here:

  - Filter rows

    - The advantage is that you can continue to verify the positive value of the data after exception processing.

    - However, an additional 'Sort rows' step should be added later, because the order of the data after merge will be disrupted.

  - Sorted merge

    - If you are sure that the negative value will not occur in this exception, you can merge directly to this step.

    - Because the sorting is not disrupted, there is no need for an additional 'Sort rows'.

## **Error Handling of "Positive number"**

### _Check error rows_

![Alt check false from >0](pic/06.jpg)

![Alt calculator](pic/07.jpg)

![Alt preview](pic/08.jpg)

### _Correct error rows_

> Unlike 'Replace in string', 'Calculator' must store the result in a new field, so there is an additional 'Select values' to handle it.

![Alt select values ](pic/09.jpg)

- Be especially careful not to misuse tab 'Meta-data', which has no ability to add or subtract fields.

### _Merge back_

![Alt connect to sorted merge](pic/10.jpg)

## **Postcode format problem**

![Alt add #](pic/11.jpg)

- This format setting only works when added to the 'input' step.

![Alt final check](pic/12.jpg)
