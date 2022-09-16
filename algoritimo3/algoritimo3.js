alert('Calcular a área e o perimetro de uma circunferência')

let raio = Number(prompt("Inserir o valor do raio"))
const valorPi = 3.14
raio = raio ** 2

let valor = valorPi * raio
alert("Valor da área: " + valor)

valor = 2 * valorPi * raio
alert("Valor do perimetro: " + valor)