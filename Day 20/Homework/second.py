#  Implement a function that takes a number and returns the factorial of that number using recursion.

#factorial is multipling sum of all integers less or equal to given positive number so 5's factorial is 1x2x3x4x5

def factorial(num):
    if num==0 or num==1: #if number is 0 or 1 its factorial is 1
        return 1
    else:
        return num*factorial(num-1) #any other factorial can be calculated using n-1

#example

number=9
result=factorial(number)
print(result)

#result will be 362880 since 1x2x3x4x5x6x7x8x9 equals to that