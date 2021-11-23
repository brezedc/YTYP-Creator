const fs = require("fs"), 
    ncp = require("copy-paste"),
    args = require('minimist')(process.argv.slice(2)),
    settings = require("../settings.json")


let files = args["_"];

if(files.length > 0) {
    let i = 0;
    let ytyp = "";
    files.forEach(file => {
        const regex = /(.{3})\s*$/g;
        const fileformat = file.match(regex);
        
        if(fileformat == "odr") {
            fs.readFile(file, 'utf8' , async (err, fileContent) => {
                if (err) return console.error(err)
                    
                let fileData = {
                    modelName: file.replace(/^.*[\\\/]/, '').slice(0, -4),
                    bounds: await getBounds(fileContent.split("\n")),
                    isCollission: false,
                }
                fileData.isDoor = fileData.modelName.includes("door");

                ytyp = (ytyp ?? generateYtyp(fileData)) + generateYtyp(fileData);
                i++;
                if(files.length == i) {
                    return ncp.copy(ytyp)
                }
            })
        } else if(fileformat == "obn") {
            fs.readFile(file, 'utf8' , async (err, fileContent) => {
                if (err) return console.error(err)
                    
                let fileData = {
                    modelName: file.replace(/^.*[\\\/]/, '').slice(0, -4),
                    bounds: await getBounds(fileContent.split("\n")),
                    isCollission: true,
                }
                fileData.isDoor = fileData.modelName.includes("door");
                                
                ytyp = (ytyp ?? generateYtyp(fileData)) + generateYtyp(fileData);
                i++;
                if(files.length == i) {
                    return ncp.copy(ytyp)
                }
            })    
        }
    })
}


    

const allowedStrings = ["AABBMin", "AABBMax", "Radius", "Center"]
function getBounds(data) {
    return new Promise(function(resolve, reject) {

        let result = {}

        data.forEach(str => {
            var isAllowed = false;
            allowedStrings.forEach(allowedString => {
                if (str.includes(allowedString)) isAllowed = true;
            });
            if (isAllowed) {
                var label = str.match(/[a-zA-Z]/g);
                if (label !==  null) {
                    label = label.join("");

                    str = str.replace(/ {2,}/g, "").replace(/[a-zA-Z]/g, "");
                    str = str.replace(/\t\t/g, "").replace(/\r/g, "")
                    if (str[0] === " ") {
                        str = str.substring(1);
                    }
                    result[label] = str.split(" ");
                }
            }
            resolve(result) 
        })
    })   
}

function generateYtyp(data) {
    // Sorry for totaly fucked up formatting, but needs to be this way in order for the clipboard to not be indexed :(
    let bounds = data.bounds
    return (
`<Item type="CBaseArchetypeDef">
    <lodDist value="${settings.defaultLodDist}"/>
    <flags value="${data.isDoor ? 604110848 : settings.defaultFlag}"/>
    <specialAttribute value="${data.isDoor ? 7 : 0}"/>
    <bbMin x="${bounds["AABBMin"][0]}" y="${bounds["AABBMin"][1]}" z="${bounds["AABBMin"][2]}"/>
    <bbMax x="${bounds["AABBMax"][0]}" y="${bounds["AABBMax"][1]}" z="${bounds["AABBMax"][2]}"/>
    <bsCentre x="${bounds["Center"][0]}" y="${bounds["Center"][1]}" z="${bounds["Center"][2]}"/>
    <bsRadius value="${bounds["Radius"][0]}"/>
    <hdTextureDist value="5.00000000"/>
    <name>${data.modelName}</name>
    ${settings.textureDictionary ? `<textureDictionary>${data.textureDictionary}</textureDictionary>` : `<textureDictionary>${data.modelName}</textureDictionary>`}
    <clipDictionary/>
    <drawableDictionary/>
    ${settings.embeddedColission ? `<physicsDictionary>${data.modelName}</physicsDictionary>` : "<physicsDictionary/>"}
    <assetType>${data.isCollission ? "ASSET_TYPE_ASSETLESS" : "ASSET_TYPE_DRAWABLE"}</assetType>
    <assetName>${data.modelName}</assetName>
    <extensions/>
</Item>
`)
}
