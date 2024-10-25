

def write_to_file(file_path: str, data_query) -> None:
    data = []
    with open(file_path, "w", encoding="utf-8") as file:
        for row in data_query:
            row_str = divide_row_str(row)
            file.write(row_str)
            data.append(row)
    return data

def read_from_file(file_path: str) -> list:
    data = []
    with open(file_path, "r", encoding="utf-8") as file:
        for line in file.readlines():
            data.append(line.strip().split(","))
    return data


def divide_row_str(row) -> str:
    row_str = ""
    for i in range(len(row)):
        row_str += f"{row[i]}"
        if i < len(row) - 1:
            row_str += ","
    return row_str + "\n"