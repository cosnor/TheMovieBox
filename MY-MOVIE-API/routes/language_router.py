from fastapi import APIRouter, status
from config.database import conn
from sqlalchemy import text
import os
from utils.util import write_to_file, read_from_file

languageR = APIRouter()

@languageR.get("/movies/language", status_code=status.HTTP_200_OK)
async def get_movies_by_language() -> dict:
    query = text("""     
        SELECT TOP 50 l.language, COUNT(m.id) AS peliculas 
        FROM languages l 
        JOIN movies m ON l.id = m.id 
        WHERE l.language IS NOT NULL 
        GROUP BY l.language;
        """)
    name_file = "moviesbylanguage"
    languages = []
    number_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        languages.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "languages": languages,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@languageR.get("/movies/language/top10desc", status_code=status.HTTP_200_OK)
async def get_movies_by_language() -> dict:
    query = text("""     
        SELECT TOP 10 l.language, COUNT(m.id) AS peliculas 
        FROM languages l 
        JOIN movies m ON l.id = m.id 
        WHERE l.language IS NOT NULL 
        GROUP BY l.language 
        ORDER BY COUNT(m.id) DESC;
        """)
    name_file = "moviesbylanguagetop10desc"
    languages = []
    number_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        languages.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "languages": languages,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@languageR.get("/movies/language/top10asc", status_code=status.HTTP_200_OK)
async def get_movies_by_language() -> dict:
    query = text("""     
        SELECT TOP 10 l.language, COUNT(m.id) AS peliculas 
        FROM languages l 
        JOIN movies m ON l.id = m.id 
        WHERE l.language IS NOT NULL 
        GROUP BY l.language 
        ORDER BY COUNT(m.id) ASC;
        """)
    name_file = "moviesbylanguagetop10asc"
    languages = []
    number_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        languages.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "languages": languages,
        "number_of_movies": number_of_movies
    }
    return {"data": information}

@languageR.get("/movies/language/cantActorsxLanguage", status_code=status.HTTP_200_OK)
async def get_cant_actors_by_language() -> dict:
    query = text("""        
        SELECT TOP 50 l.language, COUNT(DISTINCT a.id) AS actores 
        FROM languages l 
        JOIN movies m ON l.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE l.language IS NOT NULL 
        GROUP BY l.language;
        """)
    name_file = "cantActorsxLanguage"
    languages = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        languages.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "languages": languages,
        "number_of_actors": number_of_actors
    }
    return {"data": information}

@languageR.get("/movies/language/cantActorsxLanguage/top10desc", status_code=status.HTTP_200_OK)
async def get_cant_actors_by_language() -> dict:
    query = text("""        
        SELECT TOP 10 l.language, COUNT(DISTINCT a.id) AS actores 
        FROM languages l 
        JOIN movies m ON l.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE l.language IS NOT NULL 
        GROUP BY l.language 
        ORDER BY COUNT(DISTINCT a.id) DESC;
        """)
    name_file = "cantActorsxLanguagetop10desc"
    languages = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        languages.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "languages": languages,
        "number_of_actors": number_of_actors
    }
    return {"data": information}

@languageR.get("/movies/language/cantActorsxLanguage/top10asc", status_code=status.HTTP_200_OK)
async def get_cant_actors_by_language() -> dict:
    query = text("""        
        SELECT TOP 10 l.language, COUNT(DISTINCT a.id) AS actores 
        FROM languages l 
        JOIN movies m ON l.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE l.language IS NOT NULL 
        GROUP BY l.language 
        ORDER BY COUNT(DISTINCT a.id) ASC;
        """)
    name_file = "cantActorsxLanguagetop10asc"
    languages = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        languages.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "languages": languages,
        "number_of_actors": number_of_actors
    }
    return {"data": information}

@languageR.get("/movies/language/bestratingpromxlanguage", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_language() -> dict:
    query = text("""        
        SELECT TOP 50 l.language, AVG(m.rating) AS rating_promedio 
        FROM languages l 
        JOIN movies m ON l.id = m.id 
        WHERE l.language IS NOT NULL 
        GROUP BY l.language 
        HAVING AVG(m.rating) IS NOT NULL;
        """)
    name_file = "bestratingpromxlanguage"
    languages = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        languages.append(row[0])
        rating_prom.append(row[1])
    information = {
        "languages": languages,
        "rating_prom": rating_prom
    }
    return {"data": information}

@languageR.get("/movies/language/bestratingpromxlanguage/top10desc", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_language() -> dict:
    query = text("""        
        SELECT TOP 10 l.language, AVG(m.rating) AS rating_promedio 
        FROM languages l 
        JOIN movies m ON l.id = m.id 
        WHERE l.language IS NOT NULL 
        GROUP BY l.language 
        HAVING AVG(m.rating) IS NOT NULL 
        ORDER BY AVG(m.rating) DESC;
        """)
    name_file = "bestratingpromxlanguagetop10desc"
    languages = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        languages.append(row[0])
        rating_prom.append(row[1])
    information = {
        "languages": languages,
        "rating_prom": rating_prom
    }
    return {"data": information}

@languageR.get("/movies/language/bestratingpromxlanguage/top10asc", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_language() -> dict:
    query = text("""        
        SELECT TOP 10 l.language, AVG(m.rating) AS rating_promedio 
        FROM languages l 
        JOIN movies m ON l.id = m.id 
        WHERE l.language IS NOT NULL 
        GROUP BY l.language 
        HAVING AVG(m.rating) IS NOT NULL 
        ORDER BY AVG(m.rating) ASC;
        """)
    name_file = "bestratingpromxlanguagetop10asc"
    languages = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        languages.append(row[0])
        rating_prom.append(row[1])
    information = {
        "languages": languages,
        "rating_prom": rating_prom
    }
    return {"data": information}

@languageR.get("/movies/language/themesMoreRepxLanguage", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_language() -> dict:
    query = text("""        
        SELECT TOP 50 l.language, t.theme, COUNT(*) AS veces 
        FROM languages l 
        JOIN themes t ON l.id = t.id 
        WHERE l.language IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY l.language, t.theme;
        """)
    name_file = "themesMoreRepxLanguage"
    languages = []
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
        languages.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "languages": languages,
        "themes": themes,
        "count_times": count_times
    }
    return {"data": information}

@languageR.get("/movies/language/themesMoreRepxLanguage/top10desc", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_language() -> dict:
    query = text("""        
        SELECT TOP 10 l.language, t.theme, COUNT(*) AS veces 
        FROM languages l 
        JOIN themes t ON l.id = t.id 
        WHERE l.language IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY l.language, t.theme 
        ORDER BY COUNT(*) DESC;
        """)
    name_file = "themesMoreRepxLanguagetop10desc"
    languages = []
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
        languages.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "languages": languages,
        "themes": themes,
        "count_times": count_times
    }
    return {"data": information}

@languageR.get("/movies/language/themesMoreRepxLanguage/top10asc", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_language() -> dict:
    query = text("""        
        SELECT TOP 10 l.language, t.theme, COUNT(*) AS veces 
        FROM languages l 
        JOIN themes t ON l.id = t.id 
        WHERE l.language IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY l.language, t.theme 
        ORDER BY COUNT(*) ASC;
        """)
    name_file = "themesMoreRepxLanguagetop10asc"
    languages = []
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
        languages.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "languages": languages,
        "themes": themes,
        "count_times": count_times
    }
    return {"data": information}