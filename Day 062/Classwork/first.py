def unique_elements(arr1, arr2):
    # მოძებნე ელემენტები arr1-ში, რომლებიც არ არის arr2-ში
    unique_in_arr1 = []
    for i in arr1:
        if i not in arr2:
            unique_in_arr1.append(i)

    # მოძებნე ელემენტები arr2-ში, რომლებიც არ არის arr1-ში
    unique_in_arr2 = []
    for i in arr2:
        if i not in arr1:
            unique_in_arr2.append(i)

    # გაერთიანება და შედეგის დაბრუნება
    result = unique_in_arr1 + unique_in_arr2
    return result