# How to use alembic migrations
1. Define your own models
2. Initial alembic by running `alembic init alembic` (make sure run inside your service package)
3. That command will create a folder called `alembic` with a file called `env.py` and a folder called `versions` and `alembic.ini`
4. Edit `alembic.ini` and set the sqlalchemy.url to your database url (check how the loan-application-service work for more details)
5. Edit `env.py` and set the target_metadata to your models metadata
6. Make sure all your models are imported in the `env.py` file
7. Run `alembic revision --autogenerate -m "your message"` to create a new migration file in the `versions` folder
8. Run `alembic upgrade head` to apply the migration

# Note:
- env in alembic is different from env in fastapi