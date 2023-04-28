boxes = open('input.txt', 'r', encoding='utf8')
output = open('output.txt', 'w')
dicti = {}
prevInput = '0'

for line in boxes:
    line = line.strip()
    [color, amount] = line.split(' ')
    amount = int(amount)

    if color not in dicti:
        dicti[color] = 0
    
    dicti[color] += amount

dicti = dict(sorted(dicti.items(), key=lambda item: item[0]))

for key, value in dicti.items():
    output.write(f'{key} {value}\n')
output.close()