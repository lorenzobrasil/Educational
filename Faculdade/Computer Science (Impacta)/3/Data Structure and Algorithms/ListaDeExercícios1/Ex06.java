package ListaDeExerc�cios1;
import java.util.Scanner;



/*
 * Desenvolva um algoritmo em Java que leia um n�mero
 * inteiro e imprima o seu antecessor e seu sucessor. 
 */


public class Ex06 {
	public static void main(String[] args) {
		Scanner entry = new Scanner(System.in);
		
		System.out.println("Digite um n�mero: ");
		var num = entry.nextInt();
		
		System.out.format("Antecessor de %d � %d e o sucessor � %d", num, num-1, num+1);
	}

}
