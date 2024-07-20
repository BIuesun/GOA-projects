#Write a function that takes a list of numbers and returns the sum of all the even numbers.
def sum(numbers): #creating function
    total=0 #creating variable total
    for num in numbers:
        if num%2 == 0:
            total=total+num #adding number to total if it passes %2 argument
    return total

#example
numbers=[1,2,3,4,5]
even_sum=sum(numbers)
print(even_sum)