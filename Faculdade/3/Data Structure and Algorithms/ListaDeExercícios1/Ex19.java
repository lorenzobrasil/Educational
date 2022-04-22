package ListaDeExercícios1;
import java.util.Scanner;
import java.util.ArrayList;


/*
 * 19. Utilizando a estrutura de repetição for, faça um programa em
 * Java que receba 10 números e conte quantos deles estão no intervalo
 * [10,20] e quantos deles estão fora do intervalo, escrevendo estas
 * informações
 * 
 */

public class Ex19 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		ArrayList<Integer> in = new ArrayList<Integer>();
		ArrayList<Integer> out = new ArrayList<Integer>();
		
		int counter=0, number;
		
		while (counter < 10) {
			System.out.println("Próximo número da sequência: ");
			number = sc.nextInt();
			
			if ((10 <= number) && (number <= 20)) {
				in.add(number);
				
			} else {
				out.add(number);
			}
			counter++;
		}
		
		System.out.format("Dentro da sequência: %d\n",in.size());
		System.out.format("Fora da sequência: %d", out.size());
		
	}

}
