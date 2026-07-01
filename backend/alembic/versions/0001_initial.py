"""initial schema

Revision ID: 0001_initial
Revises:
Create Date: 2026-06-30
"""

from alembic import op

revision = "0001_initial"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # The MVP seed script can create all tables from SQLAlchemy metadata.
    # Production migrations should be generated with `alembic revision --autogenerate`.
    pass


def downgrade() -> None:
    pass
