#at first i create def block which has 3 variables number1,number2 and operation 
#then using if,elif,else i made proggram check what operation it is doing and then complete it :so if i say add(1,2,"-") first number is 1 ,second 2 and operation is "-" so it does 1-2 operation
def add(number1,number2,operation):
    if operation =="+":
        print(number1 + number2)
    elif operation =="-":
        print(number1 - number2)
    elif operation =="*":
        print(number1 * number2)
    elif operation =="/":
        print(number1 / number2)
    else:
        print("Not valid")

add(1,2,"-")
add(3,4,"/")