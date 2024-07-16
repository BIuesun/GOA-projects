def add(number1,number2,operation):
    Result=0
    if operation =="+":
        Result= number1 + number2
    elif operation =="-":
        Result= number1 - number2
    elif operation =="*":
        Result= number1 * number2
    elif operation =="/":
        Result= number1 / number2
    else:
        Result("Not valid")
    return Result

print(add(1,2,"-"))
print(add(3,4,"/"))