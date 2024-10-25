from fastapi import APIRouter, status
from config.database import conn
from sqlalchemy import text
import os
from utils.util import write_to_file, read_from_file

productorR = APIRouter()

@productorR.get("/movies/productor", status_code=status.HTTP_200_OK)
async def get_movies_by_productor() -> dict:
    query = text("""
        SELECT TOP 50 s.studio, COUNT(m.id) AS peliculas 
        FROM studios s 
        JOIN movies m ON s.id = m.id 
        WHERE s.studio IS NOT NULL 
        GROUP BY s.studio;
    """)
    name_file = "moviebyproductor"
    productors = []
    number_of_movies = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        productors.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "productors": productors,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@productorR.get("/movies/productor/top10desc", status_code=status.HTTP_200_OK)
async def get_movies_by_productor() -> dict:
    query = text("""
        SELECT TOP 10 s.studio, COUNT(m.id) AS peliculas 
        FROM studios s 
        JOIN movies m ON s.id = m.id 
        WHERE s.studio IS NOT NULL 
        GROUP BY s.studio 
        ORDER BY COUNT(m.id) DESC;
    """)
    name_file = "top10productorsdesc"
    productors = []
    number_of_movies = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        productors.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "productors": productors,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@productorR.get("/movies/productor/top10asc", status_code=status.HTTP_200_OK)
async def get_movies_by_productor() -> dict:
    query = text("""
        SELECT TOP 10 s.studio, COUNT(m.id) AS peliculas 
        FROM studios s 
        JOIN movies m ON s.id = m.id 
        WHERE s.studio IS NOT NULL 
        GROUP BY s.studio 
        ORDER BY COUNT(m.id) ASC;
    """)
    name_file = "top10productorsasc"
    productors = []
    number_of_movies = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        productors.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "productors": productors,
        "number_of_movies": number_of_movies
    }
    return {"data": information}


@productorR.get("/movies/productor/cantActorsxproductor", status_code=status.HTTP_200_OK)
async def get_can_actors_by_productor():
    query = text("""     
        SELECT TOP 50 s.studio, COUNT(DISTINCT a.id) AS actores 
        FROM studios s 
        JOIN movies m ON s.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE s.studio IS NOT NULL 
        GROUP BY s.studio;
        """)
    # Open the file in the specified directory
    name_file = "cantActorsxproductor"
    productors = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        productors.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "productors": productors,
        "number_of_actors": number_of_actors
    }
    return {"data": information}

@productorR.get("/movies/productor/cantActorsxproductor/top10desc", status_code=status.HTTP_200_OK)
async def get_can_actors_by_productor():
    query = text("""
        SELECT TOP 10 s.studio, COUNT(DISTINCT a.id) AS actores 
        FROM studios s 
        JOIN movies m ON s.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE s.studio IS NOT NULL 
        GROUP BY s.studio 
        ORDER BY COUNT(DISTINCT a.id) DESC;
        """)
    # Open the file in the specified directory
    name_file = "cantActorsxproductortop10desc"
    productors = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        productors.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "productors": productors,
        "number_of_actors": number_of_actors
    }
    return {"data": information}

@productorR.get("/movies/productor/cantActorsxproductor/top10asc", status_code=status.HTTP_200_OK)
async def get_can_actors_by_productor():
    query = text("""
        SELECT TOP 10 s.studio, COUNT(DISTINCT a.id) AS actores 
        FROM studios s 
        JOIN movies m ON s.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE s.studio IS NOT NULL 
        GROUP BY s.studio 
        ORDER BY COUNT(DISTINCT a.id) ASC;
        """)
    # Open the file in the specified directory
    name_file = "cantActorsxproductortop10asc"
    productors = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        productors.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "productors": productors,
        "number_of_actors": number_of_actors
    }
    return {"data": information}


@productorR.get("/movies/productor/themesMoreRepxproductor", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_productor():
    query = text("""
        SELECT TOP 50 s.studio, t.theme, COUNT(*) AS veces 
        FROM studios s 
        JOIN themes t ON s.id = t.id 
        WHERE s.studio IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY s.studio, t.theme;
        """)
    # Open the file in the specified directory
    name_file = "themesMoreRepxproductor"
    productors = []
    themes = []
    count_times = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        productors.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "productors": productors,
        "themes": themes,
        "count_times": count_times
    }
    return {"data": information}

@productorR.get("/movies/productor/themesMoreRepxproductor/top10desc", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_productor():
    query = text("""
        SELECT TOP 10 s.studio, t.theme, COUNT(*) AS veces 
        FROM studios s 
        JOIN themes t ON s.id = t.id 
        WHERE s.studio IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY s.studio, t.theme 
        ORDER BY COUNT(*) DESC;
        """)
    # Open the file in the specified directory
    name_file = "themesMoreRepxproductortop10desc"
    productors = []
    themes = []
    count_times = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        productors.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "productors": productors,
        "themes": themes,
        "count_times": count_times
    }
    return {"data": information}

@productorR.get("/movies/productor/themesMoreRepxproductor/top10asc", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_productor():
    query = text("""
        SELECT TOP 10 s.studio, t.theme, COUNT(*) AS veces 
        FROM studios s 
        JOIN themes t ON s.id = t.id 
        WHERE s.studio IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY s.studio, t.theme 
        ORDER BY COUNT(*) ASC;
        """)
    # Open the file in the specified directory
    name_file = "themesMoreRepxproductortop10asc"
    productors = []
    themes = []
    count_times = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        productors.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "productors": productors,
        "themes": themes,
        "count_times": count_times
    }
    return {"data": information}