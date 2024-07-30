def evennums(list):
    even_list = []
    for num in list:
        if num % 2 == 0:
            even_list.append(num)
    return even_list

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(evennums(numbers))
