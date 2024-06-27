#Print all integers from 0 to 20 inclusive

for i in range(0,20+1):
    print(i)


#Print the first 10 natural numbers

for a in range(1,10+1):
    print(a)

#Print even numbers separately and odd numbers separately from 0 to 100 inclusive.
#even
for b in range(0,100+1,2):
    print(b)
#odd
for c in range(0,100+1,2):
    print(c)

#make user input number and calculate sum of all numbers before it and including it


num1 = int(input("Enter a number: "))


sum1 = 0

for i in range(0, num1 + 1):
    sum1=sum1+ i


print(sum1)

#Calculate the factorial of a number entered by the user using a for loop.

num2 = int(input("Enter a number: "))

factorial = 1

for i in range(1,num2 + 1):
    factorial= factorial*i
print(factorial)

#Print numbers divisible by both 3 and 5 from 1 to 100 inclusive.


for i in range(1,100+1):
    if i % 3 == 0 and i % 5 == 0:
        print(i)

