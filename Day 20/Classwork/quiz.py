def Xeven_nums(numbers):
    even_numbers= []
    for num in numbers:
        if num %2 ==0:  #i used % here to check if there was anything left after number gets divided by 2
            even_numbers.append(num)
    return even_numbers

#nimushi

numbers=[1,2,3,4,5]
even_numbers = Xeven_nums(numbers)
print(even_numbers)