def manual_filter(arr, elements_to_remove):
    return [
        item 
        for item in arr 
        if item not in elements_to_remove
    ]
