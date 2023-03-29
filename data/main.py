# from typing import List, Union
# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.encoders import jsonable_encoder
# from fastapi.responses import JSONResponse

# from pydantic import BaseModel
# from starlette.middleware.cors import CORSMiddleware
# import certifi
# import pandas as pd
# from surprise import Reader, Dataset, SVD
# from runSVD import get_unplayed_surprise, recomm_game_by_surprise
# from surprise.dataset import DatasetAutoFolds
# from surprise.dataset import Reader
# from surprise import SVD

# reader = Reader(line_format = 'user item rating', sep=',', rating_scale=(0.5,10))
# ratings = pd.read_csv("./ratings.csv", encoding='UTF-8')
# data = Dataset.load_from_df(ratings[["user", "ID", "rating"]], reader)
# data_folds = DatasetAutoFolds(ratings_file='./ratings949.csv', reader=reader)
# trainset = data_folds.build_full_trainset()
# test_set = train_set.build_testset()
# algo = SVD(n_factors=50, n_epochs=20, random_state=42)
# algo.fit(trainset)

# games = pd.read_csv('./games_detailed_info.csv', encoding='UTF-8', usecols=[2,5])
# total_games = games['id'].tolist()


# mysql 연결 정보 저장 












from typing import List, Union
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware
import certifi
import pandas as pd
from surprise import Reader, Dataset, SVD
from surprise.dataset import DatasetAutoFolds
from surprise.dataset import Reader
from surprise import SVD
from SVD_last import recomm_game_by_surprise_sortbyiid,recomm_game_by_surprise,recomm_combi,get_unplayed_surprise

app = FastAPI()

# billboard_db = pymysql.connect(
#     user='root', 
#     passwd='{설정한 비밀번호}', 
#     host='127.0.0.1', 
#     db='juso-db', 
#     charset='utf8'
# )

# # Todo:모든 origins 허용, 나중에수정할것
origins = ['*']

app.add_middleware(
    CORSMiddleware,
#     allow_origins = origins,
#     # Todo: 일단 포함안함, 나중에 수정할수도 있음
#     allow_credentials = False,
#     allow_methods=['*'],
#     allow_headers=['*']
)


reader = Reader(line_format = 'user item rating', sep=',', rating_scale=(0.5,10))
data_folds = DatasetAutoFolds(ratings_file='./ratings949.csv', reader=reader)
trainset = data_folds.build_full_trainset()
algo = SVD(n_factors=50, n_epochs=20, random_state=42)
algo.fit(trainset)
games = pd.read_csv('./games_detailed_info.csv', encoding='UTF-8', usecols=[2,5])
ratings = pd.read_csv("./bgg-19m-reviews.csv", encoding='UTF-8')
total_games = games['id'].tolist().sort()
       
class Ids(BaseModel):
    ids:list

@app.get("/")
async def root():
    return ()

@app.get("/recommendation/{user_id}")
async def recommend_movie(user_id:str):


    # -----------추천 알고리즘------------
    top_n = 20
    unplayed_games = get_unplayed_surprise(ratings, total_games, user_id)
    top_games_preds = recomm_game_by_surprise(algo, user_id, unplayed_games,games, top_n)
    return {"result": top_games_preds}

@app.post("/recommendation")
async def recommend_comb(idlist: Ids):
    data = recomm_combi(algo, idlist, total_games, games, 20)
    return {"result":data}