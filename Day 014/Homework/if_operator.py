#Write an if-else statement that prints "Good morning!" if the current hour is less than 12 and "Good afternoon!" otherwise.

hour=int(input("Please enter current time= "))

if hour<12:
    print("Good morning!")
else:
    print("Good afternoon!")


#Write an if-else statement that checks if a number is even or odd. If the number is even, print "Even"; otherwise, print "Odd."

num1=int(input("Please enter a number= "))

if num1 %2 ==0:
    print("Even")
else:
    print("Odd")

# Create an if-else statement to check if the temperature is above 30 degrees. If it is, print "It's hot outside!"; otherwise, print "It's not too hot."

temperature=int(input("Please enter temperature that is right now= "))

if temperature >30:
    print("Its hot outside!")
else:
    print("Its not too hot")

#Write an if-else statement that checks if a student passed or failed an exam. If the score is 50 or more, print "You passed!"; otherwise, print "You failed."

score=int(input("Please enter score you got= "))

if score >=50:
    print("You passed!")
else:
    print("You are cooked")


#Create an if-else statement that determines if a person is a teenager. If the age is between 13 and 19 (inclusive), print "You are a teenager!"; otherwise, print "You are not a teenager."
age=int(input("Please enter your age= "))
if age >=19:
    print("You are a teenager!")
elif age< 13:
    print("You are a child")
else:
    print("You are an adult")

