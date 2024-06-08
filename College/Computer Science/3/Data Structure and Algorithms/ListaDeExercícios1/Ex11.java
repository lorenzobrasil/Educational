package ListaDeExercícios1;
import java.util.Scanner;



/*
 * Escreva um programa para ler 3 valores inteiros (considere
 * que não serão lidos valores iguais) e escrevê-los em ordem
 * crescente.
 */

public class Ex11 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Digite um valor de a: ");
		var a = sc.nextInt();
		System.out.println("Digite um valor de b (b != a): ");
		var b = sc.nextInt();
		while (a == b) {
			System.out.println("Valor inválido. Digite um valor diferente: ");
			b = sc.nextInt();
		}
		System.out.println("Digite um valor de c(c != b && c != a): ");
		var c = sc.nextInt();
		while ((c == b) | (c == a)) {
			System.out.println("Valor inválido. Digite um valor diferente: ");
			c = sc.nextInt();
		}
		if ((a < b) && (a < c)) {
			System.out.println(a);
			if (b < c) {
				System.out.println(b);
				System.out.println(c);
			} else {
				System.out.println(c);
				System.out.println(b);
			}
		} else if ((b < a) && (b < c)) {
			System.out.println(b);
			if (a < c) {
				System.out.println(a);
				System.out.println(c);
			}
		} else {
			System.out.println(c);
			System.out.println(a);
		}
	}
}
