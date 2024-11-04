def row_and_column_sums(matrix):
    #gavigot raodenoma columns da rows
    num_rows = len(matrix)
    num_cols = len(matrix[0])

    # carieli listebi shesanaxad
    row_sums = []
    column_sums = [0] * num_cols  # yvela columns jami 0

    # gamotvla yvela row's jamis
    for row in matrix:
        row_sum = sum(row)  # yvela rows jami
        row_sums.append(row_sum)  # damatema 

    # gamotvla yvela colmun's jamis
    for j in range(num_cols):
        col_sum = 0 
        for i in range(num_rows):
            col_sum += matrix[i][j] 
        column_sums[j] = col_sum 

    return row_sums, column_sums