from fastapi import APIRouter, status
from config.database import conn
from sqlalchemy import text
import os
from utils.util import write_to_file, read_from_file

countryR = APIRouter()

@countryR.get("/movies/country", status_code=status.HTTP_200_OK)
async def get_movies_by_country():
    query = text("""
        SELECT TOP 50 r.country, COUNT(m.id) AS peliculas 
        FROM releases r 
        JOIN movies m ON r.id = m.id 
        WHERE r.country IS NOT NULL 
        GROUP BY r.country;
        """)
    name_file = "moviesbycountry"
    countries = []
    number_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        countries.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "countries": countries,
        "number_of_movies": number_of_movies
    }
    return information

@countryR.get("/movies/country/top10desc", status_code=status.HTTP_200_OK)
async def get_movies_by_country():
    query = text("""
        SELECT TOP 10 r.country, COUNT(m.id) AS peliculas 
        FROM releases r 
        JOIN movies m ON r.id = m.id 
        WHERE r.country IS NOT NULL 
        GROUP BY r.country 
        ORDER BY COUNT(m.id) DESC;
        """)
    name_file = "moviesbycountrytop10desc"
    countries = []
    number_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        countries.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "countries": countries,
        "number_of_movies": number_of_movies
    }
    return information

@countryR.get("/movies/country/top10asc", status_code=status.HTTP_200_OK)
async def get_movies_by_country():
    query = text("""
        SELECT TOP 10 r.country, COUNT(m.id) AS peliculas 
        FROM releases r 
        JOIN movies m ON r.id = m.id 
        WHERE r.country IS NOT NULL 
        GROUP BY r.country 
        ORDER BY COUNT(m.id) ASC;
        """)
    name_file = "moviesbycountrytop10asc"
    countries = []
    number_of_movies = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        countries.append(row[0])
        number_of_movies.append(row[1])
    information = {
        "countries": countries,
        "number_of_movies": number_of_movies
    }
    return information

@countryR.get("/movies/country/cantActorsxCountry", status_code=status.HTTP_200_OK)	
async def get_cant_actors_by_country():
    query = text("""
        SELECT TOP 50 r.country, COUNT(DISTINCT a.id) AS actores 
        FROM releases r 
        JOIN movies m ON r.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE r.country IS NOT NULL 
        GROUP BY r.country;
        """)
    name_file = "cantActorsxCountry"
    countries = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        countries.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "countries": countries,
        "number_of_actors": number_of_actors
    }
    return information
    
@countryR.get("/movies/country/cantActorsxCountry/top10desc", status_code=status.HTTP_200_OK)
async def get_cant_actors_by_country():
    query = text("""
        SELECT TOP 10 r.country, COUNT(DISTINCT a.id) AS actores 
        FROM releases r 
        JOIN movies m ON r.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE r.country IS NOT NULL 
        GROUP BY r.country 
        ORDER BY COUNT(DISTINCT a.id) DESC;
        """)
    name_file = "cantActorsxCountrytop10desc"
    countries = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        countries.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "countries": countries,
        "number_of_actors": number_of_actors
    }
    return information

@countryR.get("/movies/country/cantActorsxCountry/top10asc", status_code=status.HTTP_200_OK)
async def get_cant_actors_by_country():
    query = text("""
        SELECT TOP 10 r.country, COUNT(DISTINCT a.id) AS actores 
        FROM releases r 
        JOIN movies m ON r.id = m.id 
        JOIN actors a ON m.id = a.id 
        WHERE r.country IS NOT NULL 
        GROUP BY r.country 
        ORDER BY COUNT(DISTINCT a.id) ASC;
        """)
    name_file = "cantActorsxCountrytop10asc"
    countries = []
    number_of_actors = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        countries.append(row[0])
        number_of_actors.append(row[1])
    information = {
        "countries": countries,
        "number_of_actors": number_of_actors
    }
    return information

