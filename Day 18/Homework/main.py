#doing 5 examples of append
#Adds an element at the end of the list

list=[1,2,3]
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)



#doing 5 examples of clear
#Removes all the elements from the list

list_2=[1,2,3,4,5]

list_2.clear()


list_3=[1,2,3,4,"apple"]

list_3.clear()


list_4=[1,2,]

list_4.clear()


list_5=[1,234]

list_5.clear()



#doing 5 examples of copy
#Returns a copy of the list

list_6=[1,2,3,4,5]
list_6_copy=list_6.copy()

list_7=[1,2,3,4,]
list_7_copy=list_6.copy()


list_8=["apple","lol","nice"]
list_8_copy=list_6.copy()


list_9=[1,2]
list_9_copy=list_6.copy()


list_10=[1,2,3,"wow",4,5]
list_10_copy=list_6.copy()


#doing 5 examples of count
#Returns the number of elements with the specified value

list_11=[1,2,3,4,5,3,6]
print(list_11.count(3))


list_12=[1,2,3,4,5,3,6]
print(list_12.count(4))



list_13=[1,2,3,4,5,3,6]
print(list_13.count(5))


list_14=[1,2,3,4,5,3,"wow",6]
print(list_14.count("wow"))


list_15=[1,2,3,4,5,3,6]
print(list_15.count(1))


#doing 1 examples of extend
#Add the elements of a list (or any iterable), to the end of the current list

list_16=[1,2,3,4]
list_17=[5,6,7,8,9,10]

list_16.extend(list_17)

#doing 5 examples of index
#Returns the index of the first element with the specified value

list_18=[1,2,3,4,5,6,7,8,9,10]

print(list_18.index(3))
print(list_18.index(4))
print(list_18.index(5))
print(list_18.index(1))
print(list_18.index(2))

#doing 5 examples of insert
#Adds an element at the specified position

list_19=[1,2,3,4,5,6,7,8,9,10]

list_19.insert(3,5)
list_19.insert(4,6)
list_19.insert(5,7)
list_19.insert(6,8)
list_19.insert(7,9)

#doing 5 examples of remove pop
#Removes the element at the specified position
list_20=[1,2,3,4,5,6,7,8,9,10]

list_20.pop(3)
list_20.pop(4)
list_20.pop(5)
list_20.pop(6)
list_20.pop(2)


#doing 5 examples of remove
#Removes the item with the specified value

list_21=[1,2,3,4,5,6,7,8,9,10]

list_21.remove(1)
list_21.remove(2)
list_21.remove(3)
list_21.remove(4)
list_21.remove(5)

