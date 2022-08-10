package ListaDeExerc�cios1;
import java.util.Scanner;
import java.util.ArrayList;


/*
 * 19. Utilizando a estrutura de repeti��o for, fa�a um programa em
 * Java que receba 10 n�meros e conte quantos deles est�o no intervalo
 * [10,20] e quantos deles est�o fora do intervalo, escrevendo estas
 * informa��es
 * 
 */

public class Ex19 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		ArrayList<Integer> in = new ArrayList<Integer>();
		ArrayList<Integer> out = new ArrayList<Integer>();
		
		int counter=0, number;
		
		while (counter < 10) {
			System.out.println("Pr�ximo n�mero da sequ�ncia: ");
			number = sc.nextInt();
			
			if ((10 <= number) && (number <= 20)) {
				in.add(number);
				
			} else {
				out.add(number);
			}
			counter++;
		}
		
		System.out.format("Dentro da sequ�ncia: %d\n",in.size());
		System.out.format("Fora da sequ�ncia: %d", out.size());
		
	}

}
