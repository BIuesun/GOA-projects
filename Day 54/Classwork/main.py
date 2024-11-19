import math

def count_area(a=False, b=False, c=False):
    if a and b and not c:  # martkutxedi (2 ricxvi mxolod)
        return a * b
    elif a and not b and not c:  # wre (1 ricxvi mxolod)
        return math.pi * a * a
    elif a and b and c:  # samkutxedi (3 ricxvi mxolod)
        s = (a + b + c) / 2  # Semi-perimeter (ar vici ras nishnavs semi parameter googlidan heron formulaa)
        return math.sqrt(s * (s - a) * (s - b) * (s - c))  #kvadratuli pesvi da heronis formula
    else:
        return "Invalid input"