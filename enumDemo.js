var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["END_USER"] = 1] = "END_USER";
    Role[Role["PROGRAMMER"] = 2] = "PROGRAMMER";
})(Role || (Role = {}));
;
console.log(Role);
console.log(Role.END_USER);
console.log(Role[1]);
