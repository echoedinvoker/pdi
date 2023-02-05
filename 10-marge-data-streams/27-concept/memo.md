## **Two specialized steps to MERGE STREAMS**

### *Append merge* 

![Alt append merge](pic/01.jpg)

**mud stream**

> This is what we need to avoid, and why we use specialized steps to do merge.

![Alt mud stream](pic/02.jpg)

### *Sorted merge* 

![Alt sorted merge 1](pic/03.jpg)

![Alt sorted merge 2](pic/04.jpg)

## **Duplicate**

> Merge may generate duplicate rows, even if the original streams have already been deduplicated.

![Alt duplicate](pic/05.jpg)
