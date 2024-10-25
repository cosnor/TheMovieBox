from fastapi import APIRouter, status
from config.database import conn
from sqlalchemy import text
import os
from utils.util import write_to_file, read_from_file

genreR = APIRouter()

@genreR.get("/movies/genre", status_code=status.HTTP_200_OK)
async def get_movies_by_genre():
    query = text("""
        SELECT TOP 50 g.genre, COUNT(m.id) AS peliculas 
        FROM genres g 
        JOIN movies m ON g.id = m.id 
        WHERE g.genre IS NOT NULL 
        GROUP BY g.genre;
        """)
    name_file = "moviesbygenre"
    genres = []
    number_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        genres.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "genres": genres,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@genreR.get("/movies/genre/top10desc", status_code=status.HTTP_200_OK)
async def get_movies_by_genre():
    query = text("""
        SELECT TOP 10 g.genre, COUNT(m.id) AS peliculas 
        FROM genres g 
        JOIN movies m ON g.id = m.id 
        WHERE g.genre IS NOT NULL 
        GROUP BY g.genre 
        ORDER BY COUNT(m.id) DESC;
        """)
    name_file = "moviesbygenretop10desc"
    genres = []
    number_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        genres.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "genres": genres,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@genreR.get("/movies/genre/top10asc", status_code=status.HTTP_200_OK)  
async def get_movies_by_genre():
    query = text("""
        SELECT TOP 10 g.genre, COUNT(m.id) AS peliculas 
        FROM genres g 
        JOIN movies m ON g.id = m.id 
        WHERE g.genre IS NOT NULL 
        GROUP BY g.genre 
        ORDER BY COUNT(m.id) ASC;
        """)
    name_file = "moviesbygenretop10asc"
    genres = []
    number_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        genres.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "genres": genres,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@genreR.get("/movies/genre/cantActorsxGenre", status_code=status.HTTP_200_OK)
async def get_cant_actors_by_genre():
    query = text("""
        SELECT TOP 50 g.genre, COUNT(DISTINCT a.id) AS actores 
        FROM genres g 
        JOIN movies m ON g.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE g.genre IS NOT NULL 
        GROUP BY g.genre;
        """)
    name_file = "cantactorsbygenre"
    genres = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        genres.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "genres": genres,
        "number_of_actors": number_of_actors
    }
    return {"data": information}

@genreR.get("/movies/genre/cantActorsxGenre/top10desc", status_code=status.HTTP_200_OK)
async def get_cant_actors_by_genre():
    query = text("""
        SELECT TOP 10 g.genre, COUNT(DISTINCT a.id) AS actores 
        FROM genres g 
        JOIN movies m ON g.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE g.genre IS NOT NULL 
        GROUP BY g.genre 
        ORDER BY COUNT(DISTINCT a.id) DESC;
        """)
    name_file = "cantactorsbygenretop10desc"
    genres = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        genres.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "genres": genres,
        "number_of_actors": number_of_actors
    }
    return {"data": information}

@genreR.get("/movies/genre/cantActorsxGenre/top10asc", status_code=status.HTTP_200_OK)
async def get_cant_actors_by_genre():
    query = text("""
        SELECT TOP 10 g.genre, COUNT(DISTINCT a.id) AS actores 
        FROM genres g 
        JOIN movies m ON g.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE g.genre IS NOT NULL 
        GROUP BY g.genre 
        ORDER BY COUNT(DISTINCT a.id) ASC;
        """)
    name_file = "cantactorsbygenretop10asc"
    genres = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        genres.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "genres": genres,
        "number_of_actors": number_of_actors
    }
    return {"data": information}

@genreR.get("/movies/genre/bestratingpromxGenre", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_genre():
    query = text("""     
            SELECT TOP 50 g.genre, AVG(m.rating) AS rating_promedio 
            FROM genres g 
            JOIN movies m ON g.id = m.id 
            WHERE g.genre IS NOT NULL 
            GROUP BY g.genre 
            HAVING AVG(m.rating) IS NOT NULL;
        """)
    name_file = "ratingprombygenre"
    genres = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        genres.append(row[0])
        rating_prom.append(row[1])
    information = {
        "genres": genres,
        "rating_prom": rating_prom
    }
    return {"data": information}

@genreR.get("/movies/genre/bestratingpromxGenre/top10desc", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_genre():
    query = text("""     
            SELECT TOP 10 g.genre, AVG(m.rating) AS rating_promedio 
            FROM genres g 
            JOIN movies m ON g.id = m.id 
            WHERE g.genre IS NOT NULL 
            GROUP BY g.genre 
            HAVING AVG(m.rating) IS NOT NULL 
            ORDER BY AVG(m.rating) DESC;
        """)
    name_file = "ratingprombygenretop10desc"
    genres = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        genres.append(row[0])
        rating_prom.append(row[1])
    information = {
        "genres": genres,
        "rating_prom": rating_prom
    }
    return {"data": information}

@genreR.get("/movies/genre/bestratingpromxGenre/top10asc", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_genre():
    query = text("""     
            SELECT TOP 10 g.genre, AVG(m.rating) AS rating_promedio 
            FROM genres g 
            JOIN movies m ON g.id = m.id 
            WHERE g.genre IS NOT NULL 
            GROUP BY g.genre 
            HAVING AVG(m.rating) IS NOT NULL 
            ORDER BY AVG(m.rating) ASC;
        """)
    name_file = "ratingprombygenretop10asc"
    genres = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        genres.append(row[0])
        rating_prom.append(row[1])
    information = {
        "genres": genres,
        "rating_prom": rating_prom
    }
    return {"data": information}

@genreR.get("/movies/genre/themesMoreRepxGenre", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_genre():
    query = text("""     
            SELECT TOP 50 g.genre, t.theme, COUNT(*) AS veces 
            FROM genres g 
            JOIN themes t ON g.id = t.id 
            WHERE g.genre IS NOT NULL AND t.theme IS NOT NULL 
            GROUP BY g.genre, t.theme;
        """)
    name_file = "themesbygenre"
    genres = []
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
        genres.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "genres": genres,
        "themes": themes,
        "count_times": count_times
    }
    return {"data": information}

@genreR.get("/movies/genre/themesMoreRepxGenre/top10desc", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_genre():
    query = text("""     
            SELECT TOP 10 g.genre, t.theme, COUNT(*) AS veces 
            FROM genres g 
            JOIN themes t ON g.id = t.id 
            WHERE g.genre IS NOT NULL AND t.theme IS NOT NULL 
            GROUP BY g.genre, t.theme 
            ORDER BY COUNT(*) DESC;
        """)
    name_file = "themesbygenretop10desc"
    genres = []
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
        genres.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "genres": genres,
        "themes": themes,
        "count_times": count_times
    }
    return {"data": information}

@genreR.get("/movies/genre/themesMoreRepxGenre/top10asc", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_genre():
    query = text("""                 
            SELECT TOP 10 g.genre, t.theme, COUNT(*) AS veces 
            FROM genres g 
            JOIN themes t ON g.id = t.id 
            WHERE g.genre IS NOT NULL AND t.theme IS NOT NULL 
            GROUP BY g.genre, t.theme 
            ORDER BY COUNT(*) ASC;
        """)
    name_file = "themesbygenretop10asc"
    genres = []
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
        genres.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "genres": genres,
        "themes": themes,
        "count_times": count_times
    }
    return {"data": information}