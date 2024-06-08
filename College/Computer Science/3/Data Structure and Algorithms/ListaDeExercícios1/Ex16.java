package ListaDeExercícios1;
import java.util.Scanner;

/*
 * 
 * Escreva um programa que leia as medidas dos lados de um
 * triângulo e escreva se ele é Equilátero, Isósceles ou
 * Escaleno. Sendo que: − Triângulo Equilátero: possui os
 * 3 lados iguais. − Triângulo Isóscele: possui 2 lados iguais.
 * − Triângulo Escaleno: possui 3 lados diferentes.
 * 
 */

public class Ex16 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Lado a: ");
		var a = sc.nextInt();
		
		System.out.println("Lado b: ");
		var b = sc.nextInt();
		
		System.out.println("Lado c: ");
		var c = sc.nextInt();
		
		if ((a == b) && (a == c)) {
			System.out.println("Triângulo Equilátero");
		} else if ((a != b) && (a != c) && (b != c)) {
			System.out.println("Triângulo Escaleno");
		} else {
			System.out.println("Triângulo Isósceles");
		}
	}
}
