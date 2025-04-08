# 1.lambda function-ის დახამრებით შექმენით ფუნქცია რომელიც ესალმება მომხმარებელს, მაგალიტად თუ მომხარებელმა შემოიტანა მნიშვნელობა Name, დაპრინტეთ Hello Name!

greet = lambda name: print(f"Hello {name}!")
user_input = input("Enter your name: ")
greet(user_input)

# 2.Map-ის გამოყენებით list-ში მოცემულ ყველა მნიშვნელობას დაუმატეთ თავისი თავი (გაამრავლეთ ორზე) და გამოიტანეთ მიღებული მნიშვნელობები list-ის სახით
numbers = [1, 2, 3, 4, 5]

doubled = list(map(lambda x: x * 2, numbers))

print(doubled)


# 3.Filter-ის გამოყენებით list-ში შეინახეთ მხოლოდ ისეთი მნიშველობები მოცემული list-იდან რომელიც უნაშთოდ იყოფა 5-ზე (5-ის ჯერადია):listn = [1,3,5,6,7,10,15,21,25.5,30,101,105]

listn = [1, 3, 5, 6, 7, 10, 15, 21, 25.5, 30, 101, 105]

filtered = list(filter(lambda x: x % 5 == 0, listn))

print(filtered)

# 4.შექმენით Set მოცემული მნიშვნელობებით: setn = {"Goa", "Novatori", "Stem", 123, True, 1, False, 0}
setn = {"Goa", "Novatori", "Stem", 123, True, 1, False, 0}
print(setn)
shedegi = {'Goa', 'Novatori', 'Stem', 0, 1, 123}
# True = 1 da False = 0 radgan eseni ukve arian siashi setshi meored ar gameordeba