#making user input 3 numbers and checking if its possible to create a triangle
#to make this we have to remember rule of triangle- 2 sides combined should be more than third one

first=int(input())
second=int(input())
third=int(input())

if first + second > third and first + third > second and second + third > first:
    print("Its possible")
else:
    print("impossible")