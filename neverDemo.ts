function apiError(msg: string, code: number): never{
    throw {msg, code};
}

console.log(apiError("Server Error", 502));