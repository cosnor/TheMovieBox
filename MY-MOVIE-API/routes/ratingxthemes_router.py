from fastapi import APIRouter, status
from config.database import conn
from sqlalchemy import text
import os
from utils.util import write_to_file, read_from_file

ratingxthemesR = APIRouter()

@ratingxthemesR.get("/movies/moviesbyrating", status_code=status.HTTP_200_OK)
async def get_movies_by_ratingxthemes() -> dict:
    query = text("""
        SELECT TOP 50 m.name, m.rating, 
            CASE 
                WHEN m.rating >= 9 THEN 'S-Tier (9-10)' 
                WHEN m.rating >= 7 THEN 'A-Tier (7-8.9)' 
                WHEN m.rating >= 5 THEN 'B-Tier (5-6.9)' 
                ELSE 'C-Tier (0-4.9)' 
            END AS tier 
        FROM movies m 
        WHERE m.rating IS NOT NULL 
        ORDER BY m.rating DESC;
    """)
    name_file = "moviesbyrating"
    ratings = []
    number_of_movies = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        ratings.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "ratings": ratings,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@ratingxthemesR.get("/movies/moviesbyrating/top10desc", status_code=status.HTTP_200_OK)
async def get_movies_by_ratingxthemes() -> dict:
    query = text("""
                 SELECT TOP 10 m.name, m.rating, 
                    CASE 
                        WHEN m.rating >= 9 THEN 'S-Tier (9-10)' 
                        WHEN m.rating >= 7 THEN 'A-Tier (7-8.9)' 
                        WHEN m.rating >= 5 THEN 'B-Tier (5-6.9)' 
                        ELSE 'C-Tier (0-4.9)' 
                    END AS tier 
                FROM movies m 
                WHERE m.rating IS NOT NULL 
                ORDER BY m.rating DESC;
                """)
    name_file = "moviesbyratingtop10desc"
    ratings = []
    number_of_movies = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        ratings.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "ratings": ratings,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@ratingxthemesR.get("/movies/moviesbyrating/top10asc", status_code=status.HTTP_200_OK)
async def get_movies_by_ratingxthemes() -> dict:
    query = text("""
                 SELECT TOP 10 m.name, m.rating, 
                    CASE 
                        WHEN m.rating >= 9 THEN 'S-Tier (9-10)' 
                        WHEN m.rating >= 7 THEN 'A-Tier (7-8.9)' 
                        WHEN m.rating >= 5 THEN 'B-Tier (5-6.9)' 
                        ELSE 'C-Tier (0-4.9)' 
                    END AS tier 
                FROM movies m 
                WHERE m.rating IS NOT NULL 
                ORDER BY m.rating ASC;
                """)
    name_file = "moviesbyratingtop10asc"
    ratings = []
    number_of_movies = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        ratings.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "ratings": ratings,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@ratingxthemesR.get("/movies/bestratingpromxTheme", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_theme() -> dict:
    query = text("""
        SELECT TOP 50 t.theme, AVG(m.rating) AS rating_promedio 
        FROM themes t 
        JOIN movies m ON t.id = m.id 
        WHERE t.theme IS NOT NULL 
        GROUP BY t.theme 
        HAVING AVG(m.rating) IS NOT NULL;
    """)
    name_file = "bestratingpromxTheme"
    themes = []
    avg_rating = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        themes.append(row[0])
        avg_rating.append(row[1])
    information = {
        "themes": themes,
        "avg_rating": avg_rating
    }
    return {"data": information}

@ratingxthemesR.get("/movies/bestratingpromxTheme/top10desc", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_theme() -> dict:
    query = text("""
        SELECT TOP 10 t.theme, AVG(m.rating) AS rating_promedio 
        FROM themes t 
        JOIN movies m ON t.id = m.id 
        WHERE t.theme IS NOT NULL 
        GROUP BY t.theme 
        HAVING AVG(m.rating) IS NOT NULL 
        ORDER BY AVG(m.rating) DESC;
    """)
    name_file = "bestratingpromxThemetop10desc"
    themes = []
    avg_rating = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        themes.append(row[0])
        avg_rating.append(row[1])
    information = {
        "themes": themes,
        "avg_rating": avg_rating
    }
    return {"data": information}

@ratingxthemesR.get("/movies/bestratingpromxTheme/top10asc", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_theme() -> dict:
    query = text("""
        SELECT TOP 10 t.theme, AVG(m.rating) AS rating_promedio 
        FROM themes t 
        JOIN movies m ON t.id = m.id 
        WHERE t.theme IS NOT NULL 
        GROUP BY t.theme 
        HAVING AVG(m.rating) IS NOT NULL 
        ORDER BY AVG(m.rating) ASC;
    """)
    name_file = "bestratingpromxThemetop10asc"
    themes = []
    avg_rating = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        themes.append(row[0])
        avg_rating.append(row[1])
    information = {
        "themes": themes,
        "avg_rating": avg_rating
    }
    return {"data": information}

@ratingxthemesR.get("/movies/themeMoreRepet", status_code=status.HTTP_200_OK)
async def get_theme_more_repet() -> dict:
    query = text("""
        SELECT TOP 50 t.theme, COUNT(*) AS veces 
        FROM themes t 
        WHERE t.theme IS NOT NULL 
        GROUP BY t.theme;
    """)
    name_file = "themeMoreRepet"
    themes = []
    number_of_movies = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        themes.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "themes": themes,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@ratingxthemesR.get("/movies/themeMoreRepet/top10desc", status_code=status.HTTP_200_OK)
async def get_theme_more_repet() -> dict:
    query = text(""" 
        SELECT TOP 10 t.theme, COUNT(*) AS veces 
        FROM themes t 
        WHERE t.theme IS NOT NULL 
        GROUP BY t.theme 
        ORDER BY COUNT(*) DESC;
    """)
    name_file = "themeMoreRepettop10desc"
    themes = []
    number_of_movies = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        themes.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "themes": themes,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@ratingxthemesR.get("/movies/themeMoreRepet/top10asc", status_code=status.HTTP_200_OK)
async def get_theme_more_repet() -> dict:
    query = text(""" 
        SELECT TOP 10 t.theme, COUNT(*) AS veces 
        FROM themes t 
        WHERE t.theme IS NOT NULL 
        GROUP BY t.theme 
        ORDER BY COUNT(*) ASC;
    """)
    name_file = "themeMoreRepettop10asc"
    themes = []
    number_of_movies = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        themes.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "themes": themes,
        "number_of_movies": number_of_movies
    }
    return {"data": information}