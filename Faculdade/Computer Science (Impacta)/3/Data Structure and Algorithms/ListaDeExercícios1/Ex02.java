package ListaDeExercícios1;

/*
 * Fazer um programa que imprima a média aritmética dos
 * números 8,9 e 7. A média dos números 4, 5 e 6. A soma
 * das duas médias. A média das médias. 
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
