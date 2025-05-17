def solve(s):
    count_u = 0
    count_l = 0
    
    for char in s:
        if char.isupper():
            count_u += 1
        else:
            count_l += 1
    
    if count_u <= count_l:
        return s.lower()
    else:
        return s.upper()