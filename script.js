function update()
{
    var text = $("#text")
    var ciphertext = $("#ciphertextInput").val().toUpperCase()//"ABCDEFAAABBCCDD"
    var plaintext = ""
    var lineSize = parseInt($("#lineSizeInput").val())//10

    for(i = 0; i < ciphertext.length; i++)
    {
        if(!ciphertext[i].match(/[a-zA-Z]/i))
        {
            plaintext += " "
            continue
        }
        var value = $("#" + ciphertext[i].toLowerCase() + "Input").val()
        //console.log(value)
        if (value != "")
        {
            plaintext += value
        }
        else
        {
            plaintext += " "
        }
    }
    //console.log(plaintext)
    
    var formattedText = ""
    if (ciphertext.length != plaintext.length)
    {
        //console.log("ciphertext and plaintext must be same length!")
    }
    else
    {
        for(i = 0; i < plaintext.length; i += lineSize)
        {
            //console.log(i)
            //console.log(plaintext.substr(i, lineSize))
            formattedText += "<div class=\"plaintext\">" + plaintext.substr(i, lineSize) + "</div>"
            //formattedText += "\n"
            formattedText += "<div class=\"ciphertext\">" + ciphertext.substr(i, lineSize) + "</div>"
            formattedText += "\n"
        }
        //console.log(formattedText)
        text.html(formattedText)
    }
  
}