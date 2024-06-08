package ListaDeExercícios1;
import java.util.Scanner;

/*
 * Tendo como entrada a altura e o sexo (codificado
 * da seguinte forma: 1:feminino 2:masculino) de uma
 * pessoa, construa um programa que calcule e imprima
 * seu peso ideal, utilizando as seguintes Fórmulas:
 * - para homens: (72.7 * Altura) – 58 - para mulheres:
 * (62.1 * Altura) – 44.7
 */

public class Ex12 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		
		System.out.println("Altura: ");
		var height = sc.nextDouble();
		
		System.out.println("Sexo: ");
		var gender = sc.nextInt();
		
		if (gender == 1) {
			System.out.format("Peso ideal: %.2f", (61.1*height - 44.7));
		} else {
			System.out.format("Peso ideal: %.2f", (72.7*height - 58));
		}
	}
}
