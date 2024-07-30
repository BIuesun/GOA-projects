def inter_Bloat(fulllist):
    inter_nums = []
    for num in fulllist:
        if num == int(num):
            inter_nums.append(num)
    return inter_nums

fulllist = [1, 2, 3.10, 4, 4.5, 5]
print(inter_Bloat(fulllist))
