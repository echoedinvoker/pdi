## **Check Refence table**

![Alt compare to reference table](pic/01.jpg)

## **Extract from CSV to get Lookup table**

![Alt extract lookup table from CSV](pic/02.jpg)

## **Lookup: Stream lookup**

**Prepare**

![Alt rename to dff](pic/03.jpg)

- In fact, there is no need to rename, because the name brought in the 'Field' option of the 'Stream lookup' will be taken from the mainstream Field by default if there are duplicates field names.

**Stream lookup**

![Alt stream lookup](pic/04.jpg)

- The seventh step is very important, we must take a field from the lookup table and use it to determine whether it matches or not, instead of just using the reference field to determine.

![Alt preview 10000](pic/05.jpg)

![Alt null](pic/06.jpg)

## **Filter out un-match rows**

![Alt filter out null](pic/07.jpg)

![Alt preview](pic/08.jpg)

## **Remove lookup field from mainstream**

![Alt remove field from lookup table](pic/09.jpg)

![Alt restore name of filed](pic/10.jpg)

![Alt final result](pic/11.jpg)
