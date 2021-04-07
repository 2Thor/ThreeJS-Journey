# Documentation ThreeJS by Dethoor Clément 
[CheatSheet Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Installation 

_Bundle def : You can see that like a pipe in which you send non-web-friendly assets and, at the end of the tube, you get web-friendly assets.
We choose Webpack as our bundle because it’s one of the most popular currently._

1. Dowload NodeJS.
2. npm install
3. npm run dev

> **PS** : If you want to build your website to deploy it online, you can run npm run build. The final files will appear in the /dist/ folder.
> Remember that you don't need to add any <script> in index.html. Webpack will handle this part.

Use starter pack on my [Github](https://github.com/2Thor/ThreeJS-Journey)

## Basic infos : 

Get axes helper :

```
const axesHelper = new THREE.AxesHelper(2) //lenght
scene.add(axesHelper)
```

There are 4 properties to transform objects in our scene

* position (to move the object)
* scale (to resize the object)
* rotation (to rotate the object) ( Unit cercle )
* quaternion (to also rotate the object)
