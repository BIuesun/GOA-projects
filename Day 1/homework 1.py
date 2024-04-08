from turtle import*

#making house
#presented by Luka Chumbashvili

#first step making square
speed(5)
width(5)

color("blue")
begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()
#end of square

#making door


forward(70)
color("gray")
begin_fill()
left(90)
forward(100)

right(90)
forward(60)

right(90)
forward(100)
end_fill()

#end of door
#making roof

penup()
goto(200, 200)
pendown()

color("orange")
begin_fill()
right(150)
forward(200)

left(120)
forward(200)
end_fill()

#end of roof
#start of windows

penup()
goto(10,110)
pendown()

right(150)
forward(30)

right(90)
forward(30)

right(90)
forward(30)

right(90)
forward(30)

right(90)
forward(15)

right(90)
forward(30)

right(90)
forward(15)

right(90)
forward(15)

right(90)
forward(30)

penup()
goto(190, 110)
pendown()

forward(30)

left(90)
forward(30)

left(90)
forward(30)

left(90)
forward(30)

left(90)
forward(15)

left(90)
forward(30)

right(90)
forward(15)

right(90)
forward(15)

right(90)
forward(30)





exitonclick()