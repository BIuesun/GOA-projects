def diagonal_sums(matrix):
    n = len(matrix)  # matricis zoma (rows/columns)
    main_diagonal_sum = 0
    secondary_diagonal_sum = 0

    # iteracia
    for i in range(n):
        main_diagonal_sum += matrix[i][i]  # pirveli diagonalis jami
        secondary_diagonal_sum += matrix[i][n - i - 1]  # meore diagonalis jami

    return main_diagonal_sum, secondary_diagonal_sum
