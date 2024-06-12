const baseURL = "https://bezabu-drf-api-f2959062e96d.herokuapp.com/"

export const handlers = [
    res.get(`${baseURL}dj-rest-auth/user/`, (req,res,ctx) => {
        return res(ctx.json({
            pk: 1,
            username: "badmin",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 1,
            profile_image: "https://res.cloudinary.com/djxclxygo/image/upload/v1/media/images/filmcard6_w2lsph"
        }))
    })
    rest.port(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200));
    })
]