package ListaDeExerc�cios1;
import java.util.Scanner;
import java.util.ArrayList;

/*
 * Foi feita uma pesquisa entre os habitantes de uma regi�o.
 * Foram coletados os dados de idade,sexo (M/F) e sal�rio.
 * Fa�a um programa que calcule e mostre:

a) A m�dia dos sal�rios do grupo;
b) A maior e a menor idade do grupo;
c) A quantidade de mulheres na regi�o;
d) A idade e o sexo da pessoa que possui o menor sal�rio;
Finalize a entrada de dados ao ser digitada uma idade negativa.
 */

public class Ex21 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		ArrayList<Integer> ages = new ArrayList<Integer>();
		ArrayList<String>  genders = new ArrayList<String>();
		ArrayList<Double> wages = new ArrayList<Double>();
		
		int age;
		
		while (true) {
			System.out.println("Idade do habitante (idade negativa para encerrar):");
			age = sc.nextInt();
			if (age < 0) {
				break;
			} else {
				ages.add(age);
				System.out.println("Sexo do habitante (m/f):");
				genders.add(sc.next());
				
				System.out.println("Sal�rio do habitante:");
				wages.add(sc.nextDouble());
			}
		}
		
		if (ages.size() >= 1) {
			int k=0, maxAge=ages.get(0), minAge=ages.get(0), womenCounter=0, minWage_index=0;
			Double avgwages=0.0, minWage=wages.get(0);
			
			while (k < ages.size()) {
				// item a
				avgwages += wages.get(k);
				
				// item b
				if (ages.get(k) > maxAge) {
					maxAge = ages.get(k);
				} else if (ages.get(k) < minAge) {
					minAge = ages.get(k);
				}
				
				// item c
				if (genders.get(k).contains("f") || genders.get(k).contains("F")) {
					womenCounter++;
				}
				
				// item d
				if (wages.get(k) < minWage) {
					minWage_index = k;
					minWage = wages.get(0);
				}
				
				k++;
			}
			System.out.format("A) M�dia dos sal�rios: %.2f\n", avgwages / k);
			System.out.format("B) Maior idade: %d\n\s\s\sMenor idade: %d\n", maxAge, minAge);
			System.out.format("C) Quantidade de mulheres: %d\n", womenCounter);
			System.out.format("D) Idade e sexo da pessoa com menor sal�rio (respectivamente): %d, %s", ages.get(minWage_index), genders.get(minWage_index));
		}
	}
}
