module.exports = function check(str, bracketsConfig) {
 
	if(str.length % 2 !== 0) return false;
  
  let stack = [];
  str = str.split('');
  str.forEach(el => {
  	bracketsConfig.forEach(e => {
      	if(el === e[0]){
        	stack.push(el);
          
        }else if(el === e[1] && stack[stack.length-1] === e[0]){
        	stack.pop();
        }
        
        if(e[0] == e[1] && el === e[0]){
        	if(stack[stack.length-2] === el && stack[stack.length-2] !== undefined){
          	stack.pop();
            stack.pop();
          }
        }
      
    });
  });
  
  
    
  return !stack.length;
}
