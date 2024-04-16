package main

import (
	"fmt"
)

func main() {
	var userRevenue float64
	var userExpenses float64
	var userTaxRate float64

	fmt.Print("Revenue: ")
	fmt.Scan(&userRevenue)

	fmt.Print("Expenses: ")
	fmt.Scan(&userExpenses)

	fmt.Print("Tax rate (%): ")
	fmt.Scan(&userTaxRate)
	fmt.Println("")

	var calcEbt float64 = userRevenue - userExpenses
	var calcProfit float64 = ((1 - userTaxRate/100) * userRevenue) - userExpenses

	fmt.Println("EBT (earnings before tax):", calcEbt)

	fmt.Println("Profit (earnings after tax):", calcProfit)

	fmt.Println("Ratio (EBT/Profit):", calcEbt/calcProfit)
}