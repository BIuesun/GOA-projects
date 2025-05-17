def pos(row,col):
    return f"row: {row} col: {col}"



def function(num1,num2):
    return num1 * num2


def generate_pairs(n):
    pairs = []
    for a in range(1, n + 1):
        for b in range(1, n + 1):
            if b > a:
                pairs.append((a, b))
    return pairs