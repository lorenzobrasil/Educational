package ListaDeExerc�cios1;
import java.util.Scanner;

/*
 * 9. Escreva um programa que verifique a validade
 * de uma senha fornecida pelo usu�rio. A senha v�lida
 * � o n�mero 1234. Devem ser impressas as seguintes mensagens:
 * ACESSO PERMITIDO caso a senha seja v�lida. ACESSO NEGADO caso
 * a senha seja inv�lida.
 */

public class Ex09 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Digite a senha: ");
		var psw = sc.next();
		
		if (String.valueOf(psw).equals("1234")) {
			System.out.println("ACESSO PERMITIDO");
		} else {
			System.out.println("ACESSO NEGADO");
		}
		
	}

}
