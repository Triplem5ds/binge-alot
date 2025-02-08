from pydantic import BaseModel


class BingeTypeCreate(BaseModel):
    binge_type_code: str
    name: str
    
    
class BingeTypeResponse(BaseModel):
    id_binge_type: int
    binge_type_code: str
    name: str   
    
class AddBingeTypeResponse(BaseModel): 
    message: str
    binge_type: BingeTypeResponse    