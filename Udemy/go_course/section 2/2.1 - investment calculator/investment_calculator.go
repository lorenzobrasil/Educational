package main

import (
	"fmt"
	"math"
)

func main() {
	const inflationRate float64 = 2.5
	var investmentAmount float64
	var returnRate float64
	var years float64

	fmt.Print("Quantia investida: ")
	fmt.Scan(&investmentAmount)

	fmt.Print("Taxa de retorno: ")
	fmt.Scan(&returnRate)

	fmt.Print("Vencimento: ")
	fmt.Scan(&years)

	var futureValue = investmentAmount * math.Pow((1 + returnRate/100), years)
	futureRealValue := futureValue / math.Pow(1 + inflationRate/100, years)
	// fmt.Println("Montante:", futureValue)
	formattedFV := fmt.Sprintf("Montante: %.2f\n", futureValue)
	formattedFRV := fmt.Sprintf("Montante (ajustado): %.2f", futureRealValue)
	// fmt.Println("Montante (ajustado):", futureRealValue)
	fmt.Print(formattedFV, formattedFRV)

}