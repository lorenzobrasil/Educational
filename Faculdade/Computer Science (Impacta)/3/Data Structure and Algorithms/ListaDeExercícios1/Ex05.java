package ListaDeExerc�cios1;
import java.util.Scanner;


/*
 * 5. Crie um algoritmo que leia o valor do sal�rio m�nimo
 * e o valor do sal�rio de um usu�rio, calcule a quantidade
 * de sal�rios m�nimos esse usu�rio ganha e imprima o
 * resultado. (1SM=R$788,00)
 */

public class Ex05 {
	public static void main(String[] args) {
		Scanner entry = new Scanner(System.in);
		
		System.out.println("Valor do sal�rio m�nimo (refer�ncia: 788,00): ");
		var mw = entry.nextDouble();
		
		System.out.println("Valor do sal�rio:");
		var wage = entry.nextDouble();
		
		System.out.println("Sal�rio expresso em sal�rios m�nimos: "+ wage/mw);
		
		
	}

}
