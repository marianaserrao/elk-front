export const removeLastBar=(path:string)=>(
  path.slice(-1)==='/' ? path.slice(0,-1) : path
)