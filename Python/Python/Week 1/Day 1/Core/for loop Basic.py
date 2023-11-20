## 1) Basic
# for i in range(0,150):
#     print(i)

#2)Mutiple of five
# for i in range(5,1000):
#     if i%5==0:
#         print(i)

#3) Counting  ,The Dojo Way
res="coding"
for i in range(1,100):
    if i%5==0 and i%10!=0:
        print("Coding")
    if i%10==0 and i%5==0:
        print("Coding Dojo")
    else:
        print(i)
        
#4) Whoaa .That Sucker's Huge
sum=0
for i in range(0,500000):
    if i%2!=0:
        sum+=1
print(f"The Last Sum of all of the odd Number is {sum}")


#5) Countdown By Fours
for i in range(2018,0,-4):
    if i<0:
        break
    else:
        print(i)
        
#6)Flexible Counter
lowNum=2
highNum=9
mult=3
for i in range(lowNum,highNum+1):
    if(i%mult==0):
        print(i)

