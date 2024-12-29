const asyncHandeler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            Message: err.Message
        })
    }

}




// const asyncHandeler = (requestHandler) => {
//     (req, res, next) => {
//         Promise.resolve(requestHandler(res, req, next)).
//             catch((err) => (next))
//     }
// }

// export { asyncHandeler }