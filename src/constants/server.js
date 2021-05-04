module.exports = {
    IP: "http://localhost",
    PORT: ":8095",
    DEFAULT_PATH: "/api/v1/",
    routes: {
        authorization: {
            login: "auth/login",
            registration: "auth/register"
        }
    }
}