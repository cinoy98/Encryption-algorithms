#include <stdio.h>
#include <math.h>
int gcd(int a, int h)
{
    int temp;
    while (1)
    {
        temp = a % h;
        if (temp == 0)
            return h;
        a = h;
        h = temp;
    }
}
int modInverse(int a, int m)
{
    for (int x = 1; x < m; x++)
        if (((a % m) * (x % m)) % m == 1)
            return x;
}
int main()
{
    double p, q;
    printf("Enter the value of p: ");
    scanf("%lf", &p);
    printf("Enter the value of q: ");
    scanf("%lf", &q);
    double n = p * q;
    double e = 13;
    double phi = (p - 1) * (q - 1);
    printf("phi = %lf", phi);
    while (e < phi)
    {
        if (gcd(e, phi) == 1)
            break;
        else
            e++;
    }
    double d;
    d = modInverse(e, phi);
    printf("\n d = %lf", d);
    double M;
    printf("\nEnter the message : ");
    scanf("%lf", &M);
    // Signature is created by User say Ann
    double S = pow(M, d);
    S = fmod(S, n);
    double M1 = pow(S, e);
    M1 = fmod(M1, n);
    if (M == M1)
    {
        printf(" As M = M1, Accept the message sent by Ann");
    }
    else
    {
        printf("As M not equal to M1, Do not accept the message sent by Ann ");
    }
}