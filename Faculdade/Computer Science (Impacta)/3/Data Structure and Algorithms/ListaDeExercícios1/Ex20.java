package ListaDeExerc�cios1;
import java.util.Scanner;

/*
 * Fa�a um programa que pe�a ao usu�rio um n�mero entre
 * 12 e 20. Se a pessoa digitar um n�mero diferente,
 * mostrar a mensagem "entrada inv�lida" e solicitar o
 * n�mero novamente. Se digitar correto mostrar o n�mero
 * digitado
 * 
 */
public class Ex20 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n;
		
		System.out.println("Digite um n�mero no intervalo [12, 20]");
		n = sc.nextInt();
		if ((n < 12) | (n > 20)) {
			do {
				System.out.println("Entrada inv�lida. Digite um n�mero maior ou igual a 12 e menor ou igual a 20");
				n = sc.nextInt();
			} while ((n < 12) | (n > 20));
		}
		System.out.format("N�mero inserido: %d", n);
	}
	

}
