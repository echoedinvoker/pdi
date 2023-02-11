## **The Point of loading Fact table**

> The important point is that the original business ids of products and customers in the PDI stream have to be replaced with surrogate ids before they can be imported into the database table.

![Alt compare pdi stream data and database ddl](pic/01.jpg)

## **Get surrogate id with business id**

> Use the lookup step like the mapping process in data validation, but the database has a proprietary lookup step.

### _product_

![Alt database lookup for product ](pic/02.jpg)

![Alt preview](pic/03.jpg)

### _customer_

![Alt database lookup for customer](pic/04.jpg)

## **Output: Table output**

> In this case we assume that each sales data is always new and there will be no need to update it, so we use this step.

> If in your own case, the fact table loading also needs to be updated, you should use a combination or dimension step depending on your needs.

![Alt table output](pic/05.jpg)

![Alt modify fields settings of table output](pic/06.jpg)

## **Check result in database**

![Alt check database with pgadmin](pic/07.jpg)
