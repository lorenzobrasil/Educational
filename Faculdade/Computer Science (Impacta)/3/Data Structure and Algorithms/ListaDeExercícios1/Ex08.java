package ListaDeExerc�cios1;
import java.util.Scanner;

/*
 * 8. Escreva um programa para ler o ano de nascimento de
 * uma pessoa e escrever uma mensagem que diga se ela
 * poder� ou n�o votar este ano (n�o � necess�rio considerar
 * o m�s em que ela nasceu).
 * 
 */
public class Ex08 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Ano de nascimento: ");
		var year = sc.nextInt();
		if ((2022 - year) >= 16) {
			System.out.println("Pode votar esse ano.");
		} else {
			System.out.println("N�o pode votar esse ano.");
		}
		
	}

}
