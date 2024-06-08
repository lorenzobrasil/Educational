package ListaDeExercícios1;
import java.util.Scanner;

/*
 * 14. Acrescente as seguintes mensagens à solução do
 * exercício anterior conforme o caso. − Caso o número
 * de lados seja inferior a 3 escrever NÃO É UM POLÍGONO.
 * − Caso o número de lados seja superior a 5 escrever
 * POLÍGONO NÃO IDENTIFICADO.
 * 
 */

public class Ex14 {
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
		} else if (sides < 3) {
			System.out.println("Não é um polígono");
		} else {
			System.out.println("Polígono não identificado");
		}
	}
}
