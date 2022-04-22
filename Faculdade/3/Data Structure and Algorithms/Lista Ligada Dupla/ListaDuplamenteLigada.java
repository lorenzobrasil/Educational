package ac1;
import java.util.Scanner;

public class ListaDuplamenteLigada {
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		var choice = 0;
		refNoB aux = new refNoB();
		aux.comeco = aux.fim = null;
		
		
		while (choice != 4) {
			int sub, pos = 0;
			System.out.println("1- Le lista\n2- Adicionar elemento\n3- Remover elemento\n4- Encerrar aplicação");
			choice = sc.nextInt();
			switch (choice) {
				case 1:
					leLista(aux);
					break;
				case 2: //add nó
					System.out.println("1- No início\n2- No fim\n3- No meio");
					sub = sc.nextInt();
					switch (sub) {
						case 1:
							adicionaNoComeco(aux);
							//add no inicio
							break;
						case 2:
							adicionaNoFim(aux);
							//add no fim
							break;
						case 3:
							System.out.println("Após qual elemento?");
							pos = sc.nextInt();
							adicionaNoPos(aux, pos);
							//add no meio (posicao pos)
							break;
					}
					break;
				case 3: //rmv nó
					System.out.println("1- Primeiro elemento\n2- Último elemento\n3- Posição específica");
					sub = sc.nextInt();
					switch (sub) {
					case 1:
						//rmv inicio
						removePrimeiro(aux);
						break;
					case 2:
						//rmv fim
						removeUltimo(aux);
						break;
					case 3:
						System.out.println("Após qual elemento?");
						pos = sc.nextInt();
						removeNoPos(aux, pos);
						//rmv específico
						break;
					}
					break;
				case 4: //encerra programa
					break;
			}
		}
		
		
	}
	
	public static void leLista(refNoB auxiliar) {
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
	
	
	public static void adicionaNoComeco(refNoB auxiliar) {
		Scanner sc = new Scanner(System.in);
		NoB addNo = new NoB();
		System.out.println("info: ");
		addNo.info = sc.nextInt();
		
		if (auxiliar.comeco == null) {
			auxiliar.comeco = auxiliar.fim = addNo;
		} else {
			NoB temp = new NoB();
			temp = auxiliar.comeco;
			auxiliar.comeco = addNo;
			auxiliar.comeco.next = temp;
			temp.prev = auxiliar.comeco;
		}
	}
	
	
	public static void adicionaNoFim(refNoB auxiliar) {
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
	public static void adicionaNoPos(refNoB auxiliar, int posicao) {
		Scanner sc = new Scanner(System.in);
		NoB tempFim = new NoB();
		NoB tempComeco = new NoB();
		NoB addNo = new NoB();
		System.out.println("info: ");
		addNo.info = sc.nextInt();
		
		int contador = 1;
		
		tempFim = auxiliar.comeco;
		while (contador < posicao) {
			tempFim = tempFim.next;
			contador++;
		}
		tempComeco = tempFim.next;
		tempFim.next = addNo;
		addNo.prev = tempFim;
		addNo.next = tempComeco;
		tempComeco.prev = addNo;
	}
	public static void removePrimeiro(refNoB auxiliar) {
		auxiliar.comeco = auxiliar.comeco.next;
	}
	
	public static void removeUltimo(refNoB auxiliar) { // Método não está funcionando por algum motivo.
		auxiliar.fim = auxiliar.fim.prev;
		auxiliar.fim.next = null;
	}
	
	public static void removeNoPos(refNoB auxiliar, int posicao) {
		NoB temp = new NoB();
		int contador = 1;
		NoB tempFim = new NoB();
		NoB tempComeco = new NoB();
		
		temp = auxiliar.comeco;
		while (contador < posicao) {
			temp = temp.next;
			contador++;
		}
		tempFim = temp;
		tempComeco = temp.next.next;
		tempFim.next = tempComeco;
		tempComeco.prev = tempFim;
	}
}
