# algorithms-datastructures
Work-in-progress textbook for CPSC 221 (Basic Data Structures and Algorithms) at the University of British Columbia.

Contains graphical comparison tools for comparing the Big O of different algorithms and the operations on different data structures.

Written using React.js (JavaScript, HTML, CSS), and uses the Material UI library.

View the currently-uploaded version of the site at https://byu46.github.io/algorithms-datastructures/.

Inspired by [cooervo/Algorithms-DataStructures-BigONotation](https://github.com/cooervo/Algorithms-DataStructures-BigONotation) but no direct references are taken.

## License

Shield: [![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0
International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg

## Requirements for compilation
Install npm or any node package manager for your operating system

Navigate your terminal to project folder and run the following commands

```npm init react-app my-app``` (initializes a React app in the current folder... or maybe initializes in System32/my-app, hopefully the former)

```npm install react-router-dom``` (installs React's library for routing between different URLs and pages)

```npm install react-syntax-highlighter --save``` (installs a syntax highlighting component for inline code)

```npm install react-scroll``` (installs a library for dynamically-called smooth scrolling events)

```npm install @material-ui/core``` (installs the Material UI library)

```npm install @material-ui/icons``` (installs the Material UI icons)

```optional: npm install gh-pages``` (I'm not really sure if this one is necessary if you're not on my account, try starting and if it doesn't work do this)

After those commands you can merge the repository files with the project folder and use

```npm start``` (run this when the terminal is in the same folder as package.json)

to open a local Node.js server and access the site through localhost:3000.
