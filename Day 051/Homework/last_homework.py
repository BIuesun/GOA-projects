def diagonal_sums(matrix):
    n = len(matrix)  # matricis zoma (rows/columns)
    main_diagonal_sum = 0
    secondary_diagonal_sum = 0

    # iteracia
    for i in range(n):
        main_diagonal_sum += matrix[i][i]  # pirveli diagonalis jami
        secondary_diagonal_sum += matrix[i][n - i - 1]  # meore diagonalis jami

    return main_diagonal_sum, secondary_diagonal_sum

# /////////////////////////////////////////////////

def matrix_sum(matrix1, matrix2):
    # gavigot ramdeni rigia da sveti
    rows = len(matrix1)
    cols = len(matrix1[0])

    # migebuli pasuxis shesanaxi listi
    result = []

    # iteracia yovel xazze
    for i in range(rows):
        # axali row
        new_row = []

        # iteracia svetebze
        for j in range(cols):
            # davamatot elementebi (i, j) orive posiciaze
            element_sum = matrix1[i][j] + matrix2[i][j]
            
            # davamatot shedegi axal siashi
            new_row.append(element_sum)

        # davamatot axali sia shedegshi
        result.append(new_row)

    return result
