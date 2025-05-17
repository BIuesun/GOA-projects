# შექმენით lambda function რომელიც გამოიტანს მომხმარებლის მიერ შემოტანილი რიცხვის 2-ზე გაყოფისას მიღებულ ნასთს:
lam = lambda x: x % 2

# შექმენით set და შეინახეთ მასში სხვადასხვა მონაცემთა ტიპის მნიშვნელობა,  ბოლოში კი დაამატეთ True და 1, შემდეგ კი შეამოწმეთ გამოიტანს თუ არა ორივე მნიშვნელობას

my_set = {"random",534,True, 1}
print(my_set)

# შექმენით dictionary, გადაეცით მას სამი key: name, lastname და age, შემდეგ დაპრინტეთ მათი მნიშვნელობები

person = {
    "name": "Luka",
    "lastname": "Chumbashvili",
    "age": 16
}
print("Name:", person["name"])
print("Lastname:", person["lastname"])
print("Age:", person["age"])
