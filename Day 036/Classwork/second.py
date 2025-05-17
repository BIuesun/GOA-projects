def remove_smallest(numbers):
    if not numbers:
        return numbers #ცარიელი თუ იქნება სია დავაბრუნოთ
    
    smallest_num = numbers.index(min(numbers)) #ვიპოვოთ ყველაზე პატარა რიცხვის ინდექსი

    return numbers[:smallest_num] + numbers[smallest_num + 1: ] #დავაბრუნოთ ახალი სია ყველაზე პატარა რიცხვის გარეშე სლაისით