#სტრინგს ჩამოაჭერით ბოლო 3 სიმბოლო

string="luka"

print(string[1:4])

#დაბეჭდეთ სტრინგი შემობრუნებული ფორმით

revert=string[::-1]
print(revert)

#დაბეჭდეთ სტრინგი შემობრუნებული ფორმით და ამოიღეთ ყველა ლუწ ინდექსზე მყფი სიმბოლო

revert_even=revert[::2]
print(revert_even)

#ლისტიდან ამოირეთ ყველა კენტ ინდექსზ ყოფი ელემენტი და ჩაამატეთ ახალ სიაში. საბოლოოდ კი ორივე სია დაპრინტეთ

list=["a","b","c","d"]

new_list=list[::3]

print(list)
print(new_list)