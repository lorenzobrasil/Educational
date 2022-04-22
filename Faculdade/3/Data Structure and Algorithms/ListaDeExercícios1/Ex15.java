package ListaDeExercícios1;
import java.util.Scanner;

/* 15. Escreva um programa para ler 3 valores inteiros
 * e escrever o maior deles. Considere que o usuário
 * não informará valores iguais.
 *
 */

public class Ex15 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a, b, c;
		
		System.out.println("Informe o valor de a: ");
		a = sc.nextInt();
		
		System.out.println("Informe o valor de b (b != a): ");
		b = sc.nextInt();
		
		while ((b == a)) {
			System.out.println("Valor inválido para b. Digite um valor válido para b (b != a): ");
			b = sc.nextInt();
		}
		
		System.out.println("Informe o valor de c ((c != a) && (c != b)): ");
		c = sc.nextInt();
		
		while ((c == a) | (c == b)) {
			System.out.println("Valor inválido para c. Digite um valor válido para b ((b != a) && (b != c)): ");
			c = sc.nextInt();
		}
		
		if ((a > b) && (a > c)) {
			System.out.println(a);
		} else if ((b > a) && (b > c)) {
			System.out.println(b);
		} else {
			System.out.println(c);
		}
	}
}