@countryR.get("/movies/country/bestratingpromxCountry", status_code=status.HTTP_200_OK)
def get_best_rating_prom_by_country():
    query = text("""     
        SELECT TOP 50 r.country, AVG(m.rating) AS rating_promedio 
        FROM releases r 
        JOIN movies m ON r.id = m.id 
        WHERE r.country IS NOT NULL 
        GROUP BY r.country 
        HAVING AVG(m.rating) IS NOT NULL;
        """)
    name_file = "bestratingpromxCountry"
    countries = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        countries.append(row[0])
        rating_prom.append(row[1])
    information = {
        "countries": countries,
        "rating_prom": rating_prom
    }
    return information

@countryR.get("/movies/country/bestratingpromxCountry/top10desc", status_code=status.HTTP_200_OK)
def get_best_rating_prom_by_country():
    query = text("""     
        SELECT TOP 10 r.country, AVG(m.rating) AS rating_promedio 
        FROM releases r 
        JOIN movies m ON r.id = m.id 
        WHERE r.country IS NOT NULL 
        GROUP BY r.country 
        HAVING AVG(m.rating) IS NOT NULL 
        ORDER BY AVG(m.rating) DESC;
        """)
    name_file = "bestratingpromxCountrytop10desc"
    countries = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        countries.append(row[0])
        rating_prom.append(row[1])
    information = {
        "countries": countries,
        "rating_prom": rating_prom
    }
    return information

@countryR.get("/movies/country/bestratingpromxCountry/top10asc", status_code=status.HTTP_200_OK)
async def get_best_rating_prom_by_country():
    query = text("""     
        SELECT TOP 10 r.country, AVG(m.rating) AS rating_promedio 
        FROM releases r 
        JOIN movies m ON r.id = m.id 
        WHERE r.country IS NOT NULL 
        GROUP BY r.country 
        HAVING AVG(m.rating) IS NOT NULL 
        ORDER BY AVG(m.rating) ASC;
        """)
    name_file = "bestratingpromxCountrytop10asc"
    countries = []
    rating_prom = []
    data = []
    file_path = f"config/files/{name_file}.txt"
    if not os.path.exists(file_path):
        data_query = conn.execute(query)
        data = write_to_file(file_path, data_query)
    else:
        data = read_from_file(file_path)
    for row in data:
        countries.append(row[0])
        rating_prom.append(row[1])
    information = {
        "countries": countries,
        "rating_prom": rating_prom
    }
    return information

@countryR.get("/movies/country/themesMoreRepxCountry", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_country():
    query = text("""
        SELECT TOP 50 r.country, t.theme, COUNT(*) AS veces 
        FROM releases r 
        JOIN themes t ON r.id = t.id 
        WHERE r.country IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY r.country, t.theme;
        """)
    name_file = "themesMoreRepxCountry"
    countries = []
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
        countries.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "countries": countries,
        "themes": themes,
        "count_times": count_times
    }
    return information

@countryR.get("/movies/country/themesMoreRepxCountry/top10desc", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_country():
    query = text("""
        SELECT TOP 10 r.country, t.theme, COUNT(*) AS veces 
        FROM releases r 
        JOIN themes t ON r.id = t.id 
        WHERE r.country IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY r.country, t.theme 
        ORDER BY COUNT(*) DESC;
        """)
    name_file = "themesMoreRepxCountrytop10desc"
    countries = []
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
        countries.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "countries": countries,
        "themes": themes,
        "count_times": count_times
    }
    return information

@countryR.get("/movies/country/themesMoreRepxCountry/top10asc", status_code=status.HTTP_200_OK)
async def get_themes_more_rep_by_country():
    query = text("""
        SELECT TOP 10 r.country, t.theme, COUNT(*) AS veces 
        FROM releases r 
        JOIN themes t ON r.id = t.id 
        WHERE r.country IS NOT NULL AND t.theme IS NOT NULL 
        GROUP BY r.country, t.theme 
        ORDER BY COUNT(*) ASC;
        """)
    name_file = "themesMoreRepxCountrytop10asc"
    countries = []
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
        countries.append(row[0])
        themes.append(row[1])
        count_times.append(row[2])
    information = {
        "countries": countries,
        "themes": themes,
        "count_times": count_times
    }
    return information

