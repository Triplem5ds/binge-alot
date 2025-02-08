from pydantic import BaseModel
from datetime import datetime
from typing import Optional


# --- Binge Type Models ---
class BingeTypeBase(BaseModel):
    binge_type_code: str
    name: str

class BingeTypeResponse(BingeTypeBase):
    id_binge_type: int


class AddBingeTypeResponse(BaseModel):
    message: str
    binge_type: BingeTypeResponse


# --- Binge Models ---
class BingeBase(BaseModel):
    id_binge_type: int
    name: str
    binge_code: str
    id_parent_binge: Optional[int] = None
    start_time: datetime
    end_time: datetime
    status: str

class BingeResponse(BingeBase):
    id_binge: int


class AddBingeResponse(BaseModel):
    message: str
    binge: BingeResponse
