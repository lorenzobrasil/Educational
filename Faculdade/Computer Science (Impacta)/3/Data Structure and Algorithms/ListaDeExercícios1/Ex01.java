package ListaDeExerc�cios1;
import java.util.Scanner;

/*
 * Fa�a um algoritmo que leia a idade de uma pessoa expressa em anos,
 * meses e dias e mostre-a expressa em dias. Leve em considera��o o
 * ano com 365 dias e o m�s com 30. (Ex: 3 anos, 2 meses e 15 dias
 * = 1170 dias.) 
 */


public class Ex01 {
	public static void main(String[] args) {
		Scanner entry = new Scanner(System.in);
		int years, months, days;
		
		System.out.println("Quantidade de anos: ");
		years = entry.nextInt();

		System.out.println("Quantidade de meses: ");
		months = entry.nextInt();
		
		System.out.println("Quantidade de dias: ");
		days = entry.nextInt();
		
		System.out.println((years * 365) + (months * 30) + days + " Dias");
		
	}

}
