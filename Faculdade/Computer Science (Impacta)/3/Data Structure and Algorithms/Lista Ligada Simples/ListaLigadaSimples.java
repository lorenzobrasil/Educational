package ac1;

import java.util.Scanner;

public class ListaLigadaSimples {
    public static void main(String args[]) {
    	Scanner sc = new Scanner(System.in);
    	refNoA aux = new refNoA();
    	aux.comeco = aux.fim = null;
    	int choice;
 
    	System.out.println("Ações:\n1:Adicionar elemento\n2:Ler Lista\n3:Remover primeiro elemento\n4:Remover enésimo elemento\n5:Remover último elemento\n\n-1: Sair");
    	choice = sc.nextInt();
    	while (choice != -1) {
    		switch (choice) {
    			case 1:
    				adicionaNo(aux);
    				break;
    			case 2:
    				leLista(aux);
    				System.out.println("\n\n");
    				break;
    		 	case 3:
    		 		removePrimeiroElemento(aux);
    		 		break;
    		 	case 4:
    		 		System.out.println("Termo da lista a ser deletado: ");
    		 		int n = sc.nextInt();
    		 		removeEnesimoElemento(aux, n);
    		 		break;
    		 	case 5:
    		 		removeUltimoElemento(aux);
    		 		break;
    		}
    		System.out.println("Ações:\n1:Adicionar elemento\n2:Ler Lista\n3:Remover primeiro elemento\n4:Remover enésimo elemento\n5:Remover último elemento\n\n-1: Sair");
			choice = sc.nextInt();
    	}
    }
    		
 
 
// choice == 1
    public static void adicionaNo(refNoA auxiliar) {
        Scanner sc = new Scanner(System.in);
        
        NoA aux2 = new NoA();
        
        if ((auxiliar.comeco == null) && (auxiliar.fim == null) ) {
            NoA noAdd = new NoA();
            System.out.println("info:");
            noAdd.info = sc.nextInt();
            noAdd.next = null;
            auxiliar.comeco = auxiliar.fim = noAdd;
        } else {
            NoA noAdd = new NoA();
            System.out.println("info:");
            noAdd.info = sc.nextInt();
            
            aux2 = auxiliar.comeco;
            while (aux2.next != null) {
            	aux2 = aux2.next;
            }
            auxiliar.fim = aux2.next = noAdd;
        }
    }
    
// choice == 2
    public static void leLista(refNoA auxiliar) {
    	NoA auxiliarPercorre = new NoA();
    	auxiliarPercorre = auxiliar.comeco;
    	int contador = 1;
    	while (auxiliarPercorre != auxiliar.fim) {
    		System.out.format("Nó %d: info=%d\n", contador, auxiliarPercorre.info);
    		auxiliarPercorre = auxiliarPercorre.next;
    		contador++;
    	}
    	System.out.format("Nó %d: info=%d\n", contador, auxiliarPercorre.info);
    }


// choice == 3
	public static void removePrimeiroElemento(refNoA auxiliar) {
		auxiliar.comeco = auxiliar.comeco.next;
	}

// choice == 4
	public static void removeEnesimoElemento(refNoA auxiliar, int n) {
		int contador = 1;
		NoA auxNovoFim = new NoA();
		NoA auxNovoComeco = new NoA();
		auxNovoFim = auxiliar.comeco;
		while (contador < n-1) {
			auxNovoFim = auxNovoFim.next;
			contador++;
		}
		auxNovoComeco = auxNovoFim.next; // variável a ser removida
		auxNovoComeco = auxNovoComeco.next;
		
		auxNovoFim.next = auxNovoComeco; // ligação dos dois elos após remoção do elemento
		
	}

// choice == 5
	public static void removeUltimoElemento(refNoA auxiliar) {
		NoA novoFim = new NoA();
		novoFim = auxiliar.comeco;
		while (novoFim.next != auxiliar.fim) {
			novoFim = novoFim.next;
		}
		auxiliar.fim = novoFim;
	}
}