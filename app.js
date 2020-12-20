const xlsx = require("xlsx");
const userFile = xlsx.readFile("./usuario.xlsx");
const workSheetUser = userFile.Sheets["Plan1"];

var dataUser = xlsx.utils.sheet_to_json(workSheetUser);

dataUser.forEach((entr)=>{
    console.log("User: " + entr.nome);
    console.log("Has phone number: " + entr.telefone);
    console.log("And RG: "+ entr.rg);
    console.log("----")
})