## **Prepare**

![Alt prepare](pic/01.jpg)

## **Output: Insert/update**

> The insert or update database data is an output operation, so the step is classified as 'Output'.

![Alt insert/update](pic/02.jpg)

## **Input data by Grid data**

### _metadata_

![Alt data grid make data](pic/03.jpg)

### _data_

![Alt key in some data](pic/04.jpg)

- I intentionally left the enrollment field empty in the above image to see what happens.

## **Configure Insert/update**

![Alt setting insert/update](pic/05.jpg)

- So I got two conclusions:

  - The data in mainstream doesn't have to be complete, as long as the fields that need to be used to match or to update and insert have values.

  - Only fields that are populated in 'update fields' will be updated or inserted, other fields will not be updated or inserted even if they have values in mainstream.

    - So in 'update field', fill in as many fields as you can, and if there are some fields that are not allowed to be changed if they already have values in the database, then Update must be set to N.

## **How to fix the problem**

![Alt fix the problem](pic/06.jpg)

## **If only need to update**

![Alt only update](pic/07.jpg)

- The lecturer is directly suggesting to use only 'Insert/update', but I think you can use this step if you want to avoid accidental insert.
