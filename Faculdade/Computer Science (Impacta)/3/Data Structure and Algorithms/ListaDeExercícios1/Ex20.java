package ListaDeExercícios1;
import java.util.Scanner;

/*
 * Faça um programa que peça ao usuário um número entre
 * 12 e 20. Se a pessoa digitar um número diferente,
 * mostrar a mensagem "entrada inválida" e solicitar o
 * número novamente. Se digitar correto mostrar o número
 * digitado
 * 
 */
public class Ex20 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n;
		
		System.out.println("Digite um número no intervalo [12, 20]");
		n = sc.nextInt();
		if ((n < 12) | (n > 20)) {
			do {
				System.out.println("Entrada inválida. Digite um número maior ou igual a 12 e menor ou igual a 20");
				n = sc.nextInt();
			} while ((n < 12) | (n > 20));
		}
		System.out.format("Número inserido: %d", n);
	}
	

}
