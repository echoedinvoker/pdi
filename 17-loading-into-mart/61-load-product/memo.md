## **Add 'effective date' to mainstream data**

![Alt effective date](pic/01.jpg)

- effective date can have many different meanings, depending on the actual requirements, the main reason for adding this field here is that it is needed for the subsequent step.

## **Data Warehouse: Dimension lookup/update**

### **Setting**

![Alt dimension lookup/update and logic](pic/02.jpg)

- Green is the logic of insert/update data into database.

### **Setting: match rules**

> This tab is specifically used to set the business key to exist in the database (data is already exists).

![Alt fieds tab: match rules to insert/update](pic/03.jpg)

- The above settings are only an example, each case will have different settings according to the requirements.

## **Execute & Check the result**

![Alt check result](pic/04.jpg)

- Compared to Type 1 SCD, Type 2 SCD only requires one step, but the setup is more complicated.
