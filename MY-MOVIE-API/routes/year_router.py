from fastapi import APIRouter, status
from config.database import conn
from sqlalchemy import text
import os
from utils.util import write_to_file, read_from_file

yearR = APIRouter()

@yearR.get("/movies/year", status_code=status.HTTP_200_OK)
async def get_movies_by_year() -> dict:
    query = text("""
        SELECT TOP 50 m.date AS anio, COUNT(m.id) AS peliculas 
        FROM movies m 
        WHERE m.date IS NOT NULL 
        GROUP BY m.date;
        """)
    # Open the file in the specified directory
    name_file = "yearbymovies"
    years = []
    numbers_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        years.append(row[0])
        numbers_of_movies.append(row[1])
    information = {
        "years": years,
        "numbers_of_movies": numbers_of_movies
    }
    return {"data": information}


@yearR.get("/movies/year/top10desc", status_code=status.HTTP_200_OK)
async def get_movies_by_year() -> dict:
    query = text("""      
        SELECT TOP 10 m.date AS anio, COUNT(m.id) AS peliculas 
        FROM movies m 
        WHERE m.date IS NOT NULL 
        GROUP BY m.date 
        ORDER BY COUNT(m.id) DESC;
        """)
    # Open the file in the specified directory
    name_file = "yearbymoviestop10desc"
    years = []
    numbers_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        years.append(row[0])
        numbers_of_movies.append(row[1])
    information = {
        "years": years,
        "numbers_of_movies": numbers_of_movies
    }
    return {"data": information}

@yearR.get("/movies/year/top10asc", status_code=status.HTTP_200_OK)
async def get_movies_by_year() -> dict:
    query = text("""      
        SELECT TOP 10 m.date AS anio, COUNT(m.id) AS peliculas 
        FROM movies m 
        WHERE m.date IS NOT NULL 
        GROUP BY m.date 
        ORDER BY COUNT(m.id) ASC;
        """)
    # Open the file in the specified directory
    name_file = "yearbymoviestop10asc"
    years = []
    numbers_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        years.append(row[0])
        numbers_of_movies.append(row[1])
    information = {
        "years": years,
        "numbers_of_movies": numbers_of_movies
    }
    return {"data": information}

@yearR.get("/movies/year/cantActorsxYear", status_code=status.HTTP_200_OK)
async def get_cant_actors_by_year() -> dict:
    query = text("""      
        SELECT TOP 50 m.date AS anio, COUNT(DISTINCT a.id) AS actores 
        FROM movies m 
        JOIN actors a ON m.id = a.id 
        WHERE m.date IS NOT NULL 
        GROUP BY m.date;
        """)
    # Open the file in the specified directory
    name_file = "cantactorsbyyear"
    years = []
    numbers_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        years.append(row[0])
        numbers_of_actors.append(row[1])
    information = {
        "years": years,
        "numbers_of_actors": numbers_of_actors
    }
    return {"data": information}

@yearR.get("/movies/year/cantActorsxYear/top10desc", status_code=status.HTTP_200_OK)
async def cant_actors_by_year() -> dict:
    query = text("""      
        SELECT TOP 10 m.date AS anio, COUNT(DISTINCT a.id) AS actores 
        FROM movies m 
        JOIN actors a ON m.id = a.id 
        WHERE m.date IS NOT NULL 
        GROUP BY m.date 
        ORDER BY COUNT(DISTINCT a.id) DESC;
        """)
    # Open the file in the specified directory
    name_file = "cantactorsbyyeartop10desc"
    years = []
    numbers_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        years.append(row[0])
        numbers_of_actors.append(row[1])
    information = {
        "years": years,
        "numbers_of_actors": numbers_of_actors
    }
    return {"data": information}

@yearR.get("/movies/year/cantActorsxYear/top10asc", status_code=status.HTTP_200_OK)
async def cant_actors_by_year() -> dict:
    query = text("""      
        SELECT TOP 10 m.date AS anio, COUNT(DISTINCT a.id) AS actores 
        FROM movies m 
        JOIN actors a ON m.id = a.id 
        WHERE m.date IS NOT NULL 
        GROUP BY m.date 
        ORDER BY COUNT(DISTINCT a.id) ASC;
        """)
    # Open the file in the specified directory
    name_file = "cantactorsbyyeartop10asc"
    years = []
    numbers_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        years.append(row[0])
        numbers_of_actors.append(row[1])
    information = {
        "years": years,
        "numbers_of_actors": numbers_of_actors
    }
    return {"data": information}

