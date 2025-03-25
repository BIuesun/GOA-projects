# 1.
def slicing(str,index):
    return str[index:]

user_str = input("please enter text: ")
user_index = int(input("please enter number: "))

print(slicing(user_str,user_index))

# 2.
x = "Hello World"

print(x[2:6:1])

# pirveli argumentis chatvlit iwyeba amowra
# meore argumentamde cherdeba amowra
# ramdenit gadavides "step" defaultze / 1 \


# 4.
def reverse(text):
    return text[::-1]

print(reverse("hello"))