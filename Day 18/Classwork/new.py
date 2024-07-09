#შექმენით 2 სახელების სია და extend მეთოდის დახმარებით პირველი სია გააერთიანეთ მეორე სიასთან

first=["Luka","Saba","Gela"]

second=["Lamzira","Guranduxti","Evraptine"]

first.extend(second)

print(first)

#შექმენით სახელებლის სია სადაც ახალ მნიშვნელობას ჩასვამთ იმ იდექსზე რომელზეც გსურთ გამოიყენეთ insert მეთოდი

name1=["Alex","Martin","Solomon"]

name1.extend(first)
print(name1)

#insert

name1.insert(2,"gio")