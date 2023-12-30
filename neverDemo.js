function apiError(msg, code) {
    throw { msg: msg, code: code };
}
console.log(apiError("Server Error", 502));
