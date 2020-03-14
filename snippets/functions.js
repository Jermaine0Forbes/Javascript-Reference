function isString(val){
        if(typeof val === "string") return true;

        return false;
      }
      function isObj(val){
        if(typeof val === "object") return true;

        return false;
      }

    function hasLength(val){
      if(Array.isArray(val) || isString(val))
        return  val.length > 1 ? true: false;
      else if (isObj(val)){
        return Object.keys(val).length > 0 ? true :false;
      }

      return false;
    }
