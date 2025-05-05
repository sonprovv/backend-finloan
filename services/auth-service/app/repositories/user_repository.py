from sqlalchemy.orm import Session
from ..models.model import UserAccount, UserRole, Role

# Get by username or email
def get_user_by_username_or_email(db: Session, username: str, email: str):
    return db.query(UserAccount).filter(
        (UserAccount.username == username) | (UserAccount.email == email)
    ).first()

# Create user
def create_user(db: Session, username: str, email: str, password_hash: str):
    user = UserAccount(username=username, email=email, password_hash=password_hash)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

# Get by username
def get_user_by_username(db: Session, username: str):
    return db.query(UserAccount).filter(UserAccount.username == username).first()

# Get active user by username
def get_active_user_by_username(db: Session, username: str):
    return db.query(UserAccount).filter(UserAccount.username == username, UserAccount.is_active == True).first()

# Get roles for user
def get_roles_for_user(db: Session, user_id: int):
    roles = (
        db.query(Role.name)
        .join(UserRole)
        .filter(UserRole.user_id == user_id)
        .all()
    )
    return [role[0] for role in roles]
