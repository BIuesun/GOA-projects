#.upper() ვიყენებთ რათა დააბრუნოს ყველა ასო ტექსტში დიდი ასო
#.lower() ვიყენებთ რათა დააბრუნოს ყველა ასო ტექსტში პატარა ასო
# .capitalize() ვიყენებთ რათა სიტყვის პირველი ასო გახდეს დიდი

upper = "upper"
print(upper.upper())

lower = "LoWeR"
print(lower.lower())

cap = "capitalize"
print(cap.capitalize())


#.append ვიყენებთ რათა დავამატოთ სიაში რაიმე სიტყვა
#.pop ვიყენებთ რათა მოვაშოროთ რამე სიტყვა სიიდან
#.instert ვიყენებთ რათა რაიმე კონკრეტულ ადგილზე დავამატოთ სიტყვა

list=[1,2,3,5,"wow"]

list.append(6)
list.append("no")
list.append(7)

list.pop(4)
list.pop(5)
list.pop(1)

list.insert(1,"wow1")
list.insert(3,5)
list.insert(4,"nah")
print(list)