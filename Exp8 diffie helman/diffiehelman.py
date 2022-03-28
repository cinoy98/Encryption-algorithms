
Prime = int(input("Enter the prime number p  :"))
PrimitiveRoot = int(input("Enter the primitve root for previous prime number G :"))
AlicePrivate = int(input("Enter the chosen private key Alice :"))
AlicePublic = pow(PrimitiveRoot, AlicePrivate) % Prime
BobPrivate = int(input("Enter the chosen private key Bob :"))
BobPublic = pow(PrimitiveRoot,BobPrivate) % Prime
AliceSecret = pow (BobPublic,AlicePrivate) % Prime
BobSecret = pow(AlicePublic,BobPrivate) % Prime
print("Secret key for alice is :", AliceSecret) 
print("Secret Key for bob is :", BobSecret)
