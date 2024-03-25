import os

from sqlalchemy import Engine
from sqlalchemy.orm import sessionmaker
from sqlmodel import (
    create_engine, select, SQLModel,
)

from .MyModel import MyModel


class Database(object):
    engine : Engine = None
    Session : sessionmaker = None

    def __init__(self):
        db_user = os.environ.get('MYSQL_USERNAME')
        db_pass = os.environ.get('MYSQL_PASSWORD')
        db_host = os.environ.get('MYSQL_HOST')
        db_name = os.environ.get('MYSQL_DB_NAME')

        self.engine = create_engine(
            f"mysql://{db_user}:{db_pass}@{db_host}/{db_name}"
        )

        self.session = sessionmaker(autocommit=False, autoflush=False, bind=self.engine)
        SQLModel.metadata.create_all(self.engine)

    #DB에서 알맞는 모델 불러오기 로직
    def get_model_path(self, memberId : int):
        with self.Session() as s:
            statement = select(MyModel).where(MyModel.member_id == memberId)
            result : MyModel = s.exec(statement).first()
            return result
