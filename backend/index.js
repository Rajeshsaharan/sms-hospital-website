// importing module

const express = require("express") //for express app
const twilio = require("twilio") // for sms api
const jwt = require("jsonwebtoken") //for token generation
const cors = require("cors")
const dotenv = require("dotenv") // for enviornment variable
const crypto = require('crypto')
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

//connecting to database

require("./config/config")() //calling 

//setting up to server
const app = express()
app.use(express.json())


//for post data setup

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//for file handling 
const upload = require('./middleware/profilePic')

//cors 
app.use(cors()) //for avoid cors policy

//for using env variable

dotenv.config()

//twilio setup
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_KEY)


//imprting model

const User = require('./model/User')
const Article = require('./model/Article')
const Ward = require('./model/Ward')
const Bed = require('./model/Beds')

//importing chechkauth

const checkAuth = require("./middleware/auth")
const { request } = require("http")
const { response } = require("express")


//app logic

app.post('/login', async (request, response) => {
    const { phoneNumber } = request.body
    if (!phoneNumber) {
        return response.send({ error: "please enter Your Phone Number" })
    }
    if (phoneNumber.length < 10) {
        return response.send({ error: "please enter all 10 digit number" })
    }
    const otp = Math.floor(1000 + Math.random() * 9000); //to generate otp 
    const timeout = 20 * 60 * 1000 //20 mintue
    const expires = Date.now() + timeout // both are in milisecond
    const data = `${phoneNumber}.${otp}.${expires}`
    const hash = crypto.createHmac("sha256", process.env.CRYPTO_HASH_KEY).update(data).digest("hex");
    const fullHash = `${hash}.${expires}` // returns to user
    try {
        const message = await client.messages.create({
            body: `your otp for your phone number ${phoneNumber} is ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phoneNumber
        })
        if (message) {
            const user = await User.findOne({ phoneNumber: phoneNumber })
            if (user) {
                console.log("test")
                const token = jwt.sign({ _id: user._id, phoneNumber: user.phoneNumber }, process.env.JWT_AUTH_KEY)
                return response.send({ user, fullHash, token })
            } else {
                const user = await new User({ phoneNumber: phoneNumber }).save()
                const token = jwt.sign({ _id: user._id, phoneNumber: user.phoneNumber }, process.env.JWT_AUTH_KEY)
                return response.send({ user, fullHash, token })
            }

        } else {
           return response.send({ error: "something went wrong" })
        }

    } catch (e) {
        return response.send({ error: e })

    }


})

//app verify
app.post('/verify', checkAuth, async (request, response) => {
    const { phoneNumber, otp, fullHash } = request.body
    if (!(otp && fullHash)) {
        return response.send({ error: "please login first" })
    }
    const [hashValue, expires] = fullHash.split('.')
    const now = Date.now()
    if (now > parseInt(expires)) {
        return response.send({ error: "timeout" })
    }
    const data = `${phoneNumber}.${otp}.${expires}`;
    const newHashvalue = crypto.createHmac("sha256", process.env.CRYPTO_HASH_KEY).update(data).digest("hex");
    if (newHashvalue === hashValue) {
        const user = await User.findOne({ phoneNumber: phoneNumber })
        return response.send({ user: user, isAuth: true, token : request.body.token });
    } else {
        return response.send({ error: "invalid otp" })
    }
})


//for url creating 
app.use('/profile', express.static('upload'))

//update logic
//we are not saving profile pic to database instead we are making a static url

app.post('/update-profile', upload.single('image'), async (request, response, next) => {
    const { username, bio, phoneNumber } = request.body
    if (request.file) {
        profile_url = `http://localhost:7000/profile/${request.file.filename}`
    } else {
        profile_url = `https://eu.ui-avatars.com/api/?name=${username}&size=250`

    }
    console.log(request.body)
    const user = await User.findOneAndUpdate(phoneNumber, {
        username: username,
        bio: bio,
        profilePicUrl: profile_url
    }, { new: true })
    return response.send({ user: user })


});


app.get('/wards', async(request,response)=>{
    const wards = await Ward.find({})
    response.send(wards)
})

app.post ("/create-wards", async(request, response)=>{
    const {ward_name ,ward_details , numberofBeds} = request.body
    console.log(numberofBeds)
    const NewWard = await new Ward({ward_name , ward_details})
    for(let i = 1; i <= numberofBeds ; i++){
        console.log(i)
        const newBed = await new Bed({BedId : i}).save()
        console.log(newBed._id)
        NewWard.bed.push(newBed._id)

    }
    NewWard.save()
    response.send(NewWard)
}
)




app.get("/articles", async(request, response)=>{
    const articles = await Article.find({})
    console.log(articles)
    response.send(articles)
    
})




app.post("/create-article", async(request, response)=>{
    const article = await new Article({title : "hello world"}).save()
    return response.send(article)
})



app.listen(process.env.PORT)