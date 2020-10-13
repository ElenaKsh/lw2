let validator = {
  flag: true,
  isArray(){
    if(Array.isArray(this)){
      this.flag = true;

    }
    else {
      this.flag = false;
    }
    return this;
  }
  toString: function(){
    return this.flag;
  }
}

console.log(validator('25').isArray());