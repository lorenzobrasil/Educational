package ListaDeExerc�cios1;
import java.util.Scanner;

/*
 * 7. Escreva um programa para ler 2 valores (considere que
 * n�o ser�o informados valores iguais) e escrever o maior
 * deles. 
 */

public class Ex07 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("a: ");
		var a = scanner.nextInt();
		
		System.out.println("b: ");
		var b = scanner.nextInt();
		
		if (a > b) {
			System.out.println(a);
		} else {
			System.out.println(b);
		}
		
	}
}
