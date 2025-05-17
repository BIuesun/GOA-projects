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
