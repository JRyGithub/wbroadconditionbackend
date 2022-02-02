export const checkDomain = (req, res, next) => {
    const domain = req.get('host') || req.get(`host`)
    const whiteList = [
      `localhost:5000`,
      `wbroadcondition.web.app`,
    ]
    if(whiteList.includes(domain)) next()
    else res.status(404).send()
}