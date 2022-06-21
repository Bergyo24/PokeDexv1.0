# PokeDexv1.0
![pokedex](https://user-images.githubusercontent.com/77859854/174774503-785dbba5-a860-41e3-aa53-6eeead571d25.png)

First version of "my" Pokedex, it is more a proof of concept than an actual app, in future releases i'll make it more viable for mobile devices.<br>
Created with React and Bootstrap, my goal was to keep dependencies count low.<br>
Data is served by the [PokeAPI](https://pokeapi.co/), theyr [github](https://github.com/PokeAPI/pokeapi).<br>
You can find:<br>
-The Build files in the **build** branch<br>
-The Source files in the **master** branch<br>

(Master branch/Source files)To run it just download the files to a folder, ```npm install``` and then ```npm start```<br>
(Build branch/Prod files)To run it just download the files to a folder (child directory), ```npm install serve``` (on the parent directory) and then ```serve -s **name of your folder**``` (also on the parent directory)<br>
Whatever you downloaded put it in a folder first, insted of on the desktop, to avoid any problem<br>
Folder structure:<br>
```
/-root directory<br>
|-parent directory<br>
  |-child directory<br>
    |-project files<br>
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
