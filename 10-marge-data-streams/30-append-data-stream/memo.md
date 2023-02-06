## **Metadata compare/modify**

### _compare with previews instead of metadata_

![Alt compare previews](pic/01.jpg)

### _power of 'Select values'_

![Alt select values for sql](pic/02.jpg)

![Alt modify metadata](pic/03.jpg)

## **Trap Detector and \<binary-string\> problem**

### _Trap detector_

> There are some small differences between metadata that must be observed using the trap detector.

![Alt trap detector](pic/04.jpg)

### _QA solution_

![Alt QA solution](pic/05.jpg)

![Alt select values for s3](pic/06.jpg)

## **Append merge**

> Because there is almost no overlap between the primary keys of the two data, it doesn't make sense to use Sorted merge to compare row by row, so we choose to make one method merge.

![Alt append merge](pic/07.jpg)

## **Sort and Deduplicate**

> Note that the position of 'Sort rows' is different from the previous lecture.

![Alt sort unique](pic/08.jpg)
