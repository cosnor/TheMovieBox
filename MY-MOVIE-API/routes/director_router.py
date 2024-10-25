from fastapi import APIRouter, status
from config.database import conn
from sqlalchemy import text
import os
from utils.util import write_to_file, read_from_file

directorR = APIRouter()


@directorR.get("/movies/director", status_code=status.HTTP_200_OK)
async def get_movies_for_director() -> dict:
    query = text("""
        SELECT TOP 50 c.name, COUNT(m.id) AS peliculas 
        FROM crew c 
        JOIN movies m ON c.id = m.id 
        WHERE c.role = 'Director' AND c.name IS NOT NULL 
        GROUP BY c.name;
        """)
    # Open the file in the specified directory
    name_file = "moviesfordirectors"
    directors = []
    number_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        directors.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "directors": directors,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@directorR.get("/movies/director/top10desc", status_code=status.HTTP_200_OK)
async def get_movies_for_director() -> dict:
    query = text("""
        SELECT TOP 10 c.name AS director, COUNT(m.id) AS peliculas 
        FROM crew c 
        JOIN movies m ON c.id = m.id 
        WHERE c.role = 'Director' AND c.name IS NOT NULL 
        GROUP BY c.name 
        ORDER BY COUNT(m.id) DESC;
        """)
    # Open the file in the specified directory
    name_file = "moviesfordirectorstop10desc"
    directors = []
    number_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)       
    else:
        data = read_from_file(file_path)
    for row in data:
        directors.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "directors": directors,
        "number_of_movies": number_of_movies
    }
    return {"data": information}


@directorR.get("/movies/director/top10asc",status_code=status.HTTP_200_OK)
async def get_movies_for_director() -> dict:
    query = text("""
        SELECT TOP 10 c.name AS director, COUNT(m.id) AS peliculas 
        FROM crew c 
        JOIN movies m ON c.id = m.id 
        WHERE c.role = 'Director' AND c.name IS NOT NULL 
        GROUP BY c.name 
        ORDER BY COUNT(m.id) ASC;
        """)
    # Open the file in the specified directory
    name_file = "moviesfordirectorstop10asc"
    directors = []
    number_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)       
    else:
        data = read_from_file(file_path)
    for row in data:
        directors.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "directors": directors,
        "number_of_movies": number_of_movies
    }
    return {"data": information}


@directorR.get("/movies/director/cantActorsxDirector", status_code=status.HTTP_200_OK)
async def get_can_actors_by_director():
    query = text("""
        SELECT TOP 50 c.name AS director, COUNT(DISTINCT a.id) AS actores 
        FROM crew c 
        JOIN movies m ON c.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE c.role = 'Director' AND c.name IS NOT NULL 
        GROUP BY c.name;
        """)
    # Open the file in the specified directory
    name_file = "cantActorsxDirector"
    directors = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        directors.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "directors": directors,
        "number_of_actors": number_of_actors
    }
    return {"data": information}

@directorR.get("/movies/director/cantActorsxDirector/top10desc", status_code=status.HTTP_200_OK)
async def get_can_actors_by_director():
    query = text("""
        SELECT TOP 10 c.name AS director, COUNT(DISTINCT a.id) AS actores 
        FROM crew c 
        JOIN movies m ON c.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE c.role = 'Director' AND c.name IS NOT NULL 
        GROUP BY c.name 
        ORDER BY COUNT(DISTINCT a.id) DESC;
        """)
    # Open the file in the specified directory
    name_file = "cantActorsxDirectortop10desc"
    directors = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        directors.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "directors": directors,
        "number_of_actors": number_of_actors
    }
    return {"data": information}

@directorR.get("/movies/director/cantActorsxDirector/top10asc", status_code=status.HTTP_200_OK)
async def get_can_actors_by_director():
    query = text("""
        SELECT TOP 10 c.name AS director, COUNT(DISTINCT a.id) AS actores 
        FROM crew c 
        JOIN movies m ON c.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE c.role = 'Director' AND c.name IS NOT NULL 
        GROUP BY c.name 
        ORDER BY COUNT(DISTINCT a.id) ASC;
        """)
    # Open the file in the specified directory
    name_file = "cantActorsxDirectortop10asc"
    directors = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        directors.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "directors": directors,
        "number_of_actors": number_of_actors
    }
    return {"data": information}

