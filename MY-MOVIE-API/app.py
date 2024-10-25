from fastapi import FastAPI
from routes.director_router import directorR
from routes.productor_router import productorR
from routes.actor_router import actorR
from routes.year_router import yearR
from routes.genre_router import genreR
from routes.language_router import languageR
from routes.country_router import countryR
from routes.ratingxthemes_router import ratingxthemesR

app = FastAPI()

app.title =  "MovieAPI App"
app.version = "0.0.1"

app.include_router(directorR, tags=["Director"])
app.include_router(productorR, tags=["Productor"])
app.include_router(actorR, tags=["Actor"])
app.include_router(yearR, tags=["Year"])
app.include_router(genreR, tags=["Genre"])
app.include_router(languageR, tags=["Language"])
app.include_router(countryR, tags=["Country"])
app.include_router(ratingxthemesR, tags=["RatingxThemes"])