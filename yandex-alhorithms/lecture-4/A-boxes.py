boxesAmount = int(input())
boxes = []
dicti = {}

def strToNum(str):
  return int(str)

for i in range(boxesAmount):
  boxes.append(list(map(strToNum, str(input()).split(' '))))

for [color, amount] in boxes:
  if color not in dicti:
    dicti[color] = 0
  
  dicti[color] += amount

dicti = dict(sorted(dicti.items(), key=lambda item: item[0]))

for key, value in dicti.items():
    print (key, value)