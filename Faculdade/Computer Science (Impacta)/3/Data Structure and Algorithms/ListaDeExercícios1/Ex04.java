package ListaDeExerc�cios1;
import java.util.Scanner;
/*
 * Escrever um algoritmo que l�: 

- a porcentagem do IPI a ser acrescido no valor das pe�as-o c�digo da pe�a 1,
valor unit�rio da pe�a 1, quantidade de pe�as 1 - o c�digo da pe�a 2,
valor unit�rio da pe�a 2, quantidade de pe�as 2

O algoritmo deve calcular o valor total a ser pago e apresentar o resultado.

F�rmula : (valor1*quant1 + valor2*quant2)*(IPI/100 + 1)

 */

public class Ex04 {
	public static void main(String[] args) {
		Scanner entry = new Scanner(System.in);
		
		double ipi, val_p1, val_p2;
		int id_p1, amt_p1, id_p2, amt_p2;
		
		System.out.println("Valor do IPI");
		ipi = entry.nextDouble();
		
		System.out.println("C�digo do item 1:");
		id_p1 = entry.nextInt();
		System.out.println("Valor unit�rio do item 1:");
		val_p1 = entry.nextDouble();
		System.out.println("Quantidade do item 1:");
		amt_p1 = entry.nextInt();
		
		System.out.println("C�digo do item 2:");
		id_p2 = entry.nextInt();
		System.out.println("Valor unit�rio do item 2:");
		val_p2 = entry.nextDouble();
		System.out.println("Quantidade do item 2");
		amt_p2 = entry.nextInt();
		
		System.out.println("Valor total: " + ((val_p1 * amt_p1) + (val_p2 * amt_p2))*(ipi/100 + 1));
		
	
	}
}
