#Print even numbers up to 20.

num1=0

while num1<20+1:
     print(num1)
     num1=num1 + 2


#calculate the sum of numbers from 1 to 10.

num2=0
sum=0

while num2<10:
     num2=num2 +1
     sum=sum +num2
print(sum)

#Write a while loop that asks the user to guess a number between 1 and 10 until they get it right. The correct number is 7.


answer=7
guess = 0

while guess != answer:
    guess=int(input("Please enter number (1-10) = "))
    if guess==answer:
        print("You Won")
    else:
        print("Try again")

#making user input password until its correct


correct="WowSoSecret"
guess=""

while guess !=correct:
    guess = input("Enter the password: ")

if guess == guess:
        print("Congratulations! You guessed the correct password.")
else:
        print("Incorrect password. Please try again.")



