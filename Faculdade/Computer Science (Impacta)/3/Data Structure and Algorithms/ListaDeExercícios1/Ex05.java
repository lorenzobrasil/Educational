package ListaDeExercícios1;
import java.util.Scanner;


/*
 * 5. Crie um algoritmo que leia o valor do salário mínimo
 * e o valor do salário de um usuário, calcule a quantidade
 * de salários mínimos esse usuário ganha e imprima o
 * resultado. (1SM=R$788,00)
 */

public class Ex05 {
	public static void main(String[] args) {
		Scanner entry = new Scanner(System.in);
		
		System.out.println("Valor do salário mínimo (referência: 788,00): ");
		var mw = entry.nextDouble();
		
		System.out.println("Valor do salário:");
		var wage = entry.nextDouble();
		
		System.out.println("Salário expresso em salários mínimos: "+ wage/mw);
		
		
	}

}
