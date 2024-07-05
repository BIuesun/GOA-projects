#Remove and print the last element of a list of integers using pop

nums=[1,2,3,4,5]

nums.pop()
print(nums[3])


#Remove and return the first element of a list of strings.

items=["apple","pear","banana","peach"]

items.pop(0)
print(items[0])

#Pop the element at index 2 from a list of characters

char=["sand","air","earth","fire"]

char.pop(2)
print(char[2])

#Remove and return the last element of a list

cars=["Ferrari","BMW","Mercedes","Lexus"]

cars.pop()
cars.append("Lexus")
print(cars[3])