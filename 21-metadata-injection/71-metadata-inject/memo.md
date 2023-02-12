## **Problem: if metadata of data source is dynamic**

![Alt problem](pic/01.jpg)

## **Template/Main Transformation**

![Alt create template ktb](pic/02.jpg)

![Alt cannot input sheet name](pic/03.jpg)

![Alt fields are fine](pic/04.jpg)

### _Flow: Dummy_

![Alt dummy](pic/05.jpg)

- Our main processing will be in the main/template Transformation, where step 'Dummy' is used instead of those processes.

## **Metadata Injection Transformation**

![Alt create meta_injector.ktb](pic/06.jpg)

### _Get system datetime_

![Alt get system info](pic/07.jpg)

### _Remove time of datetime_

![Alt select values - remove time](pic/08.jpg)

### _Group 'products' with date to sheet name_

![Alt java script - combine strings](pic/09.jpg)

### _Flow: ETL metadata injection_

**tab 'Inject Metadata'**

![Alt elt metadata injection](pic/10.jpg)

![Alt setting read sheet from top-left](pic/11.jpg)

**Main or Template?**

![Alt option tab: key to main/template](pic/12.jpg)

**Other settings of tab 'options'**

![Alt other setting of options tab](pic/13.jpg)

## **Check result**

![Alt check result file](pic/14.jpg)

![Alt contents of result ktr](pic/15.jpg)
