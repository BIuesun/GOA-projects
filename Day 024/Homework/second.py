#list has numbers if its even multiply it by itself and then add to new list,odd numbers has to get multiplied by 2 and added to same new list

def whole(whole_nums):
    new_list=[]
    for num in whole_nums:
        if num %2 ==0:
          new_list.append(num * num)
        else:
           new_list.append(num * 2)
    return new_list

whole_nums=[1,2,3,4,5,6,7,8,9]
print(whole(whole_nums))