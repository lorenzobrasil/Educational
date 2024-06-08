package ListaDeExercícios1;
import java.util.Random;

// Informar um saldo e imprimir o saldo com reajuste de 1%.

public class Ex03 {
	public static void main(String[] args) {
		Random gerador = new Random();
		var saldo = gerador.nextInt(1000, 2000);
		System.out.println("Valor do saldo: " + saldo);
		System.out.println("Valor reajustado (1%): " + saldo * 1.01);
		
	}
}
