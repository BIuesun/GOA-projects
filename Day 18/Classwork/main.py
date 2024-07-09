

list=[1,2,3,4,5,6,7,8]

#Extract the first five elements from a list.

without_5=list[:5]

print(without_5)

#Extract the last three elements from a list.

last_3=list[3:]
print(last_3)

#Get every second element from a list.

every_second=list[::2]

print(every_second)

#Extract a sublist from the third to the seventh element in a list

sub=list[3:7]
print(sub)

# Get the first half of a list.

half=list[0:4]
print(half)

#Get the second half of a list.

second_half=list[4:9]
print(second_half)

#Extract a sublist excluding the first and the last element.

excluding=list[1:7]
print(excluding)

#Extract elements from the second to the second last element, stepping by two.

excluding_2=list[1:7:2]
print(excluding_2)