@yearR.get("/movies/year/bestratingpromxYear", status_code=status.HTTP_200_OK)
async def best_rating_prom_by_year() -> dict:
    query = text("""           
        SELECT TOP 50 m.date AS anio, AVG(m.rating) AS rating_promedio 
        FROM movies m 
        WHERE m.date IS NOT NULL 
        GROUP BY m.date 
        HAVING AVG(m.rating) IS NOT NULL;
        """)
    # Open the file in the specified directory
    name_file = "bestratingprombyyear"
    years = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        years.append(row[0])
        rating_prom.append(row[1])
    information = {
        "years": years,
        "rating_prom": rating_prom
    }
    return {"data": information}

@yearR.get("/movies/year/bestratingpromxYear/top10desc", status_code=status.HTTP_200_OK)
async def best_rating_prom_by_year() -> dict:
    query = text("""           
        SELECT TOP 10 m.date AS anio, AVG(m.rating) AS rating_promedio 
        FROM movies m 
        WHERE m.date IS NOT NULL 
        GROUP BY m.date 
        HAVING AVG(m.rating) IS NOT NULL 
        ORDER BY AVG(m.rating) DESC;
        """)
    # Open the file in the specified directory
    name_file = "bestratingprombyyeartop10desc"
    years = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        years.append(row[0])
        rating_prom.append(row[1])
    information = {
        "years": years,
        "rating_prom": rating_prom
    }
    return {"data": information}

@yearR.get("/movies/year/bestratingpromxYear/top10asc", status_code=status.HTTP_200_OK)
async def best_rating_prom_by_year() -> dict:
    query = text("""           
        SELECT TOP 10 m.date AS anio, AVG(m.rating) AS rating_promedio 
        FROM movies m 
        WHERE m.date IS NOT NULL 
        GROUP BY m.date 
        HAVING AVG(m.rating) IS NOT NULL 
        ORDER BY AVG(m.rating) ASC;
        """)
    # Open the file in the specified directory
    name_file = "bestratingprombyyeartop10asc"
    years = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        years.append(row[0])
        rating_prom.append(row[1])
    information = {
        "years": years,
        "rating_prom": rating_prom
    }
    return {"data": information}

@yearR.get("/movies/year/themesMoreRepxYear", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_year() -> dict:
    query = text("""           
        SELECT TOP 50 m.date AS anio, t.theme, COUNT(*) AS veces 
        FROM movies m 
        JOIN themes t ON m.id = t.id 
        WHERE m.date IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY m.date, t.theme;
        """)
    # Open the file in the specified directory
    name_file = "themesmorerepbyyear"
    years = []
    themes = []
    numbers_of_times = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        years.append(row[0])
        themes.append(row[1])
        numbers_of_times.append(row[2])
    information = {
        "years": years,
        "themes": themes,
        "numbers_of_times": numbers_of_times
    }
    return {"data": information}

@yearR.get("/movies/year/themesMoreRepxYear/top10desc", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_year() -> dict:
    query = text("""           
        SELECT TOP 10 m.date AS anio, t.theme, COUNT(*) AS veces 
        FROM movies m 
        JOIN themes t ON m.id = t.id 
        WHERE m.date IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY m.date, t.theme 
        ORDER BY COUNT(*) DESC;
        """)
    # Open the file in the specified directory
    name_file = "themesmorerepbyyeartop10desc"
    years = []
    themes = []
    numbers_of_times = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        years.append(row[0])
        themes.append(row[1])
        numbers_of_times.append(row[2])
    information = {
        "years": years,
        "themes": themes,
        "numbers_of_times": numbers_of_times
    }
    return {"data": information}

@yearR.get("/movies/year/themesMoreRepxYear/top10asc", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_year() -> dict:
    query = text("""           
        SELECT TOP 10 m.date AS anio, t.theme, COUNT(*) AS veces 
        FROM movies m 
        JOIN themes t ON m.id = t.id 
        WHERE m.date IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY m.date, t.theme 
        ORDER BY COUNT(*) ASC;
        """)
    # Open the file in the specified directory
    name_file = "themesmorerepbyyeartop10asc"
    years = []
    themes = []
    numbers_of_times = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        years.append(row[0])
        themes.append(row[1])
        numbers_of_times.append(row[2])
    information = {
        "years": years,
        "themes": themes,
        "numbers_of_times": numbers_of_times
    }
    return {"data": information}
