package ListaDeExerc�cios1;
import java.util.ArrayList;
import java.util.Scanner;

/*
 * Ler 10 n�meros e imprimir quantos s�o pares e quantos s�o �mpares.
 */

public class Ex18 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		ArrayList<Integer> even = new ArrayList<Integer>();
		ArrayList<Integer> odd = new ArrayList<Integer>();
		int e=0, o=0, n;
		
		while ((e + o) < 10) {
			System.out.format("Digite o pr�ximo n�mero da sequ�ncia (restam %d): ",(10-(e+o)));
			n = sc.nextInt();
			if (n % 2 == 0) {
				even.add(n);
				e++;
			} else if (n % 2 == 1) {
				odd.add(n);
				o++;
			}
		}
		System.out.format("Pares: %s\n", even.toString());
		System.out.format("�mpares: %s", odd.toString());
	}
}