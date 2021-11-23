# YTYP Creator

Ytyp Creator allows you to generate a ytyp item in seconds by dragging .ODR & . OBN files over it.

Generates the following:
> - Flags 
> - Specialattributes
> - Bounding boxes
> - Embeded Collission & Model Names

<details>
  <summary>Example</summary>
  <p>
    
  ```c#
    <Item type="CBaseArchetypeDef">
      <lodDist value="500"/>
      <flags value="32"/>
      <specialAttribute value="0"/>
      <bbMin x="-3.42749000" y="-4.65485000" z="-1.90036200"/>
      <bbMax x="3.42749000" y="4.65484600" z="1.90036200"/>
      <bsCentre x="0.00000000" y="-0.00000190" z="0.00000000"/>
      <bsRadius value="6.08495000"/>
      <hdTextureDist value="5.00000000"/>
      <name>coolfile</name>
      <textureDictionary>coolfile</textureDictionary>
      <clipDictionary/>
      <drawableDictionary/>
      <physicsDictionary/>
      <assetType>ASSET_TYPE_DRAWABLE</assetType>
      <assetName>coolfile</assetName>
      <extensions/>
  </Item>
 ```
  </p>
</details>
 
 
 https://user-images.githubusercontent.com/39080460/142938750-ec7fe955-bdd4-45a3-bbab-52f4b739b57b.mp4



**Requirements**
> - [Node.js](https://nodejs.org/en/)
> - Windows 10 Or above


**Installation:**
> 1. Install Node.js from [Here](https://nodejs.org/en/)
> 2. Download the latest release from [here](https://github.com/brezedc/YTYP-Creator/archive/refs/heads/main.zip).
> 3. Right click and unzip the file.
> 4. Launch the `install.bat` file and wait for the **download to be finished**.
> 5. Installation Done!

**Usage:**
> - Drag any `.ODR` / `.OBN` files over the `run.bat` file, the console will be opened and closed and the ytyp will be copied to your clipboard.
> - [Video](https://gyazo.com/4e50a9d9ce10f9cc2bdbc8b26d6bd012)

**Customization:**

You can configure the following settings in the [settings.json](https://github.com/brezedc/YTYP-Creator/blob/main/settings.json) file:

> - embeddedColission `default: true`
> - defaultLodDist `default: 500.0`
> - defaultFlag `default: 32`

These are the default values that are going to be used when creating the ytyp.


**Support**
For support, please join my [discord](https://breze.site) __or__ create a [issue](https://github.com/brezedc/YTYP-Creator/issues/new).


