#1
def Countdown(element):
    res=[]
    for i in range(element,0,-1):
        res.append(i)
    return res
print(Countdown(int(input("Type Your Number For Countdown :"))))

#2
def Print_and_Return(list):
    print(list[0])
    return list[1]
#3
def First_Plus_Length(list):
    first_value=list[0]+len(list)
    return first_value
#4
def Values_Greater_Than_Second(list):
    second=list[1]
    newarr=[]
    if len(list)==1 or len(list)==0:
        return False
    else:
        for i in range(0,len(list)):
            if second<list[i]:
                newarr.append(list[i])
    return newarr

#5 
def This_Length_That_Value(start,value):
    newarr=[]
    for i in range(0,start):
            newarr.append(int(value))
    return newarr
