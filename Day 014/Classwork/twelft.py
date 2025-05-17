
#making user input password until its correct


correct="WowSoSecret"
guess=""

while guess !=correct:
    guess = input("Enter the password: ")

if guess == guess:
        print("Congratulations! You guessed the correct password.")
else:
        print("Incorrect password. Please try again.")
