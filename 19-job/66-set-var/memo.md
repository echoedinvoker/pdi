## **Good practice to set variable**

![Alt General: Set variables](pic/01.jpg)

- This allows the set variables to be used throughout the Job, including the step in the Transformation or Sub-Jobs.

## **Ralate to Transformation or sub-Job**

> A convenient way to open a Transformation or Sub-Job in a Job.

![Alt relate to transformation](pic/02.jpg)

## **Set a variable**

![Alt observe config of the transformation step](pic/03.jpg)

![Alt set the variable](pic/04.jpg)

- In addition to increasing the readability, setting the variable also has dynamic benefits, for example, if the value is the current time, it is not reasonable to simply give a value.

**Variable scope type**

- **JVM**

  - The same JVM can run multiple software, PDI is a software running in the JVM, if the scope is set to JVM means other software can also use this variable.

- We usually only use 'JVM' or 'current job'

## **Other ways to set variable**

![Alt other places to set variable](pic/05.jpg)

- 'kettle.properties' is the file that will be generated when you run Spoon.bat for the first time, which has many predefined environment variables, and you can add them from here.
