package ListaDeExercícios1;
import java.util.Scanner;


/*
 * 10. As maçãs custam R$ 0,30 cada se forem compradas menos
 * do que uma dúzia, e R$ 0,25 se forem compradas pelo menos
 * doze. Escreva um programa que leia o número de maçãs compradas,
 * calcule e escreva o valor total da compra.
 * 
 */

public class Ex10 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Quantidade de maçãs compradas:");
		var totalApples = sc.nextInt();
		
		if (0 <= totalApples && totalApples < 12) {
			var totalPrice = 0.3 * totalApples;
			System.out.format("Valor pago: %.2f reais", totalPrice);
		} else if (totalApples >= 12) {
			var totalPrice = 0.25 * totalApples;
			System.out.format("Valor pago: %.2f reais", totalPrice);
		}	
	}
}