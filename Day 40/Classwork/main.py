def number(lines):
    result = []
    
    for index in range(len(lines)):
        word = str(index + 1) + ": " + lines[index]
        result.append(word)
    
    return result