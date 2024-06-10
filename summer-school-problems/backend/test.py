def read_input():
    with open("input.txt", "r") as input_file:
        return input_file.readlines()


def input_to_int(input):
    return list(map(lambda a: int(a), input))

[a, b] = input_to_int(read_input())

with open("output.txt", "w") as output_file:
  output_file.write(str(a + b) + '\n')
  output_file.write(str(a * b) + '\n')

