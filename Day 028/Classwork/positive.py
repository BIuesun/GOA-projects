#ლისტში უნდა დავუმატოთ ყველა 0 ზე მეტი რიცხვი
def positive(numbers): #ფუნქციის შექმნა
    pos_sum=0  #სიის შექმნა
    for num in numbers: #იტერაცია
        if num>0: #თუ ფუნცია
            pos_sum += num #დამატება ლისტში

    return pos_sum    

# ნიმუში
numbers = [-10, 5, 0, 3, -2, 7]

result = positive(numbers)
print(result)
