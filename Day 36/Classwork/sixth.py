def capitals(word):
    upperlets = []
    
    # იტერაცია სტრინგზე ინდექსით
    for i in range(len(word)):
        # შევამოწმოთ თუ რიცხვი ინდექსზე არის დიდი (capital)
        if word[i].isupper():
            # დავამატოთ სიაში
            upperlets.append(i)
    
    # დავაბრუნოთ სია
    return upperlets