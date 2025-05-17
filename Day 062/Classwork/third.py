def pickin(arr1, arr2):
    result = []
    for i in arr1:
        if i in arr2:
            result.append(i)
    return result
