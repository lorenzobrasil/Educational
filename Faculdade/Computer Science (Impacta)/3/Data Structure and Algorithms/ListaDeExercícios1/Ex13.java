package ListaDeExercícios1;
import java.util.Scanner;
import java.lang.Math;


/*
 * 13. Escreva um programa para ler o número de lados de
 * um polígono regular e a medida do lado (em cm). Calcular
 * e imprimir o seguinte: − Se o número de lados for igual a
 * 3 escrever TRIÂNGULO e o valor da área − Se o número de
 * lados for igual a 4 escrever QUADRADO e o valor da sua área.
 * − Se o número de lados for igual a 5 escrever PENTÁGONO.
 * 
 */

public class Ex13 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("N lados: ");
		var sides = sc.nextInt();
		System.out.println("Comprimento de cada lado: ");
		var length = sc.nextInt();
		
		if (sides == 3) {
			System.out.println("Triangulo");
			System.out.println((sides * (length * Math.sqrt(3)/3)/2));
		} else if (sides == 4) {
			System.out.println("Quadrado");
			System.out.println((sides * length));
		} else if (sides == 5) {
			System.out.println("Pentagono");
		}
	}
}
