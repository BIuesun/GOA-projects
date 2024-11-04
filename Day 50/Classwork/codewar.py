def smaller(arr):
    result = []  #shevqmnat result
    
    #bolos garda yvela elements gadavuarot
    for i in range(len(arr)):
        count = 0  #mcire elementebis datvla
        #Nested loop rom davitvalot marjvnisken datvla
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[i]:  # tu marjvena mcirea
                count += 1  # davumatot 1
        result.append(count)  #shevinaxot resultshi


    return result  #davabrunot