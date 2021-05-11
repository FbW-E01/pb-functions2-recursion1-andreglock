def sum(numbers):
    number = numbers.pop(0)
    if (len(numbers) == 0):
        return number
    return number + sum(numbers)

array = [1, 2, 3, 4, 5, 6]

print(sum(array))