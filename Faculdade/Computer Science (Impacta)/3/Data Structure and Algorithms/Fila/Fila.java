package ac1;

import java.util.Scanner;

public class Fila {
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		var choice = 0;
		refNoB aux = new refNoB();
		aux.comeco = aux.fim = null;
		
		
		while (choice != 4) {
			int sub, pos = 0;
			System.out.println("1- Ler Fila\n2- Adiciona elemento\n3- Remove elemento\n4- Encerrar aplicação");
			choice = sc.nextInt();
			switch (choice) {
				case 1:
					leFila(aux);
					break;
				case 2: //add nó
					adicionaNo(aux);
					break;
				case 3: //rmv nó
					removeNo(aux);
					break;
				case 4: //encerra programa
					break;
			}
		}
}
	
	public static void leFila(refNoB auxiliar) {
		NoB temp = new NoB();
		int contador = 1;
		temp = auxiliar.comeco;
		while (temp.next != null) {
			System.out.format("Nó %d - info: %d\n", contador, temp.info);
			contador++;
			temp = temp.next;
		}
		System.out.format("Nó %d - info: %d\n\n", contador, temp.info);
	}
	
	
	public static void adicionaNo(refNoB auxiliar) {
		Scanner sc = new Scanner(System.in);
		NoB temp = new NoB();
		NoB addNo = new NoB();
		System.out.println("info: ");
		addNo.info = sc.nextInt();
		
		if (auxiliar.comeco == null) {
			auxiliar.comeco = auxiliar.fim = addNo;
		} else {			
			temp = auxiliar.comeco;
			while (temp.next != null) {
				temp = temp.next;
			}
			temp.next = auxiliar.fim = addNo;
			auxiliar.fim.prev = temp;
		}
	}
	public static void removeNo(refNoB auxiliar) {
		auxiliar.comeco = auxiliar.comeco.next;
	}

}
