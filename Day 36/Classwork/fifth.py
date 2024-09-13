def capitals(word):
    indexes = []
    
    for index in range(len(word)):
        if word[index].isupper():
            indexes.append(index)
    
    return indexes