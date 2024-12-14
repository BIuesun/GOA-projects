def unique_elements(arr1, arr2):
    # მოძებნე ელემენტები arr1-ში, რომლებიც არ არის arr2-ში
    unique_in_arr1 = [x for x in arr1 if x not in arr2]
    # მოძებნე ელემენტები arr2-ში, რომლებიც არ არის arr1-ში
    unique_in_arr2 = [x for x in arr2 if x not in arr1]
    # გაერთიანება
    return unique_in_arr1 + unique_in_arr2