@directorR.get("/movies/director/bestratingpromxDirector", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_director():
    query = text("""
        SELECT TOP 50 c.name AS director, AVG(m.rating) AS rating_promedio 
        FROM crew c 
        JOIN movies m ON c.id = m.id 
        WHERE c.role = 'Director' AND c.name IS NOT NULL 
        GROUP BY c.name 
        HAVING AVG(m.rating) IS NOT NULL;
        """)
    # Open the file in the specified directory
    name_file = "bestratingpromxDirector"
    directors = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        directors.append(row[0])
        rating_prom.append(row[1])
    information = {
        "directors": directors,
        "rating_prom": rating_prom
    }
    return {"data": information}

@directorR.get("/movies/director/bestratingpromxDirector/top10desc", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_director():
    query = text("""
        SELECT TOP 10 c.name AS director, AVG(m.rating) AS rating_promedio 
        FROM crew c 
        JOIN movies m ON c.id = m.id 
        WHERE c.role = 'Director' AND c.name IS NOT NULL 
        GROUP BY c.name 
        HAVING AVG(m.rating) IS NOT NULL 
        ORDER BY AVG(m.rating) DESC;
        """)
    # Open the file in the specified directory
    name_file = "bestratingpromxDirectortop10desc"
    directors = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        directors.append(row[0])
        rating_prom.append(row[1])
    information = {
        "directors": directors,
        "rating_prom": rating_prom
    }
    return {"data": information}

@directorR.get("/movies/director/bestratingpromxDirector/top10asc", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_director():
    query = text("""
        SELECT TOP 10 c.name AS director, AVG(m.rating) AS rating_promedio 
        FROM crew c 
        JOIN movies m ON c.id = m.id 
        WHERE c.role = 'Director' AND c.name IS NOT NULL 
        GROUP BY c.name 
        HAVING AVG(m.rating) IS NOT NULL 
        ORDER BY AVG(m.rating) ASC;
        """)
    # Open the file in the specified directory
    name_file = "bestratingpromxDirectortop10asc"
    directors = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        directors.append(row[0])
        rating_prom.append(row[1])
    information = {
        "directors": directors,
        "rating_prom": rating_prom
    }
    return {"data": information}

@directorR.get("/movies/director/themesMoreRepxDirector", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_director():
    query = text("""
        SELECT TOP 50 c.name AS director, t.theme, COUNT(*) AS veces 
        FROM crew c 
        JOIN themes t ON c.id = t.id 
        WHERE c.role = 'Director' AND c.name IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY c.name, t.theme;
        """)
    # Open the file in the specified directory
    name_file = "themesMoreRepxDirector"
    directors = []
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
        directors.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "directors": directors,
        "themes": themes,
        "count_times": count_times
    }
    return {"data": information}

@directorR.get("/movies/director/themesMoreRepxDirector/top10desc", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_director():
    query = text("""
        SELECT TOP 10 c.name AS director, t.theme, COUNT(*) AS veces 
        FROM crew c 
        JOIN themes t ON c.id = t.id 
        WHERE c.role = 'Director' AND c.name IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY c.name, t.theme 
        ORDER BY COUNT(*) DESC;
        """)
    # Open the file in the specified directory
    name_file = "themesMoreRepxDirectortop10desc"
    directors = []
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
        directors.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "directors": directors,
        "themes": themes,
        "count_times": count_times
    }
    return {"data": information}

@directorR.get("/movies/director/themesMoreRepxDirector/top10asc", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_director():
    query = text("""
        SELECT TOP 10 c.name AS director, t.theme, COUNT(*) AS veces 
        FROM crew c 
        JOIN themes t ON c.id = t.id 
        WHERE c.role = 'Director' AND c.name IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY c.name, t.theme 
        ORDER BY COUNT(*) ASC;
        """)
    # Open the file in the specified directory
    name_file = "themesMoreRepxDirectortop10asc"
    directors = []
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
        directors.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "directors": directors,
        "themes": themes,
        "count_times": count_times
    }
    return {"data": information}


