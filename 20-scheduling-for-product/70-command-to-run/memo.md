## **.sh files to execute Job or Transformation**

> We used 'spoon.sh' to run Job and Transformation, but in production we use 'kitchen.sh' or 'pan.sh', 'spoon.sh' is only used during development, because there is a graphical development interface.

![Alt .sh to execute job or transformation](pic/01.jpg)

## **Execute Job with Kitchen.sh**

> Let's use the Job from the previous lecture as an example, and run it from the terminal using 'kitchen.sh'.

![Alt execute job in terminal](pic/02.jpg)

![Alt where the logs about step start](pic/03.jpg)

![Alt logs end](pic/04.jpg)

## **Scheduling with crontab**

> Usually use linus crontab or windows job scheduler to automatically schedule the time and frequency of Job or Transformation execution.

![Alt crontab -e](pic/05.jpg)

![Alt edit contents of it](pic/06.jpg)
