var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if (HOUR == 12 && MINUTE == 00 && PERIOD =="AM")
    {console.log("It is", HOUR, " midnight.")}
else if (MINUTE == 30 || 00 && PERIOD == "PM") 
{
    console.log("It's exactly", HOUR, "in the evening.")
}
else if (HOUR == 12 && MINUTE == 00 && PERIOD == "PM")
{
    console.log("It is", HOUR, "noon.")
}
else if (MINUTE > 30 && PERIOD == "AM") 
{
console.log("It's almost", HOUR+1, "in the morning.")
}
else if (MINUTE < 30 && PERIOD == "PM") 
{
console.log("It's just past", HOUR-1, "in the evening.")
}
