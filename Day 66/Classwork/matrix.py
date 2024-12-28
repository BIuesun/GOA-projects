def even(matrix):

    even_elements = [] 

    for row in matrix:
        for num in row:
            if num % 2 == 0:
                even_elements.append(num) 

    return even_elements
