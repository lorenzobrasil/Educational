"""
graph = [
[node1, [connections_node_1]],
[node2, [connections_node_2]],
[node3, [connections_node_3]],
[node4, [connections_node_4]],
...
]
 
"""
 
g1 = [
[0, [1]],
[1, [0, 2]],
[2, [1, 3, 5]],
[3, [2, 4, 5, 6]],
[4, [2, 3, 6]],
[5, [2, 3, 4, 5]],
[6, [2, 3, 4, 5, 6, 8]],
[7, [9, 10]],
[8, [6, 9]],
[9, [7, 8, 10]],
[10, [7, 9]],
]
 
def bfs(g, inicio_index=0):
    "Busca em largura"
    fila, consultados = [], []
    no_inicio = g[inicio_index]
    consultados += [no_inicio[0]]
    for no_vizinho in no_inicio[1]:
        fila.append(no_vizinho)
    while len(fila) > 0:
        no = g[fila[0]]
        if no[0] not in consultados:
            consultados += [no[0]]
        fila = fila[1:]
        for no_vizinho in no[1]:
            if no_vizinho not in consultados:
                fila.append(no_vizinho)
    print(consultados)
    print(fila)
 
bfs(g1)
