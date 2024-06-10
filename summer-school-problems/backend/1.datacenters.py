def read_input():
    with open("input.txt", "r") as input_file:
        return input_file.readlines()


def to_int(num):
    return int(num)


def input_to_int(data):
    return list(map(to_int, data))


input_data = read_input()

[data_centers, servers, actions_amount] = input_to_int(input_data[0].split())
metrics = [[0, set()] for x in range(data_centers)]
reb_mult = [0] * data_centers
res = []

for action in input_data[1:]:
    action = action.strip().split()

    match action[0]:
        case 'DISABLE':
            db = int(action[1]) - 1
            server = int(action[2]) - 1

            if server not in metrics[db][1]:
                reb_mult[db] -= metrics[db][0]

            metrics[db][1].add(server)
        case 'RESET':
            db = int(action[1]) - 1

            metrics[db][0] += 1
            metrics[db][1].clear()
            reb_mult[db] = metrics[db][0] * servers
        case 'GETMAX':
            res.append(reb_mult.index(max(reb_mult)) + 1)
        case 'GETMIN':
            res.append(reb_mult.index(min(reb_mult)) + 1)

with open("output.txt", "w") as output_file:
    for num in res:
        output_file.write(str(num) + '\n')
