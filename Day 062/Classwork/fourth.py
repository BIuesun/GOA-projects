def pickin(arr1, arr2):
    for i in arr1[:]:  # davwerot : radgan rodesac moakldeba masivs indexebi aireva for loopisas
        if i not in arr2:
            arr1.remove(i)
