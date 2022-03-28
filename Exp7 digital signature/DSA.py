import math

def gcd(a,h):
    while(1):
        temp = a % h
        if(temp==0):
            return h
        a,h = h,temp

def modInverse(a,m):
    for i in range(1,m):
        if(((a%m)*(i%m))%m==1):
            return i

def main():
    p = int(input("Enter the value of P: "))
    q = int(input("Enter the value of Q: "))

    n = p*q
    e = 13
    phi = (p-1)*(q-1)
    print("phi = ",phi)
    while(e<phi):
        if(gcd(e,phi)==1):
            break
        else:
            e+=1
    d = modInverse(e,phi)
    print("d = ",d)

    M = int(input("Enter the Message: "))

    S = pow(M,d)
    S = math.fmod(S,n)
    M1 = pow(S,e)
    M1 = math.fmod(M1,n)
    if(M==M1):
        print("Message is same")
    else:
        print("Message is Not same")

main()