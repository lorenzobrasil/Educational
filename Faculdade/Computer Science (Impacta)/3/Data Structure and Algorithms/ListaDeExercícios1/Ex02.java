package ListaDeExerc�cios1;

/*
 * Fazer um programa que imprima a m�dia aritm�tica dos
 * n�meros 8,9 e 7. A m�dia dos n�meros 4, 5 e 6. A soma
 * das duas m�dias. A m�dia das m�dias. 
 */

public class Ex02 {
	public static void main(String[] args) {
		var m1 = (8 + 9 + 7)/3;
		var m2 = (4 + 5 + 6)/3;
		System.out.println(m1);
		System.out.println(m2);
		System.out.println(m1 + m2);
		System.out.println((m1 + m2) / 2);
	}
}
