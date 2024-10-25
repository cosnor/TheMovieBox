from fastapi import APIRouter, status
from config.database import conn
from sqlalchemy import text
import os
from utils.util import write_to_file, read_from_file

actorR = APIRouter()

@actorR.get("/movies/actor", status_code=status.HTTP_200_OK)
async def get_movies_by_actor() -> dict:
    query = text("""
        SELECT TOP 50 a.name, COUNT(m.id) AS peliculas 
        FROM actors a 
        JOIN movies m ON a.id = m.id 
        WHERE a.name IS NOT NULL 
        GROUP BY a.name;
    """)
    name_file = "moviebyactor"
    actors = []
    number_of_movies = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        actors.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "actors": actors,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@actorR.get("/movies/actor/top10desc", status_code=status.HTTP_200_OK)
async def get_top_10_actors_desc() -> dict:
    query = text("""
        SELECT TOP 10 a.name, COUNT(m.id) AS peliculas 
        FROM actors a 
        JOIN movies m ON a.id = m.id 
        WHERE a.name IS NOT NULL 
        GROUP BY a.name 
        ORDER BY COUNT(m.id) DESC;
    """)
    name_file = "top10actorsdesc"
    actors = []
    number_of_movies = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        actors.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "actors": actors,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@actorR.get("/movies/actor/top10asc", status_code=status.HTTP_200_OK)
async def get_top_10_actors_asc() -> dict:
    query = text("""
        SELECT TOP 10 a.name, COUNT(m.id) AS peliculas 
        FROM actors a 
        JOIN movies m ON a.id = m.id 
        WHERE a.name IS NOT NULL 
        GROUP BY a.name 
        ORDER BY COUNT(m.id) ASC;
    """)
    name_file = "top10actorsasc"
    actors = []
    number_of_movies = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        actors.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "actors": actors,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@actorR.get("/movies/actor/cantActorxMovies", status_code=status.HTTP_200_OK)
async def get_can_actor_by_movies():
    query = text("""
        SELECT TOP 50 m.name, COUNT(a.id) AS actores 
        FROM movies m 
        JOIN actors a ON m.id = a.id 
        WHERE m.name IS NOT NULL 
        GROUP BY m.name;
    """)
    name_file = "cantactorxmovies"
    movies = []
    number_of_actors = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        movies.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "actors": movies,
        "number_of_movies": number_of_actors
    }
    return {"data": information}


@actorR.get("/movies/actor/cantActorsxMovies/top10desc", status_code=status.HTTP_200_OK)
async def get_can_actors_by_movies():
    query = text("""
        SELECT TOP 10 m.name, COUNT(a.id) AS actores 
        FROM movies m 
        JOIN actors a ON m.id = a.id 
        WHERE m.name IS NOT NULL 
        GROUP BY m.name 
        ORDER BY COUNT(a.id) DESC;
    """)
    name_file = "cantactorsxmovies"
    movies = []
    number_of_actors = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        movies.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "actors": movies,
        "number_of_movies": number_of_actors
    }
    return {"data": information}

@actorR.get("/movies/actor/cantActorsxMovies/top10asc", status_code=status.HTTP_200_OK)
async def get_can_actors_by_movies():
    query = text("""
        SELECT TOP 10 m.name, COUNT(a.id) AS actores 
        FROM movies m 
        JOIN actors a ON m.id = a.id 
        WHERE m.name IS NOT NULL 
        GROUP BY m.name 
        ORDER BY COUNT(a.id) ASC;
    """)
    name_file = "cantactorsxmoviestop10asc"
    movies = []
    number_of_actors = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        movies.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "actors": movies,
        "number_of_movies": number_of_actors
    }
    return {"data": information}

@actorR.get("/movies/actor/bestratingpromxactor", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_actor():
    query = text("""
        SELECT TOP 50 a.name, AVG(m.rating) AS rating_promedio 
        FROM actors a 
        JOIN movies m ON a.id = m.id 
        WHERE a.name IS NOT NULL 
        GROUP BY a.name 
        HAVING AVG(m.rating) IS NOT NULL;
    """)
    name_file = "bestratingpromxactor"
    actors = []
    rating = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        actors.append(row[0])
        rating.append(row[1])
    information = {
        "actors": actors,
        "rating": rating
    }
    return {"data": information}

@actorR.get("/movies/actor/bestratingpromxactor/top10desc", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_actor():
    query = text("""
        SELECT TOP 10 a.name, AVG(m.rating) AS rating_promedio 
        FROM actors a 
        JOIN movies m ON a.id = m.id 
        WHERE a.name IS NOT NULL 
        GROUP BY a.name 
        HAVING AVG(m.rating) IS NOT NULL 
        ORDER BY AVG(m.rating) DESC;
    """)
    name_file = "bestratingpromxactortop10desc"
    actors = []
    rating = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        actors.append(row[0])
        rating.append(row[1])
    information = {
        "actors": actors,
        "rating": rating
    }
    return {"data": information}

@actorR.get("/movies/actor/bestratingpromxactor/top10asc", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_actor():
    query = text("""
        SELECT TOP 10 a.name, AVG(m.rating) AS rating_promedio 
        FROM actors a 
        JOIN movies m ON a.id = m.id 
        WHERE a.name IS NOT NULL 
        GROUP BY a.name 
        HAVING AVG(m.rating) IS NOT NULL 
        ORDER BY AVG(m.rating) ASC;
    """)
    name_file = "bestratingpromxactortop10asc"
    actors = []
    rating = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        actors.append(row[0])
        rating.append(row[1])
    information = {
        "actors": actors,
        "rating": rating
    }
    return {"data": information}

@actorR.get("/movies/actor/themesMoreRepxactor", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_actor():
    query = text("""
        SELECT TOP 50 a.name, t.theme, COUNT(*) AS veces 
        FROM actors a 
        JOIN themes t ON a.id = t.id 
        WHERE a.name IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY a.name, t.theme;
    """)
    name_file = "themesmorexactor"
    actors = []
    themes = []
    count_times = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        actors.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "actors": actors,
        "number_of_themes": themes,
        "count_times": count_times
    }
    return {"data": information}

@actorR.get("/movies/actor/themesMoreRepxactor/top10desc", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_actor():
    query = text("""
        SELECT TOP 10 a.name, t.theme, COUNT(*) AS veces 
        FROM actors a 
        JOIN themes t ON a.id = t.id 
        WHERE a.name IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY a.name, t.theme 
        ORDER BY COUNT(*) DESC;
    """)
    name_file = "themesmorexactortop10desc"
    actors = []
    themes = []
    count_times = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        actors.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "actors": actors,
        "number_of_themes": themes,
        "count_times": count_times
    }
    return {"data": information}

@actorR.get("/movies/actor/themesMoreRepxactor/top10asc", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_actor():
    query = text("""
        SELECT TOP 10 a.name, t.theme, COUNT(*) AS veces 
        FROM actors a 
        JOIN themes t ON a.id = t.id 
        WHERE a.name IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY a.name, t.theme 
        ORDER BY COUNT(*) ASC;
    """)
    name_file = "themesmorexactortop10asc"
    actors = []
    themes = []
    count_times = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        actors.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "actors": actors,
        "number_of_themes": themes,
        "count_times": count_times
    }
    return {"data": information}

