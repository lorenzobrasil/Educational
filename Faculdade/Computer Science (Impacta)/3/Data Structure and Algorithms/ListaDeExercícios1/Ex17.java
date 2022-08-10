package ListaDeExercícios1;
import java.util.Scanner;

/*
 * Escreva um programa que lê o tamanho do lado de um quadrado
 * e imprime um quadrado daquele tamanho com asteriscos. Seu
 * programa deve funcionar para quadrados com lados de todos
 * os tamanhos entre 1 e 20. Para lado igual a 5:
*****
*****
*****
*****
*****
 */

public class Ex17 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Lados do quadrado: ");
		var l = sc.nextInt();
		
		for (var c = 0; c < l; c++) {
			System.out.println("*".repeat(l));
		}
	}
}
