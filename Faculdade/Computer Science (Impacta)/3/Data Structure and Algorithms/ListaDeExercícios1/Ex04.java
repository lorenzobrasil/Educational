package ListaDeExercícios1;
import java.util.Scanner;
/*
 * Escrever um algoritmo que lê: 

- a porcentagem do IPI a ser acrescido no valor das peças-o código da peça 1,
valor unitário da peça 1, quantidade de peças 1 - o código da peça 2,
valor unitário da peça 2, quantidade de peças 2

O algoritmo deve calcular o valor total a ser pago e apresentar o resultado.

Fórmula : (valor1*quant1 + valor2*quant2)*(IPI/100 + 1)

 */

public class Ex04 {
	public static void main(String[] args) {
		Scanner entry = new Scanner(System.in);
		
		double ipi, val_p1, val_p2;
		int id_p1, amt_p1, id_p2, amt_p2;
		
		System.out.println("Valor do IPI");
		ipi = entry.nextDouble();
		
		System.out.println("Código do item 1:");
		id_p1 = entry.nextInt();
		System.out.println("Valor unitário do item 1:");
		val_p1 = entry.nextDouble();
		System.out.println("Quantidade do item 1:");
		amt_p1 = entry.nextInt();
		
		System.out.println("Código do item 2:");
		id_p2 = entry.nextInt();
		System.out.println("Valor unitário do item 2:");
		val_p2 = entry.nextDouble();
		System.out.println("Quantidade do item 2");
		amt_p2 = entry.nextInt();
		
		System.out.println("Valor total: " + ((val_p1 * amt_p1) + (val_p2 * amt_p2))*(ipi/100 + 1));
		
	
	}
}
