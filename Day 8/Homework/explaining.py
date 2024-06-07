#explaining how this code works
num = 5

print(True and True) # True #we get true because this is "and" operator and it requires both of them to be True
print(True and False) # False #this is False because one of them is False
print(False and True) # False #this is False because one of them is False
print(False and False) # False #this is False because both of them is False

print(True or True) # True #this is "or" operator so it requires at least one of them to be True
print(True or False) # True #its True because one of them is True 
print(False or True) # True #its True because one of them is True
print(False or False) # False #its False because both are False

print("----------- AND -----------")

print(num >= 1 and num <= 10) # True  #Its True because number 5 is more than 1 and less than 10
print(num >= 1 and num <= 4) # False #its False because number 5 is less than 4
print(num > 5 and num <= 10) # False #its False because number 5 should be more than 5 (>) not equal or more (>=) 
print(num > 5 and num > 10) # False #its False because number 5 should be more than 5 (>) not equal or more (>=) 

print("----------- OR -----------")

print(num >= 1 or num <= 10) # True #this is or operator so it requires only one of them to be true, on here number 5 fits both requirements
print(num >= 1 or num <= 4) # True #its True because number 5 is more than 1
print(num > 5 or num <= 10) # True #its True because number 5 is less than 10
print(num > 5 or num > 10) # False #its False because number 5 is not more than 5 or 10